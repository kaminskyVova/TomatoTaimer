export class Tomato {
  constructor(obj) {
    (this.id = obj.id),
      (this.timer = 3),
      (this.littlePause = obj.littlePause),
      (this.bigPause = obj.bigPause),
      (this.tasks = []),
      (this.taskTitle = obj.task),
      (this.activeTask = null);
  }

  setTask(obj) {
    obj = {
      id: this.id,
      // timer: this.timer,
      taskTitle: this.task,
    };
    this.tasks.push(obj);
    console.log('this.tasks: ', this.tasks);
  }

  setActiveTask(task) {
    task = {
      id: this.id,
      // timer: this.timer,
      task: this.taskTitle,
    };
    if (task.id === this.id) {
      this.activeTask = task;
    }
    console.log('this.activeTask: ', this.activeTask);
    this.getStartTask()
  }

  getStartTask(countMinute) {
    console.log(this.timer);
    countMinute = this.timer;
    let countSeconds = 5;
    const timer = setInterval(() => {
      console.log(`${countMinute} : ${countSeconds}`);
      countSeconds--;
      if (countSeconds <= -1) {
        countMinute--;
        countSeconds = 5;
      }
      if (countMinute <= -1) {
        clearInterval(timer);
      }
    }, 1000);
  }
}

export class NewTask extends Tomato {
  constructor(timer, littlePause, bigPause, task, activeTask, id) {
    super(timer, littlePause, bigPause, task, activeTask);
    // this.id = id
    // this.getStartTask()
    this.setActiveTask();
    this.setTask(timer, littlePause, bigPause, task, activeTask, id);
  }
}

// export class NewTask1 extends Tomato{
//   constructor(timer, littlePause, bigPause, tasks, activeTask, id) {
//     super(timer, littlePause, bigPause, tasks, activeTask)
//     this.id = id
//     // this.getStartTask()
//   }
// }
