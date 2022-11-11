<template>
    <div class="card" v-show="isClick">
        <div class="text1 content">
            I love you
        </div>
        <div class="text2 content">
            Can you touch my heart
        </div>
        <div class="heart content" @click="handleShow"></div>
    </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
      name:'cardbox',
      methods:{
        ...mapActions('heart',['handleShow']),
      },
      computed:{
        ...mapState('heart',['isClick','opacity']),
      }
  }
</script>

<style scoped>
/* 卡片样式 */
.card { 
  width: 700px;
  height: 300px;
  box-shadow: 0px 0px 22px 5px rgb(237, 237, 237);
  color: #334756;
  background-color: #f5efe6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.5rem;
  font-family: '楷体';
  /* 给予透视 */
  transform-style: preserve-3d;
  transform: perspective(900px) rotateX(23deg); 
}

/* 通用样式 */
.card::before,
.card::after {
  content:'';
  width: 50%;
  height: 100%;
  color: #b7c4cf;
  font-size: 40px;
  position: absolute;
  font-family: '华文行楷', '微软雅黑';
}

/* 制作书信页面 */
.card::before {
  content: '写给你的';
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform-origin: left;
  transition: 1.5s;
}
.card::after {
  content: '一封书信';
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transform-origin: right;
  transition: 1.5s;
}

/* 鼠标放置到书信上时的效果 */
.card:hover::before {
  transform: rotateY(-180deg);
}
.card:hover::after {
  transform: rotateY(180deg);
}

/* 鼠标经过书信时，让内容的不透明度变为1显示 */
.content {
  opacity: 0;
  transition: 1.5s;
}
.card:hover .content {
  opacity: 1;
}

/* 爱心桃 */
.heart {
  position: absolute;
  background-color: pink;
  right: 300px;
  bottom: 0;
  transform: rotate(45deg) translateX(-70%);
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.heart::before {
  content: '';
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: pink;
  position: absolute;
  transform: translateY(-25px);
}
.heart::after {
  content: '';
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: pink;
  position: absolute;
  transform: translateX(-25px);
}

/* 修饰文字 */
.text1 {
    color: #7D6E83;
    margin-top: 15px;
    font-family: '楷体';
    font-weight: 600;
}
.text2 {
    color: #7D6E83;
    font-weight: bold;
    margin-top: 15px;
    font-size: 25px;
}
</style>