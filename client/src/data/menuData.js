let menu = [
    [
        {
            flag: "TextCom",
            name: "文本",
            icon: "assets/icon_text.png",
            component: "TextCom",
        },
        {
            flag: "ButtonCom",
            name: "按钮",
            icon: "assets/icon_btn.png",
            component: "ButtonCom",
        },
        {
            flag: "ImgCom",
            name: "图片",
            icon: "assets/icon_image.png",
            component: "ImgCom",
        },
        {
            flag: "VideoCom",
            name: "视频",
            icon: "assets/icon_video.png",
            component: "VideoCom",
        },
        {
            flag: "LinkCom",
            name: "链接",
            icon: "assets/icon_link.png",
            component: "LinkCom",
        },
    ],
    [
        {
            flag: "TextCom", name: "自然布局", icon: "assets/Layout_Nature.svg", component: "TextCom"
        },//8.18hp修改增加复合组件
        { flag: "TextCom", name: "页头", icon: "assets/Layout_Header.svg", component: "TextCom" },
        {
            flag: "TextCom", name: "选项卡", icon: "assets/Layout_chooseCard.svg", component: "TextCom"
        }
    ],
]

export default menu