export default {
    namespaced: true,
    //  vuex 中的data
    state: {
        isClick: true,
        opacity: 0,
        strp: '',
    },
    // vuex中的methods
    mutations: {
        Print(state) {
            let word = '夕：<<>见字如面。<<>你肯定没想到我会用这种方式给你个小惊喜，但是，我就一个臭写代码的，不用这种方式会用什么方式。<<>今天也不是什么特殊的日子，所以不用猜为什么我会突然做一个东西给你，我们本身就是那种想到什么做什么的人。<<>所以我突发奇想就做了一个小东西给你。<<>那，我不叨念了，给首看到诗。<<>写信真是一件温柔的事，细腻的小心思就藏在横竖撇捺之中，像是一只温顺的小兽<<>躲在情意绵绵的字里行间，被火燎封印起来，等着解封的那一刻窜出来，跳进启信人眼底的柔波里。<<>你一眨眼，<<>温驯的小鹿有跳动一下，<<>柔软的暖风有轻拂一下，<<>遥远的星星有闪烁一下，<<>我也有心动<<>却不止一下<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>桥';
            let i = 0;
            setTimeout(() => {
                let timer = setInterval(() => {
                    if (word[i] == '<')
                        state.strp += "<br>";
                    else if (word[i] == '>')
                        state.strp += '&nbsp&nbsp&nbsp&nbsp'
                    else
                        state.strp += word[i];
                    i++;
                    if (i === word.length)
                        clearInterval(timer)
                },150)
            }, 5000);
        }
    },
    // 数据传递中介，负责将数据处理后用 commit 传输给mutations
    actions: {
    /* 
        function(context){
            在这里进行业务处理，可以使用定时器完成异步操作
            context.commit("mutations里的function")
        }
    */
        handleShow(context) {
            context.state.isClick = false;
            context.state.opacity = 1;
            setTimeout(() => {
                let audio = document.getElementById('Music');
                audio.play();
            }, 3000);
            context.commit('Print');
        }
    }
}