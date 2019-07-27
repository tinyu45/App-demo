<template>
    <div class="container">
        <div class="banner-box" v-for="(item, index) in bannerdata" :key="index">
            <h3>{{item.title}}</h3>
            <div class="banner-container">
                <ul>
                    <li v-for="(c_item, c_index) in item.items" :key="c_index">{{c_item.text}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'banner',
        //状态数据
        data(){
            return {
               bannerdata:[
                   {
                       title:'JS原生',
                       items:[
                           {text:1, src:''},
                           {text:2, src:''},
                           {text:3, src:''},
                           {text:4, src:''},
                           {text:5, src:''},
                       ]
                   },

                   {
                       title:'CSS3变换',
                       items:[
                           {text:1, src:''},
                           {text:2, src:''},
                           {text:3, src:''},
                           {text:4, src:''},
                           {text:5, src:''},
                       ]
                   },

                   {
                       title:'Key Animation',
                       items:[
                           {text:1, src:''},
                           {text:2, src:''},
                           {text:3, src:''},
                           {text:4, src:''},
                           {text:5, src:''},
                       ]
                   },
               ]     
            }      
        },
        //方法
        methods:{

        },
        //初始化（页面渲染完）
        mounted(){
            let eles=document.getElementsByTagName("ul");
            let items=eles[0].getElementsByTagName('li');
            let itemWidth=items[0].offsetWidth;
            let maxLen=itemWidth*(items.length-1);
            let attr='marginLeft';
            this.$Imethods.StartBanner(eles[0], 'js', attr, itemWidth, maxLen);

        }
    }
</script>
    
<style scoped>
    .container{width:100%;  height:100%;}
    .banner-box{
        margin:15px 0;
        width:100%;
        height:480px;
        border-radius:10px 10px 0 0;
    }
    .banner-box h3{
        text-align:left; 
        line-height:60px; 
        font-size:40px; 
        font-weight:normal; 
        color:white;   
        }

    .banner-container{
        width:720px;
        height:405px;
        margin:0 auto;
        border-radius:5px;
        overflow:hidden;
    }

    .banner-container ul{
        width:500%; 
        height:100%; 
        display:flex;       /*弹性盒子布局*/
        flex-direction:row; 
        flex-wrap:nowrap;
    }

    .banner-container ul li{
        width:720px;
        height:100%;
        line-height:400px;
        font-size:50px;
        color:white;
        font-weight:bold;
    }

    .banner-container li:nth-child(1){background:#66cccc;}
    .banner-container li:nth-child(2){background:#ccff66;}
    .banner-container li:nth-child(3){background:#ff9999;}
    .banner-container li:nth-child(4){background:#ff6600;}
    .banner-container li:nth-child(5){background:#666699;}

</style>