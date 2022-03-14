import {createStore} from 'vuex'

export const store = createStore({
    state: () => ({
        todos: [],
        //편집상태관리
        editingId: 0,
        //filter
        filter:null,
        //4.16 nextId,
        nextTodoId: 1,
    }),
    getters:{
        filteredTodos: (state) => () =>{
                if(!state.filter){
                    return state.todos
                }

                if(state.filter ==='A'){
                    return state.todos.filter(todo => {
                        return todo.done === false
                    })
                }

                if(state.filter ==='B'){
                    return state.todos.filter(todo => {
                        return todo.done === true
                    })
                }
            }
    },
    mutations: {
        ADD_TODO (state,todo){
            const {content} = todo
            //4.16 delete
            //state.todos.push(todo)

            state.todos.push({id : state.nextTodoId,content, done: false})

            state.nextTodoId++
        },
        /* 4.13 update
        REMOVE_TODO (state,index){
            state.todos.splice(index,1)
        },
        */
       REMOVE_TODO(state,id){
           const targetIndex = state.todos.findIndex(v => v.id ===id)
           state.todos.splice(targetIndex,1)
       },
        CLEAR_ALL(state){
            state.todos.length = 0
        },
        RESTORE(state,{todos, nextTodoId}){
            state.todos = todos
            state.nextTodoId = nextTodoId
        },
        /*
        EDIT_TODO(state,payload){
            const {content,index} = payload
            const isEditing = false
            state.todos.splice(index,1,{isEditing, content})
        },
        */
        EDIT_TODO(state,payload){
            const {content,id} = payload
            const targetIndex = state.todos.findIndex(v =>v.id ===id)
            const targettodo = state.todos[targetIndex]
            state.todos.splice(targetIndex,1,{...targettodo,content})
        },
        SET_EDITING_ID (state,id){
            state.editingId = id;
        },
        RESET_EDITING_ID(state){
            state.editingId = 0;
        },
        TOGGLE_TODO_STATUS(state,id){
            const filtered = state.todos.filter(todo =>{
                return todo.id === id
            })

            filtered.forEach(todo => {
                todo.done = !todo.done
            })
        },
        SET_FILTER(state,filter){
            state.filter=filter
        }
    },
    actions: {
        addTodo(context,todo){
            context.commit("ADD_TODO",todo)
        },
        /* 4.13 update
        removeTodo(context,index){
            context.commit("REMOVE_TODO",index)
        },
        */
       removeTodo(context,id){
           context.commit("REMOVE_TODO",id)
       },
        clearAll(context){
            context.commit("CLEAR_ALL")
        },
        save({state}){
            const data = {
                todos : state.todos,
                nextTodoId: state.nextTodoId
            }
            localStorage.setItem('todo-app-data',JSON.stringify(data))
        },
        restore({commit}){
            const data = localStorage.getItem('todo-app-data')
            if(data){
                commit("RESTORE",JSON.parse(data))
            }
        },
        editTodo(context,payload){
            context.commit("EDIT_TODO",payload)
        },
        setEditingId(context,id){
            context.commit("SET_EDITING_ID",id)
        },
        resetEditingId(context){
            context.commit("RESET_EDITING_ID")
        },
        toggleTodoStatus(context,id){
            context.commit("TOGGLE_TODO_STATUS",id)
        },
        setFilter(context,filter){
            context.commit('SET_FILTER',filter)
        }

    }
})