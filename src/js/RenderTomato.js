import { el, setChildren } from 'redom';
import { Tomato } from './Tomato';

import {ControlTomato} from './ControlTomato'



export class RenderTomato {
  constructor() {
    this.render();
  }

  createTimerGroup() {
    const timer = document.createElement('p');
    timer.classList.add('window__timer-text');
    timer.textContent = '22:30';

    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('window__buttons');

    const btnStart = document.createElement('button');
    btnStart.classList.add('button');
    btnStart.classList.add('button-primary');
    btnStart.textContent = 'Start';

    const btnStop = document.createElement('button');
    btnStop.classList.add('button');
    btnStop.classList.add('button-secondary');
    btnStop.textContent = 'Stop';

    buttonGroup.append(btnStart, btnStop);

    const timerBody = document
      .querySelector('.window__body')
      .append(timer, buttonGroup);
    return timerBody;
  }

  createAddTaskForm() {
    const form = document.createElement('form');
    form.classList.add('form');
    form.insertAdjacentHTML(
      'afterbegin',
      `
				<input type="text" class="task-name input-primary" name="task-name" id="task-name" placeholder="название задачи">
        <button type="button" class="button button-importance default" aria-label="Указать важность"></button>
        <button type="submit" class="button button-primary task-form__add-button">Добавить</button>
		`
    );

    return document.querySelector('.pomodoro-form').append(form);
  }

  createTask() {
    const tasksFromTomato = new Tomato();
    console.log('tasksFromTomato: ', tasksFromTomato.tasks);

    const tasksList = document.querySelector('.pomodoro-tasks__quest-tasks');

    tasksFromTomato.tasks.forEach((task) => {
      console.log('task: ', task);
      tasksList.insertAdjacentHTML(
        'beforeend',
        `
			<li class="pomodoro-tasks__list-task ${task.importance}">
				<span class="count-number">${task.id}</span>
				<button class="pomodoro-tasks__task-text pomodoro-tasks__task-text_active">
					${task.taskTitle}
				</button>
				<button class="pomodoro-tasks__task-button"></button>

				<div class="burger-popup">
          <button class="popup-button burger-popup__edit-button">Редактировать</button>
          <button class="popup-button burger-popup__delete-button">Удалить</button>
        </div>
			</li>
			`
      );
      // this.popupMenuControl()
    });
  }

  popupMenuControl() {
    const openCloseBtns = document.querySelectorAll(
      '.pomodoro-tasks__task-button'
    );

    openCloseBtns.forEach((btn) => {
      btn.addEventListener('click', ({ target }) => {
				target.nextElementSibling.classList.toggle('burger-popup_active');
      });
    });

  }

  render() {
    this.createTimerGroup();
    this.createAddTaskForm();
    this.createTask();
    this.popupMenuControl();
		new ControlTomato
  }
}
