class Todo{
    constructor(){
        this.todos = []
    }
    add(todo){
        this.todos.push(todo)
    }
    remove(indexOfRemove){
        if(indexOfRemove >= 0 && indexOfRemove < this.todos.length){
            this.todos.splice(indexOfRemove, 1)
        }else{
            throw new Error('Array index out of bound')
        } 
    }
    update(index, updatedTodo){
        if(index >= 0 && index < this.todos.length){
            this.todos[index] = updatedTodo
        }else{
            throw new Error("Array index out of bound")
        }
    }
    updateAtSpecificPlace(index, updatedTodo){
        if(index >= 0 && index < this.todos.length){
            this.todos.splice(index, 0, updatedTodo)
        }else{
            throw new Error("Array index out of bound")
        }
    }
    getAll(){
        return this.todos
    }
    get(indexOfTodo){
        return this.todos[indexOfTodo]
    }
    clear(){
        this.todos = []
    }
}

let todoList = new Todo();
todoList.add("I wanted to wake up early")
todoList.add("I wanted code 4hrs")
todoList.add("I wanted study")
todoList.add("I wanted go college")
todoList.remove(3)
todoList.update(2, 'Im lazy')
console.log(todoList.getAll())

