function imgDataFormat(data){
    data = commonDataFormat(data)
    // 在这里进行数据处理
    data.style.zIndex = 50
    return data
}

function linkDataFormat(data){
    data = commonDataFormat(data)
    // 在这里进行数据处理
    data.style.zIndex = 50
    return data
}

function videoDataFormat(data){
    data = commonDataFormat(data)
    // 在这里进行数据处理
    data.style.zIndex = 50
    return data
}

function textDataFormat(data){
    data = commonDataFormat(data)
    // 在这里进行数据处理
    data.style.zIndex = 50
    return data
}

function buttonDataFormat(data){
    data = commonDataFormat(data)
    // 在这里进行数据处理
    data.style.zIndex = 50
    return data
}
// 统一格式化
function commonDataFormat(data){
    // 在这里进行数据处理
    return data
}

export function dataFormat(componentName,data) {
    console.log("数据特殊化处理");
    switch( componentName ){
        case 'LinkCom': data = linkDataFormat(data);break;
        case 'VideoCom':data = videoDataFormat(data);break;
        case 'ButtonCom':data = buttonDataFormat(data);break;
        case 'TextCom':data = textDataFormat(data);break;
        case 'ImgCom':data = imgDataFormat(data);break;
        default :data =commonDataFormat(data);break;
    }
    return data;
}