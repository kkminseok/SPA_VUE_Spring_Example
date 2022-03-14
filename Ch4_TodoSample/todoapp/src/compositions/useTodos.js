import {reactive, computed} from 'vue'

export const useTodos = () =>{
    const state = reactive({
        todos: [],
        editingId: 0,
        filter: null,
        nextTodoId: 1,
    })

    const todos = computed(()=> state.todos)
    const editingId = computed(() => state.editingId)
    const filter = computed(() => state.filter)

    const filteredTodos = computed(() =>{
        if(!state.filter){
            return state.todos
        }

        if(state.filter === 'A'){
            return state.todos.filter(todo => {
                return todo.done === false
            })
        }

        if(state.filter === 'B'){
            return state.todos.filter(todo => {
                return todo.done === true
            })
        }
    })

    const addTodo = ({content}) =>{
        state.todos.push({id : state.nextTodoId, content, done : false})
        state.nextTodoId++
    }

    const removeTodo = (id) => {
        const targetIndex = state.todos.findIndex(v => v.id ===id)

        state.todos.splice(targetIndex,1)
    }

    const clearAll = () =>{
        state.todos.length = 0
    }

    const editTodo = ({id,content}) =>{
        const targetIndex = state.todos.findIndex(v => v.id === id)
        const targetTodo = state.todos[targetIndex]
        state.todos.splice(targetIndex,1,{...targetTodo,content})
    }

    const setEditingId = (id) =>{
        state.editingId = id
    }

    const resetEditingId = () =>{
        state.editingId = 0
    }

    const save = () =>{
        const data = {
            todos : state.todos,
            nextTodoId : state.nextTodoId
        }
        localStorage.setItem('todo-app-data',JSON.stringify(data))
    }

    const restore = () =>{
        const data = localStorage.getItem('todo-app-data')
        if(data) {
            const {todos, nextTodoId} = JSON.parse(data)

            state.todos = todos
            state.nextTodoId = nextTodoId
        }
    } 

    const toggleTodoStatus = (id) =>{
        const filtered = state.todos.filter(todo =>{
            return todo.id === id
        })

        filtered.forEach(todo => {
            todo.done = !todo.done
        })
    }

    const setFilter = (filter) =>{
        state.filter = filter
    }

    return {
        todos,
        editingId,
        filter,
        filteredTodos,
        addTodo,
        removeTodo,
        clearAll,
        editTodo,
        setEditingId,
        resetEditingId,
        save,
        restore,
        toggleTodoStatus,
        setFilter

    }

}