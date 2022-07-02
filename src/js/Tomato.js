export class Tomato {
  constructor(obj = {}) {
    if (Tomato._instance) {
      return Tomato._instance;
    }
    this.taskId = obj.id,
      this.taskTitle = obj.taskTitle,
      this.timer = 5,
      this.shortPause = 2,
      this.longPause = 4,
      this.tasks = [],
      this.activeTask = null;
    this.count = 0;

    Tomato._instance = this;
  }

  execute() {
    throw new Error('Not implement');
  }

  setTask(obj) {
    this.tasks.push(obj);
    console.log(' this.tasks: ', this.tasks);
    return this.tasks;
  }

  setActiveTask(task) {
    console.log('task: ', task);

    this.activeTask = task;
    console.log('this.activeTask: ', this.activeTask);
    this.getStartTask();
  }

  getStartTask() {
    console.log('this.timer: ', this.timer);
    let countMinute = this.timer;
    let countSeconds = 5;
    // if (this.activeTask != null) {
    //   const timer = setInterval(() => {
    //     console.log(`${countMinute} : ${countSeconds}`);
    //     countSeconds--;
    //     if (countSeconds <= -1) {
    //       countMinute--;
    //       countSeconds = 5;
    //     }
    //     if (countMinute <= -1) {
    //       clearInterval(timer);
    //     }
    //   }, 1000);
    // }
  }
}

// };

export class Task extends Tomato {

  constructor(taskId, taskTitle, count) {
    super(taskId, taskTitle, count);

    this.setTask(taskId, taskTitle, (count = 0));
  }

  getIncrementCount() {
    return console.log(this.count);
  }

  setIncrementCount(count = this.count) {
    count++;
    this.count = Number(count);
  }

  get getTitleVal() {
    this.tasks.forEach((task) => {
      return console.log(`${task.taskTitle}: ${task.importance}`);
    });
  }

  set setTitleVal(title) {
    this.taskTitle = String(title);
  }

  get getId() {
    return console.log(this.taskId);
  }

  set setIdVal(id) {
    this.taskId = String(id);
  }
}

export class NewTask extends Task {
  execute() {
    if (this.taskTitle === null) {
      console.log('Добавьте название задачи!!!');
      this.setIncrementCount();
      this.getIncrementCount();
      return;
    }
  }
  constructor(taskId, taskTitle, count, importance) {
    super(taskId, taskTitle, count);
    this.importance = importance;
    this.getTitleVal;
    // this.setIncrementCount();
    // this.getIncrementCount();
  }
}

export class AddNewTask extends NewTask {
  execute() {
    if (this.taskTitle === null) {
      console.warn('Добавьте название задачи!!!');
      return;
    }
    new NewTask(obj);
  }
  // constructor(taskId, taskTitle, count, importance){
  //   super(taskId, taskTitle, count)
  //   console.log('taskTitle: ', taskTitle);
  // }
}
