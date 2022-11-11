<template>
  <div>
    <Cardbox/>
    <Letter/>
  </div>
</template>

<script>
import Cardbox from './components/cardbox.vue';
import Letter from './components/letter.vue'
export default {
  name:'App',
  components:{
    Cardbox,
    Letter
    },
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #d9afd9;  
  background-image: linear-gradient(12deg, #d9afd9 0%, #97d9e1 100%);
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -ms-font-smoothing: antialiased;
}
</style>