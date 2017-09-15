'use strict';

window.addEventListener('keydown', function(e) {
  var code = e.keyCode;
  if (code == 13 || code === 13) {
    e.preventDefault();
    return false;
  }
});

(function() {
  var screen = document.querySelector('.screen'),
    todo = document.getElementById('todo'),
    localTask = document.getElementById('local-task'),
    addTask = document.getElementById('addtask');

  addTask.addEventListener('click', addTodo, false);

  function addTodo(e) {
    e.preventDefault();

    if (screen.value == '') {
      alert("Enter task");
    } else {
      var task = document.createElement('div');
      task.className = 'task';

      var text = document.createElement('p');
      text.innerHTML = screen.value;

      var input = document.createElement('input');
      input.type = 'checkbox';
      input.value = '';
      input.className = 'edit';
      input.addEventListener('change', function() {

        if (this.checked == true) {
          text.style.color = '#f9320e';
          text.style.textDecoration = 'line-through';
        } else {
          text.style.textDecoration = 'none';
          text.style.color = '#555';
        }

      });

      var button = document.createElement('button');
      button.className = 'edit ion-trash-b';
      button.addEventListener('click', function() {
        todo.removeChild(task);
      });

      var taskComponent = [text, button, input];

      for (var j = 0; j < taskComponent.length; j++) {
        task.appendChild(taskComponent[j]);
      }
      var result = todo.appendChild(task);
      screen.value = '';
    }
    return result;
    console.log(result);

  }
}());