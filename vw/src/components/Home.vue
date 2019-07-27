<template>
  <div class="container">
    <div class="header">
      <div class="search-box">
        <span class="fa fa-search" aria-hidden></span>
        <input type="text" placehodld="请输入">
      </div>
    </div>
    <div class="main">
      <div class="navmenu-view">
        <div v-for="(item,index) in 11" :key="index" class="menu-item">菜单{{item}}</div>
      </div>
      <div class="item-view">
        <div v-for="(item,index) in 11" :key="index" class="info-item">
          <img src="../assets/logo.png" alt="图片"/>
          <div class="info">
            <span class="title">iphone6原装耳机</span>
            <span class="price">￥108.00</span>
            <span class="other">月销20056件</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <a  v-for="(item, index) in footBtns" :key="index" @click="$router.push(item.url)" >
        <i :class="item.class" aria-hidden="true"></i>
        <span>{{item.title}}</span> 
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      footBtns:[
        {title:'联系人' , url:'/banner', class:'fa fa-user'},
        {title:'电话' , url:'/msg', class:'fa fa-phone'},
        {title:'消息' , url:'/msg', class:'fa fa-commenting-o'},
        {title:'音乐' , url:'/msg', class:'fa fa-music'},
         {title:'相机' , url:'/msg', class:'fa fa-camera'},
      ]
    }
  },
  mounted(){
    //this.$getCss();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containter{
  width:100%; height: 100%; 
}

.header{
  width:100%;
  height:80px;
}

.header .search-box{
  padding-left:20px;
  display:inline-block;
  margin:10px 0;
  border:1px solid #ccc; 
  border-radius:25px;
  width:650px;
  height:50px;
  text-align:left;
}

.search-box span{
  font-size:28px;
  line-height:50px;
  color:#cecece;
}
.search-box>input{
  font-size:28px;
  margin:2px 0;
  padding:0;
  width:600px;
  height:46px;
  border:none;
  overflow:hidden;
  background:none;
}


.main{
  width:100%;
  height:auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #eee;
  margin-bottom: 120px;
}

.main .navmenu-view{
  width:30%; background:#fefefe;
}

.navmenu-view .menu-item{
   background:#fefefe;
   font-size:28px;
   margin:2px 0;
   height:100px;
   line-height:100px;
}

.navmenu-view .menu-item:hover{
  background:#cecece;
  color:white;
}

.main .item-view{
  width:70%;
  background:white;
}

.item-view .info-item{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width:100%；
}

.info-item img{
  margin:10px 10px 10px 50px;
  display: block;
  width:150px;
  height:150px;
}


.info-item .info{
  margin-top:20px;
  margin-left: 40px;
  text-align: left;
}
.info-item span{
  line-height: 50px;
  display: block;
  }

  .info span.title{font-size: 28px; color: black;}
  .info span.price{font-size: 24px; color:red; font-weight: bold;}
  .info span.other{font-size: 24px; color:#bcbcbc; }


.footer{
  width:100%;
  height:120px;
  position: fixed;
  bottom: 0;
  background:#999;
}

.footer a{
  position:relative;
  height:100%;
  margin:0;
  display:inline-block;
  width:20%;
}

.footer i{
  font-size:60px;
  line-height:80px;
  color:rgb(255, 101, 0);
}

.footer span{
  display:block;
  font-size:12px;
  font-weight:normal;
  color:white;
}




</style>
