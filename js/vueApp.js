/**
 * Created by zlj on 17/3/13.
 */
var vm=new Vue({
    el:'#vueBox',
    data:{
        msgData:[
        ],
        username:'',
        userage:'',
        userjob:'',
        nowIndex:-999,
        modalTitle:'',
        isModal:'',
        isTarget:''
    },
    methods:{
        add:function(){
            if(this.username==''){
                this.isModal='modal';
                this.isTarget='#layger';
                this.modalTitle='请先输入用户名!'
            }else if(this.username){
                this.msgData.push({
                    name:this.username,
                    age:this.userage,
                    job:this.userjob
                });
                if(this.userage=='')
                {
                    this.msgData[this.msgData.length-1].age='未填写';
                }if(this.userjob=='')
                {
                    this.msgData[this.msgData.length-1].job='未填写';
                }
                this.isModal='';
                this.isTarget='';
                this.username='';
                this.userage='';
                this.userjob='';
            }
        },
        deleteMsg:function(n){
            if(n==-99)
            {
                this.msgData=[];
                this.nowIndex=-999;
            }else if(n>=0){
                this.msgData.splice(this.nowIndex,1);
                this.nowIndex=-999;
            }

        }
    }
});
var vm2=new Vue({
    el:'#vue_get',
    data:{
        getData:[],
        txt:'',
        nowIndex:-1
    },
    methods:{
        get:function(ev){
            if(ev.keyCode==38 || ev.keyCode==40){
                return;
            }
            if(ev.keyCode==13){
                window.open('https://www.baidu.com/s?wd='+this.txt);
            }
            this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
                {params: {wd:this.txt},jsonp:"cb"})
                .then(function(res){
                    this.getData=res.data.s;
                },function(){
                    console.log('请求错误');
                    console.log(this.txt)
                })
        },
        changeDown:function(){
            this.nowIndex++;
            if(this.nowIndex==this.getData.length){
                this.nowIndex=0;
            }
            this.txt=this.getData[this.nowIndex];
        },
        changeUp:function(){
            this.nowIndex--;
            if(this.nowIndex==-1){
                this.nowIndex=this.getData.length-1;
            }
            this.txt=this.getData[this.nowIndex];
        },
        searchIt:function(){
            window.open('https://www.baidu.com/s?wd='+this.txt);
        },
        xuanting:function(idx){
            this.nowIndex=idx;
            this.txt=this.getData[idx];
        },
        dj_search:function(){
            window.open('https://www.baidu.com/s?wd='+this.txt);
        },
        deleteAll:function(){
            this.getData=[];
            this.txt='';
        }

    }
});
//https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&json=1&p=3&sid=22104_1450_19037
//正确语法:Vue.http.jsonp(url,{params: {pageID:29},jsonp:"_callback"})
$('.form-control').focus();
//以下为bootstrap代码
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
