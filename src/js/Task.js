class Task {
    #id;
    #title;
    #count;
    constructor(id = '', title = '', count = 0) {
        this.#id = id;
        this.#title = title;
        this.#count = count;
    }

    get getIncrementCount() {
        return console.log(this.#count);
    }

    set setIncrementCount(count) {
        count++
        this.#count = count
    }

    get getTitleVal() {
        return console.log(this.#title)
    }

    set setTitleVal(title) {
        this.#title = title
    }
}

const task = new Task()

// task.setIncrementCount = 0;
// task.getIncrementCount;
