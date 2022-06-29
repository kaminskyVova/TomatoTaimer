import { Tomato, NewTask, NewTask1 } from './Tomato';


const testArr = [
  {
    taskTitle: 'hhh',
  },
  {
    taskTitle: 'lllll',
  }
]

testArr.forEach((task, index) => new NewTask({
  id: index += 1,
  taskTitle: task.taskTitle
}))

