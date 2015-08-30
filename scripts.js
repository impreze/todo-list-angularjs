var app = angular.module('Todo', []);

app.controller('TodoCtrl', function() {
  this.newTodo = '';
  
  this.todos = [
    'Take out the trash', 
    'Walk the dog',
    'Finish watching the latest episode of "Game of Thrones"'
  ];
  
  this.done = function(todo) {
    var indexOf = this.todos.indexOf(todo);
    if (indexOf !== -1) {
      this.todos.splice(indexOf, 1);
    }
  };
  
  this.add = function(e) {
    if (this.newTodo === ""){
      alert("Please enter a task before submitting");
    }
    else {
      if (e == 'submit' || e.which === 13) {
        this.todos.push(this.newTodo);
        this.newTodo = '';
      }
    }
  };
  
});
