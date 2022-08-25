## 没有全局事件总线EventBus

> 所以我用了mitt，现在可以用this.$bus.emit和this.$bus.on

## mitt的坑，误踩！

> 不能直接this.$bus.$emit("xxx",a,b)
>
> 只能传递一个对象this.$bus.emit("xxx",{a:a,b:b})

## vite里图片不能用webpack里的require

> 所以用new url拼接图片

## 跨域差不多

# 在原型上定义方法区别

> 改成app.config.globalProperties = 变量

## 变量.sync改为v-model:变量

## 没有了@xxx.native这个属性

## 没有element，我引入了plus

## vite没有webpack的@，需要自己设置别名(已经设置好了，实在不行只能点点杠大法../../../../)

## ::deep要改成:deep（）