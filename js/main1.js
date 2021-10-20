var app = new Vue({
    el: '#app',
    data: {
        task:'',
        availableStatuses:['to-do','in-progress','finished'],
        editedTask:null,
            tasks: [
                {
                    name: ' Go to Market',
                    status: 'to-do'
                },
                {
                    name: ' Buy Some Books',
                    status: 'in-progress'
                },
                {
                    name: ' Prepare for Interview',
                    status: 'in-progress'
                }

            ]
        },
    methods:{
        submitTask(){
            if(this.task.length===0)return;
            if(this.editedTask===null) {
                this.tasks.push({
                    name: this.task,
                    status: 'to-do'
                })
            }else {
                this.tasks[this.editedTask].name=this.task;
                this.editedTask=null;
            }
               // this.task='',
               // this.status=''
        },
        deleteTask(index){
            this.tasks.splice(index,1);
        },
        editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask=index;
        },
        changeStatus(index){
            let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
            if(++newIndex>2)newIndex=0;
            this.tasks[index].status=this.availableStatuses[newIndex];
        },
        firstCharUpper(str){
            return str.charAt(0).toUpperCase()+str.slice(1);
        }

    }
})

