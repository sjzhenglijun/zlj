/**
 * Created by zlj on 17/3/7.
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
