import ButtonStyle from '@/components/style/ButtonStyle.vue'
import CommonStyle from '@/components/style/CommonStyle.vue'
import FlexBoxStyle from '@/components/style/FlexBoxStyle.vue'
import ImgStyle from '@/components/style/ImgStyle.vue'
import LinkStyle from '@/components/style/LinkStyle.vue'
import TextStyle from '@/components/style/TextStyle.vue'
import VideoStyle from '@/components/style/VideoStyle.vue'
import ButtonProp from '@/components/property/ButtonProp.vue'
import CommonProp from '@/components/property/CommonProp.vue'
import FlexBoxProp from '@/components/property/FlexBoxProp.vue'
import ImgProp from '@/components/property/ImgProp.vue'
import LinkProp from '@/components/property/LinkProp.vue'
import TextProp from '@/components/property/TextProp.vue'
import VideoProp from '@/components/property/VideoProp.vue'
import CenterButton from '@/components/global/CenterButton.vue'
import PageHeader from '@/components/global/PageHeader.vue'
import ButtonCom from '@/components/basic/ButtonCom.vue'
import ImgCom from '@/components/basic/ImgCom.vue'
import LinkCom from '@/components/basic/LinkCom.vue'
import TextCom from '@/components/basic/TextCom.vue'
import VideoCom from '@/components/basic/VideoCom.vue'
import DeleteDialog from '@/components/global/DeleteDialog.vue'
import ReleaseDialog from '@/components/global/ReleaseDialog.vue'
import ShowDialog from '@/components/global/ShowDialog.vue'
//右侧组件
import numInput from '@/components/module/numInput.vue'
import colorChoose from '@/components/module/colorChoose.vue'
import txtInput from '@/components/module/txtInput.vue'
import selectCols from '@/components/module/selectCols.vue'
import selectGroup from '@/components/module/selectGroup.vue'
import switchBtn from '@/components/module/switchBtn.vue'
// 动态渲染
import DynamicDraw from '@/components/core/DynamicDraw.vue'
import FlexBox from '@/components/core/FlexBox.vue'
import SingleDraw from '@/components/core/SingleDraw.vue'
// 单个渲染
import PowerfulDynamicDraw from '@/components/core/PowerfulDynamicDraw.vue'

  
export default {
    install(app){
        app.component('ButtonStyle',ButtonStyle)
           .component('VideoCom',VideoCom)
           .component('TextCom',TextCom)
           .component('LinkCom',LinkCom)
           .component('ImgCom',ImgCom)
           .component('ButtonCom',ButtonCom)
           .component('PageHeader',PageHeader)
           .component('CenterButton',CenterButton)
           .component('VideoProp',VideoProp)
           .component('TextProp',TextProp)
           .component('LinkProp',LinkProp)
           .component('ImgProp',ImgProp)
           .component('FlexBoxProp',FlexBoxProp)
           .component('CommonProp',CommonProp)
           .component('ButtonProp',ButtonProp)
           .component('VideoStyle',VideoStyle)
           .component('TextStyle',TextStyle)
           .component('LinkStyle',LinkStyle)
           .component('ImgStyle',ImgStyle)
           .component('FlexBoxStyle',FlexBoxStyle)
           .component('CommonStyle',CommonStyle)
           .component('DeleteDialog',DeleteDialog)
           .component('ReleaseDialog',ReleaseDialog)
           .component('PowerfulDynamicDraw',PowerfulDynamicDraw)
           .component('DynamicDraw',DynamicDraw)
           .component('SingleDraw',SingleDraw)
           .component('FlexBox',FlexBox)
           .component('ShowDialog',ShowDialog)
           .component('numInput', numInput)
           .component('colorChoose', colorChoose)
           .component('txtInput', txtInput)
           .component('selectCols', selectCols)
           .component('selectGroup', selectGroup)
           .component('switchBtn', switchBtn)
    }
}