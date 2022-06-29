export class Tomato {
  constructor(obj) {
    (this.taskId = obj.id),
      (this.taskTitle = obj.taskTitle),
      (this.timer = 5),
      (this.shortPause = 2),
      (this.longPause = 4),
      (this.tasks = []),
      (this.activeTask = null);
  }

  setTask(obj) {
    obj = {
      taskId: this.taskId,
      taskTitle: this.taskTitle,
    };
    console.log('obj: ', obj);

    this.tasks.push(obj);
    console.log('this.tasks: ', this.tasks);
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

export class NewTask extends Tomato {
  #taskId;
  #taskTitle;
  #count;
  constructor(taskId, taskTitle, count) {
    super(taskId, taskTitle, count = 0);
    this.#taskId = taskId;
    this.#taskTitle = taskTitle;
    this.#count = count;
    this.setTask();
    this.setIncrementCount()
    this.getIncrementCount()
  }
  
  getIncrementCount() {
    return console.log(this.#count);
  }

  setIncrementCount(count = this.#count) {
    count++;
    this.#count = Number(count);
  }

  get getTitleVal() {
    return console.log(this.#taskTitle);
  }

  set setTitleVal(title) {
    this.#taskTitle = String(title);
  }

  get getId() {
    return console.log(this.#taskId);
  }

  set setIdVal(id) {
    this.#taskId = String(id);
  }
}

