/**
 * 获取指定样式
 * 
 */
const getStyle=(ele, attr)=>{
    if(ele.currentStyle)
        return ele.currentStyle[attr];
    else
        return getComputedStyle(ele, false)[attr];
}

/*
*js实现banner
*/
const jsBanner=(ele, attr, itemWidth, maxLen)=>
{
    let rote=itemWidth/720*7.5;   //计算px转vw 比率
    window.setInterval(()=>{
        //px
        let curentnum=parseInt(getStyle(ele, attr));
        if(curentnum>-maxLen){
            ele.style[attr]=(curentnum-itemWidth)/rote+'vw'
        }  
        else
        {
            ele.style[attr]=0;
        }
            
    }, 1500);
}

/**
 * css过渡实现banner
 * @param {} ele 
 */
const cssBanner=(ele)=>
{

}

/**
 * 帧动画实现轮播
 * @param {*} ele 
 */
const keyFrameBanner=(ele)=>
{

}

export default {
    StartBanner: function(ele, type, attr, itemWidth, maxLen){
        if(type=="js")
        {
            jsBanner(ele, attr, itemWidth, maxLen);
        }

        if(type=="css")
        {
            cssBanner(ele)
        }

        if(type=="keyframe")
        {
            keyFrameBanner(ele);
        }
    }
}


