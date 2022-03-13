import {createStore} from 'vuex'

export const store = createStore({
    state: () => ({
        todos: [],
        //편집상태관리
        editingId: 0,
    }),
    mutations: {
        ADD_TODO (state,todo){
            state.todos.push(todo)
        },
        REMOVE_TODO (state,index){
            state.todos.splice(index,1)
        },
        CLEAR_ALL(state){
            state.todos.length = 0
        },
        RESTORE(state,{todos}){
            state.todos = todos
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
        }
    },
    actions: {
        addTodo(context,todo){
            context.commit("ADD_TODO",todo)
        },
        removeTodo(context,index){
            context.commit("REMOVE_TODO",index)
        },
        clearAll(context){
            context.commit("CLEAR_ALL")
        },
        save({state}){
            const data = {
                todos : state.todos
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
        }

    }
})