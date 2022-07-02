import { AddNewTask } from './Tomato';

export class ControlTomato {
  constructor() {
    this.color = null;
    this.taskArray = [];
    this.addTaskToArray();
    // this.addToPage()
  }

  addTaskToArray() {
    const input = document.querySelector('.task-name');
    const addBtn = document.querySelector('.task-form__add-button');
    let obj = {};

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

    let id = 0

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      id++
      obj = {
        taskTitle: input.value,
        importance: this.color,
      };
      console.log('obj: ', obj);

      this.taskArray.push(obj);
      console.log('this.taskArray: ', this.taskArray);
      
      // this.addToPage()
      new AddNewTask({
        id: id,
        taskTitle: obj.taskTitle,
        importance: obj.importance,
      })
    });
  }

  addToPage() {
    this.taskArray.forEach( (task,index) => {
      new AddNewTask({
        id: (index += 1),
        taskTitle: task.taskTitle,
        importance: task.importance,
      })
    });
  }
}
