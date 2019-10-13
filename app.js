new Vue({
    el:"#vue-app",
    data:{
        health:100,
        ended:false
    },
    methods:{
        punch:function(){   //用来触发的方法
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart:function(){
            this.health = 100;
            this.ended = false;
        }
    },
    computed:{

    }
});