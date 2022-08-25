const fs = require("fs");
const path = require("path");
const send = require("koa-send");
const Router = require("koa-router");
const archiver = require("archiver");

const router = new Router();

router.get("/", async ctx => {
  await ctx.render("index.pug");
});

/**
 * 上传文件
 */
router.post("/upload", async (ctx, next) => {
  console.log("调用上传接口");
  console.log(ctx.boay)
  const file = ctx.request.files.file;
  console.log(file.path) // 获取上传文件
  ctx.body = {
    path: file.path,
    Type: 1,
    IsSuccess: true,
    Message: "上传成功",
  };
});

/**
 * 清理上传文件目录
 */
router.get("/uphistoryclear", async (ctx, next) =>{
  console.log("clear")
  const path = 'fileStorage/uppath'
  emptyDir(path)
  ctx.body = {
    Type: 1,
    IsSuccess: true,
    Message: "清除成功",
  }; 
  await send(ctx, path);
})

/**
 * 下载指定文件
 */
router.get("/download/:filename", async ctx => {
  const filename = ctx.params.filename;
  const path = `fileStorage/dnpath/${filename}`;
  ctx.attachment(path);
  await send(ctx, path);
});

/**
 * 默认下载第一个文件
 */
router.get("/download/", async ctx => {
  const path = 'fileStorage/dnpath/';
  const files = fs.readdirSync(path);
  const targetPath = path + files[0]
  console.log(targetPath)
  ctx.attachment(targetPath);
  await send(ctx, targetPath);
});

router.get("/downloadAll", async ctx => {
  if (!fs.existsSync("ext")) {
    fs.mkdirSync("ext");
  }
  const zipName = `ext/${+new Date()}.zip`;
  const zipStream = fs.createWriteStream(zipName);
  const zip = archiver("zip");
  zip.pipe(zipStream);
  await zip.directory("upload");
  // 打包结束
  await zip.finalize();
  return send(ctx, zipName);
});

/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path 
 */
 function emptyDir(path) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
      const filePath = `${path}/${file}`;
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
          emptyDir(filePath);
      } else {
          fs.unlinkSync(filePath);
          console.log(`删除${file}文件成功`);
      }
  });
}


module.exports = router;
