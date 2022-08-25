import HtmlData from '@/data/htmlData.js'

function strToDom(str){
    var temp = document.createElement('div')
    temp.innerHTML = str
    return temp.childNodes
}

function domToStr( node ) {  
    var tmpNode = document.createElement( "div" );  
    tmpNode.appendChild( node.cloneNode( true ) );  
    var str = tmpNode.innerHTML;  
    tmpNode = node = null; // prevent memory leaks in IE  
    return str;  
 }  

// function addStyle(dom,styleObj){
//     return new Promise(resolve=>{
//         console.log(dom);
//         for(let s in styleObj){
//             dom.style.s=styleObj[s]
//         }
//         console.log(dom);
//         resolve(dom)
//     })
// }

let baseName = 'block-'

function getMainStr(bodyDom,styleStr,isVue){
    let bodyStr = domToStr(bodyDom)
    let resStr = isVue ? HtmlData['BasicVue'](bodyStr,styleStr) : HtmlData['BasicHtml'](bodyStr,styleStr)
    return resStr
}



function getLinkComDom(view,index){
    let basicDom = strToDom(HtmlData['LinkHtml'])[0]
    basicDom.classList.add(baseName + index)
    basicDom.childNodes[0].classList.add(baseName + (index+1))
    basicDom.childNodes[0].href = 'http://' + view.link
    // basicDom.childNodes[0].style={
    //     ...view.linkStyle,
    //     ...basicDom.childNodes[0].style
    // }
    basicDom.childNodes[0].innerHTML = view.content
    return basicDom
}
function getButtonComDom(view,index){
    let basicDom = strToDom(HtmlData['ButtonHtml'])[0]
    basicDom.classList.add(baseName + index)
    basicDom.childNodes[0].classList.add(baseName + (index+1))
    // basicDom.childNodes[0].style={
    //     ...view.btnStyle,
    //     ...basicDom.childNodes[0].style
    // }
    basicDom.childNodes[0].innerHTML = view.props.content
    return basicDom
}
function getImgComDom(view,index){
    let basicDom = strToDom(HtmlData['ImgHtml'])[0]
    basicDom.classList.add(baseName + index)
    basicDom.childNodes[0].classList.add(baseName + (index+1))
    basicDom.childNodes[0].src = view.src
    // basicDom.childNodes[0].style={
    //     ...view.imgStyle,
    //     ...basicDom.childNodes[0].style
    // }
    return basicDom

}
function getTextComDom(view,index){
    let basicDom = strToDom(HtmlData['TextHtml'])[0]
    basicDom.classList.add(baseName + index)
    basicDom.childNodes[0].classList.add(baseName + (index+1))
    // basicDom.childNodes[0].style={
    //     ...view.textStyle,
    //     ...basicDom.childNodes[0].style
    // }
    basicDom.childNodes[0].innerHTML = view.content
    return basicDom
}
function getVideoComDom(view,index){
    let basicDom = strToDom(HtmlData['VideoHtml'])[0]
    basicDom.classList.add(baseName + index)
    basicDom.childNodes[0].classList.add(baseName + (index+1))
    // basicDom.childNodes[0].style={
    //     ...view.videoStyle,
    //     ...basicDom.childNodes[0].style
    // }
    // basicDom.childNodes[0] = await addStyle(basicDom.childNodes[0],view.videoStyle)
    basicDom.childNodes[0].src = view.src
    basicDom.childNodes[0].childNodes[0].src = view.src

    return basicDom
}
function getFlexBoxDom(view,index){
    let basicDom = strToDom(HtmlData['FlexBoxHtml'])[0]
    // 加个类
    basicDom.classList.add(baseName + index)
    basicDom.innerHTML = view.props.content
    return basicDom
}



export default {
    getMainStr,
    LinkCom: getLinkComDom,
    ButtonCom: getButtonComDom,
    ImgCom: getImgComDom,
    TextCom: getTextComDom,
    VideoCom: getVideoComDom,
    FlexBox: getFlexBoxDom
}