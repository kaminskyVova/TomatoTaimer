import { NewTask } from './Tomato';

// export class Task {
//   #id;
//   #title;
//   #count;
//   constructor(id, title, count) {
//     this.#id = id;
//     this.#title = title;
//     this.#count = count;
//   }

//   get getIncrementCount() {
//     return console.log(this.#count);
//   }

//   set setIncrementCount(count) {
//     count++;
//     this.#count = Number(count);
//   }

//   get getTitleVal() {
//     return console.log(this.#title);
//   }

//   set setTitleVal(title) {
//     this.#title = String(title);
//   }

//   get getId() {
//     return console.log(this.#id);
//   }

//   set setIdVal(id) {
//     this.#id = String(id);
//   }
// }

new NewTask({
  id: 1,
  taskTitle: 'hhh',
});
