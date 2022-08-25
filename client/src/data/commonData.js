export default {
    LinkCom: { //更改了对象结构
        focus: false,
        link: 'www.baidu.com',
        content: '点击跳转',
        component: "LinkCom",
        style: {
            top: '',
            left: '',
            position: '',
            width: '80px',
            height: "40px"
        },
        linkStyle: {
            height: "40px",
            fontSize: "16px",
            color: "#409EFF",
            textDecoration: "none",
            lineHeight: "40px"
        },
        sonStyle: 'linkStyle'
    },
    ButtonCom: {
        focus: false,
        component: 'ButtonCom',
        props: {
            link: '#',
            content: '按钮',
            btnType: 'button',
        },
        style: {
            top: '',
            left: '',
            position: '',
            width: "75px",
            height: "40px"
        },
        btnStyle: {
            fontSize: "14px",
            lineHeight: "2px",
            fontWeight: "400px",
            color: "#FFF",
            backgroundColor: "#409EFF",
            opacity: 1,
            borderRadius: "3px",
            width: "75px",
            height: "40px"
        },
        sonStyle: 'btnStyle'
    },
    ImgCom: {
        focus: false,
        src: 'https://p3-passport.byteacctimg.com/img/user-avatar/c5c1c7b0e8cbe13fd9618089c750b2f8~300x300.image',
        content: '点击更改图片',
        component: "ImgCom",
        style: {
            width: "300px",
            height: "200px",
            top: '',
            left: '',
            position: ''
        },
        imgStyle: {
            width: "300px",
            height: "200px"
        },
        alt: '',
        sonStyle: 'imgStyle'
    },
    TextCom: {
        focus: false,
        content: '编辑文字',
        component: "TextCom",
        style: {
            top: '',
            left: '',
            position: '',
            width: ' ',
            height: ''
        },
        textStyle: {
            textDecoration: 'none',
            fontSize: "14px",
            lineHeight: "2px",
            fontWeight: "400px",
            opacity: 1,
            textAlign: 'left',
            verticalAlign: 'middle',
            letterSpacing: '0px',
            textIndent: '0px',
            fontStyle: 'normal'
        },
        sonStyle: 'textStyle'
    },
    VideoCom: {
        focus: false,
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        poster: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
        controls: true,
        content: '点击增加视频',
        component: "VideoCom",
        style: {
            width: '300px',
            height: "200px",
            top: '',
            left: '',
            position: ''
        },
        videoStyle: {
            width: "300px",
            height: "200px"
        },
        sonStyle: 'videoStyle'
    },
    FlexBox: {
        focus: false,
        name: "block",
        component: "FlexBox",
        style: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "60px",
            position: "relative",
            marginTop: "0px",
            marginLeft: "0px",
            marginBottom: "0px",
            marginRight: "0px",
            paddingTop: "5px",
            paddingLeft: "5px",
            paddingBottom: "5px",
            paddingRight: "5px",
            boxSizing: 'border-box',
            overflow: 'hidden',
            top: "0px",
            left: "0px",
            backgroundColor: "",
            borderStyle: "",
            borderWidth: "",
            borderColor: "",
            fontSize: "16px",
            borderRadius: "0px",
            lineHeight: ""
        },
        props: { content: "" },
        views: [],
        children: []
    },
    Node: {
        focus: false,
        name: "block",
        component: "FlexBox",
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            position: "relative",
            boxSizing: 'border-box',
            overflow: 'hidden',
            marginTop: "0px",
            marginLeft: "0px",
            marginBottom: "0px",
            marginRight: "0px",
            paddingTop: "0px",
            paddingLeft: "0px",
            paddingBottom: "0px",
            paddingRight: "0px",
            top: "0px",
            left: "0px",
            backgroundColor: "",
            borderStyle: "",
            borderWidth: "",
            borderColor: "",
            fontSize: "16px",
            borderRadius: "0px",
            lineHeight: ""
        },
        content: "",
        views: []
    }
}