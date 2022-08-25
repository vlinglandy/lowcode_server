function BasicHtml(bodyStr,styleStr){
    return `<!DOCTYPE html>
    <html lang="zh">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        ${bodyStr}
        <style>
            html,body{
                padding:0;
                margin:0;
                width:100%;
                height:100%;
            }
            body{
                box-sizing:border-box;
                font-weight:normal;
                font-style:normal;
                text-align:left;
                display:flex;
                position:relative;
                width:100%;
                flex-direction:column;
                justify-content:flex-start;
                align-items:flex-start;
            }
            .link {
                text-align: center;
                padding: 1px 10px;
            }
            .link a {
                color: #409EFF;
                text-decoration: none;
            }
            .video-js .vjs-big-play-button {
                font-size: 2.5em !important;
                line-height: 2.3em !important;
                height: 2.5em !important;
                width: 2.5em !important;
                -webkit-border-radius: 2.5em !important;
                -moz-border-radius: 2.5em !important;
                border-radius: 2.5em !important;
                background-color: #73859f;
                background-color: rgba(115, 133, 159, 0.5) !important;
            }
            .vjs-big-play-button .vjs-icon-placeholder {
                font-size: 1.63em !important;
            }
            .video-js .vjs-time-control {
                display: block !important;
            }
            .video-js .vjs-remaining-time {
                display: none !important;
            }
            .button-com {
                transition: all 0.2s;
            }
            .button-com:hover {
                opacity: 0.8;
            }
            .card {
                width: 300px;
                height: 200px;
                text-align: center;
                margin: 0 auto;
                line-height: 50px;
                background: grey;
                color: aliceblue;
            }
            .canvas{
                margin: 5px 10px 0 10px;
                position: relative;
                height: 100%;
                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                background: #fff;
            }
            ${styleStr}
        </style>
    </body>
    </html>`
} 


function BasicVue(bodyStr,styleStr){
    return `<template>
    ${bodyStr}
    </template>
    
    
    <script>
    export default {
      data() {
        return {
    
        }
      },
    }
    </script>
    
    <style scoped>
    template{
        width: 100%;
        height: 100%;
    }

    .canvas{
        margin: 0 auto;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    .canvas::-webkit-scrollbar{
        display:none
    }
    ${styleStr}
    </style>`
}

// div.style和div.innerHtml
let FlexBoxHtml = `<div><div>`
// div.style和a.href和a.style和a.innerHtml
let LinkHtml = `<div class="link"><a underline="false" ref="linkCom"></a></div>`
// div.style和video.style和和video.src和source.src
let VideoHtml = `<div><video id="video" ref="video" class="video-js vjs-default-skin vjs-big-play-centered" controls><source /></video></div>`
// div.style和p.style和p.innerHtml
let TextHtml = `<div><p></p><div>`
// div.style和button.style
let ButtonHtml = `<div class="button-com"><button></button></div>`
// div.style和img.style和img.src和img.style和img.alt
let ImgHtml = `<div class="card"><img fit="cover"></img></div>`


export default {
    FlexBoxHtml,
    LinkHtml,
    VideoHtml,
    TextHtml,
    ButtonHtml,
    ImgHtml,
    BasicHtml,
    BasicVue
}