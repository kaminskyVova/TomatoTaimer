import { AddNewTask } from './Tomato';

export class ControlTomato {
  constructor() {
    this.color = null;
    this.taskArray = [];
    this.addTaskToArray();
  }

  addTaskToArray() {
    const input = document.querySelector('.task-name');
    const addBtn = document.querySelector('.task-form__add-button');
    let obj = {};
    let id = 0;

    const importanceBtn = document.querySelector('.button-importance');

    const change = () => {
      const colorsArr = ['so-so', 'default', 'important'];

      const randomColor = Math.floor(Math.random() * colorsArr.length);

      const color = colorsArr[randomColor];

      this.color = color;

      importanceBtn.classList.toggle(`${color}`);

      if (importanceBtn.classList.contains(`${color}`)) {
        importanceBtn.classList.remove(`${color}`);
        importanceBtn.classList.add(`${color}`);
      }
    };

    importanceBtn.addEventListener('click', () => {
      change();
    });


    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if(input.value.length) {
        id++
        obj = {
          taskTitle: input.value,
          importance: this.color,
        };

        this.taskArray.push(obj);
        console.log('this.taskArray: ', this.taskArray);
        
          new AddNewTask({
            id: id,
            taskTitle: obj.taskTitle,
            importance: obj.importance,
          })
      } else {
        alert('Добавьте задачу!')
      }
      input.value = ''
      
    });
  }

}
