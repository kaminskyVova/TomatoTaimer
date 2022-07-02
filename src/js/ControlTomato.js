import { AddNewTask } from './Tomato';

export class ControlTomato {
  constructor() {
    this.color = null;
    this.taskArray = [];

    this.addTaskToArray();
    this.getSetTimer();
  }

  addTaskToArray() {
    const input = document.querySelector('.task-name');
    const addBtn = document.querySelector('.task-form__add-button');
    let obj = {};
    let id = 0;

    const importanceBtn = document.querySelector('.button-importance');

    importanceBtn.addEventListener('click', () => {
      this.change();
    });

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (input.value.length) {
        id++;
        obj = {
          taskTitle: input.value,
          importance: this.color,
        };

        this.taskArray.push(obj);

        new AddNewTask({
          id: id,
          taskTitle: obj.taskTitle,
          importance: obj.importance,
        });
      } else {
        alert('Добавьте задачу!');
      }
      input.value = '';
    });
  }

  change() {
    const colorsArr = ['so-so', 'default', 'important'];
    const importanceBtn = document.querySelector('.button-importance');
    const randomColor = Math.floor(Math.random() * colorsArr.length);

    const color = colorsArr[randomColor];

    importanceBtn.classList.toggle(`${color}`);

    if (importanceBtn.classList.contains(`${color}`)) {
      importanceBtn.classList.remove(`${color}`);
      importanceBtn.classList.add(`${color}`);
      this.color = color;
    }
  }

  getSetTimer() {
    const timerCount = document.querySelector('.window__timer-text');
    const title = document.querySelector('.window__panel-title');

    let countMinute = 24;
    let countSeconds = 60;
    let timer = null;

    const btnStart = document.querySelector('.button-primary');
    const stopBtn = document.querySelector('.button-secondary');

    btnStart.addEventListener('click', () => {
      if (title.textContent != 'Сверстать сайт') {
        btnStart.disabled = true;
        btnStart.style.backgroundColor = 'grey';
        timer = setInterval(() => {
          timerCount.textContent = `${countMinute} : ${countSeconds}`;
          countSeconds--;
          if (countSeconds <= -1) {
            countMinute--;
            countSeconds = 60;
          }
          if (countMinute <= -1) {
            clearInterval(timer);
          }
        }, 1000);
      } else {
        alert('Добавьте активную задачу клинкув по ней!')
      }
    });

    stopBtn.addEventListener('click', () => {
      btnStart.disabled = false;
      btnStart.style.backgroundColor = '#cc0017';

      clearInterval(timer);
    });
  }
}
