<template>
    <div id="box" :style="{opacity}">
        <audio src="../../public/xsb.mp3" autoplay ref="Music" id='Music'></audio>
        <p v-html="strp"></p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: 'Letter',
        computed: {
            ...mapState('heart',['opacity','strp'])
        },
        mounted(){
            this.$refs.Music.pause();
        }
    }
</script>

<style scoped>
#box {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -200;
    opacity: 0;
    color: #000000;
    padding-left: 4vw;
    padding-right: 4vw;
    padding-top: 1vh;
    width: 92vw;
    height: 99vh;
    text-align: left;
    background-image: url(../../public/123.png);
    overflow: hidden;
    background-size: cover;
    font-size: 28px;
    font-family: '华文行楷';
    transition: opacity 5s;
    overflow: scroll;
}
</style>