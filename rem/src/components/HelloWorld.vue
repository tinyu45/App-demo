<template>
  <div class="container">
    <div class="header">头部</div>
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
    <div class="footer">底部</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
  background:#336699;
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
  width:30%;
}

.navmenu-view .menu-item{
   background:#fefefe;
   font-size:28px;
   margin:2px 0;
   height:100px;
   line-height:100px;
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
  .info span.other{font-size: 24px; color:#bcbcbc;}


.footer{
  width:100%;
  height:120px;
  position: fixed;
  bottom: 0;
  background:aqua;
}


</style>
