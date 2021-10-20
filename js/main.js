var app = new Vue({
    el: '#app',
    data: {
        tasks: [
            {name: ' Go to Market', done: false},
            {name: ' Buy Some Books', done: false},
            {name: ' Prepare for interview', done: false},
        ]
    },
    methods: {
        addTask: function (e) {
            e.preventDefault();
            this.tasks.push({
                name: this.tasks.name,
                done: false
            });
        },
        // editTask: function (index, task) {
        //     this.tasks = task
        //     this.selectedIndex = index
        //     this.isEditing = true
        // },
        // updateTask: function (task) {
        //     this.tasks.splice(this.tasks.indexOf(task), 1, this.task)
        //     this.isEditing = false
        // },
        deleteTask: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        },
    }
});