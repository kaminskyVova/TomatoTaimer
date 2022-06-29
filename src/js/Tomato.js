export class Tomato {
  constructor(timer = 3, shortPause = 2, longPause = 4, tasks = [], taskId) {
    (this.taskId = taskId),
      (this.timer = timer),
      (this.shortPause = shortPause),
      (this.longPause = longPause),
      (this.tasks = tasks),
      (this.activeTask = null);
  }

  setTask(obj) {
    // obj = {
    //   id: this.id,
    //   // timer: this.timer,
    //   taskTitle: this.task,
    // };
    this.tasks.push(obj);
    console.log('this.tasks: ', this.tasks);
  }

  setActiveTask(task) {
    // task = {
    //   id: this.id,
    //   // timer: this.timer,
    //   task: this.taskTitle,
    // };
    // if (task.id === this.id) {
    //   this.activeTask = task;
    // }
    this.activeTask = task;
    console.log('this.activeTask: ', this.activeTask);
    // this.getStartTask();
  }

  getStartTask() {
    // console.log(this.timer);
    let countMinute = this.timer;
    let countSeconds = 5;
    if (this.activeTask != null) {
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
