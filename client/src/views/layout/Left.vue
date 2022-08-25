<template>
  <div class="left" ref="left">
    <div class="menuBtn" @click="showMenu" ref="menuBtn"></div>
    <div class="menu" v-show="isShow" ref="menu" @dragleave="dragleave">
      <div class="menuTitle">
        <span class="Tleft">组件库</span>
        <span class="Tright">
          <span class="closeBtn" @click="closeMenu"></span>
          <span class="topBtn" @click="fixedMemu" ref="topBtn"></span>
        </span>
      </div>
      <div class="searchBox">
        <div class="searchZoom">
          <input
            type="text"
            id="sbox"
            placeholder="搜索组件"
            v-model="searchKey"
          />
          <!-- hp更改，搜索方式 -->
          <span class="searchBtn"></span>
        </div>
      </div>
      <div class="eleSlot"><span>基础组件</span></div>
      <div class="baseEleBox">
        <div
          v-for="item in searchRes[0]"
          draggable="true"
          @dragstart="dragstart"
          :key="item.name"
          class="comBox"
          :id="item.flag"
        >
          <img
            class="img-show"
            draggable="false"
            :src="getImgUrl(item.icon)"
            alt="图片失踪"
          />
          <div class="com-name">{{ item.name }}</div>
        </div>
      </div>
      <div class="eleSlot"><span>复合组件</span></div>
      <div class="baseEleBox">
        <div
          v-for="item in searchRes[1]"
          draggable="true"
          @dragstart="dragstart"
          :key="item.name"
          class="comBox"
          :id="item.flag"
        >
          <img
            class="img-show"
            draggable="false"
            :src="getImgUrl(item.icon)"
            alt="图片失踪"
          />
          <div class="com-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "@/data/menuData.js";
export default {
  setup(){
    const getImgUrl = (name) =>{
      return new URL(`../../${name}`, import.meta.url).href
    }
    return {
      getImgUrl
    }
  },
  data() {
    return {
      menu,
      searchRes: [],
      isShow: false,
      isFixed: false,
      searchKey: "",
    };
  },
  methods: {
    dragstart(e) {
      this.$bus.emit("updateCurrentCom", {});
      e.dataTransfer.setData("attr", e.target.id);
      this.$bus.emit("clearFocus");
      e.dataTransfer.setData('comOffsetY',e.offsetY)//8.18hp修改预先存储鼠标相对组件位置
      e.dataTransfer.setData('comOffsetX',e.offsetX)
    },
    dragleave() {
      //当组件拖拽出去后隐藏左侧浮窗
      if (!this.isFixed) this.closeMenu();
    },
    showMenu() {
      //左侧浮窗隐藏控制
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.$refs.menuBtn.style.backgroundPosition = "-24px 0";
      } else {
        this.$refs.menuBtn.style.backgroundPosition = "0 0px";
        if (this.isFixed) this.fixedMemu();
      }
    },
    closeMenu() {
      this.isShow = false;
      this.$refs.menuBtn.style.backgroundPosition = "0 0px";
      if (this.isFixed) this.fixedMemu();
    },
    openMenu() {
      this.isShow = true;
      this.$refs.menuBtn.style.backgroundPosition = "-24px 0";
    },
    searchCom(key) {
      //搜索组件功能
      this.searchRes[0] = this.menu[0].filter((v) => v.name.includes(key));
      this.searchRes[1] = this.menu[1].filter((v) => v.name.includes(key))//8.18hp修改增加复合组件
    },
    fixedMemu() {
      //左侧浮窗固定控制
      this.isFixed = !this.isFixed;
      if (this.isFixed) {
        this.$refs.topBtn.style.backgroundPosition = "-38px 0px" //8.18hp修改图标大小
        this.$refs.menu.style.boxShadow = "none";
        this.$refs.menu.style.left = "40px";
        this.$refs.left.style.width = "340px";
      } else {
        this.$refs.topBtn.style.backgroundPosition = "-18px -19px" //8.18hp修改图标大小
        this.$refs.menu.style.boxShadow =
          "5px 0 5px -5px rgba(18, 21, 38, 0.3)";
        this.$refs.menu.style.left = "41px";
        this.$refs.left.style.width = "40px";
      }
    },
  },
  mounted() {
    //初始化组件库
    this.searchCom("");
  },
  watch: {
    searchKey(newVal) {
      //監聽搜索框
      this.searchCom(newVal);
    },
  },
};
</script>

<style scoped>
.left {
  margin-right: 2px;
  width: 40px;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  /* 禁用文字选中 */
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  z-index: 102;
  flex-shrink: 0;
  transition: width 0.4s;
}

.menuBtn {
  cursor: pointer;
  margin: 17px 0 0 8px;
  height: 24px;
  width: 24px;
  background: center no-repeat;
  background-image: url("../../assets/left_spring.png");
  background-size: 75px 51px;
  background-position: 0px 0px;
}

.menu {
  position: relative;
  top: -41px;
  left: 41px;
  width: 300px;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(237, 237, 237, 0.6);
  box-shadow: 4px 6px 6px 0 rgb(31, 50, 88, 0.08);
  transition: left 0.2s;
  transition: box-shadow 0.2s;
  transition: display 20s;
}
.baseEleBox {
  display: flex;
  flex-wrap: wrap;
}
.comBox {
  height: 113px;
  width: calc(1 / 3 * 100%);
  border: solid rgba(237, 237, 237, 0.6);
  border-width: 0px 1px 1px 0px;
  box-sizing: border-box;
  transition: box-shadow 0.3s;
}

.comBox:hover {
  box-shadow: 0px 7px 16px 1px rgba(0, 0, 0, 0.2);
}

.menuTitle {
  height: 48px;
  width: 100%;
}

.menuTitle .Tleft {
  float: left;
  margin-left: 15px;
  margin-top: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: left;
  vertical-align: middle;
}

.menuTitle .Tright {
  float: right;
}

 .Tright span {/*8.18hp修改更改图标大小 (以下)*/
  float: right;
  margin-top: 9px;
  margin-right: 9px;
  height: 20px;
  width: 20px;
  background: center no-repeat;
  background-image: url('../../assets/left_spring.png');
  background-size: 60px 41px;
}


.Tright .topBtn {
  cursor: pointer;
  background-position: -18px -19px;
}

.Tright .closeBtn {
  cursor: pointer;
  background-position: -0px -19px;
}/*8.18hp修改更改图标大小 (以上)*/

.searchBox {
  height: 84px;
  width: 100%;
}

.searchBox .searchZoom {
  float: left;
  margin: 12px 0 0 13px;
  padding-left: 8px;
  height: 28px;
  width: 266px;
  border: 1px solid rgba(196, 198, 207, 1);
  border-radius: 3px;
}

.searchBox input {
  float: left;
  height: 100%;
  outline: none;
  font-size: 12px;
  text-align: left;
  line-height: 28px;
}

.searchBox .searchBtn {
  float: right;
  margin: 2px 5px 0 0;
  height: 24px;
  width: 24px;
  background: center no-repeat;
  background-image: url("../../assets/left_spring.png");
  background-size: 75px 51px;
  background-position: -47px -25px;
}

.eleSlot {
  height: 42px;
  width: 100%;
  border: solid rgba(237, 237, 237, 0.6);
  border-width: 1px 0;
}

.eleSlot span {
  float: left;
  padding-left: 15px;
  font-size: 12px;
  line-height: 42px;
  text-align: left;
  font-weight: 700;
}

.img-show {
  width: 30px;
  height: 30px;
  margin-top: 20px;
}

.com-name {
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
}
</style>
