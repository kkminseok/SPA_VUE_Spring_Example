<template>
    <div>
        <ul>
            <!-- 4.13 delte
            <li v-for="(todo,index) in todos" v-bind:key="index">
                ##4.11 delete
                {{todo}} 
                
                
                <span v-if="!isEditing(index)" v-on:dblclick="handleDblClick(index)">{{todo.content}}</span>
                <input v-else type="text" ref="editInput"
                    v-bind:value="todo.content"
                    v-on:blur="handleBlur()"
                    v-on:keydown.enter="updateTodo(todo.id,$event)"/>
            <button v-on:click="removeTodo(index)">delete</button>
            </li>
            -->
            <TodoItem v-for="todo in todos"
                v-bind:key="todo.id"
                v-bind:editingId="editingId"
                v-bind:todo="todo"
                v-on:remove-todo="fireRemoveTodo"
                v-on:update-todo="fireUpdateTodo"
                v-on:set-editing-id="fireSetEditingId"
                v-on:reset-editing-id="fireResetEditingId"
                v-on:toggle-todo-status="fireToggleTodoStatus"
                />
        </ul>
    </div>
</template>

<script>
/* 4.13 delete
import {ref, nextTick} from 'vue'
*/
import TodoItem from './TodoItem.vue'

import { inject } from 'vue'

export default {
    name: 'TodoList',
    components:{
        TodoItem,
    },
    //4.18 delete
    //props: ['todos','editingId'],
    emits: ['remove-todo','update-todo','set-editing-id','reset-editing-id','toggle-todo-status'],
    setup(props,context){
        const todos = inject("filteredTodos")
        const editingId = inject("editingId")

        //const todos = ref(['todo1','todo2','todo3'])

        /* 4.13 update
        const removeTodo = (index) =>{
            //console.log('removeTodo')
            //index에서 1개의 요소 제거
            //todos.value.splice(index,1)
            context.emit('remove-todo',index)
        }
        */
       const fireRemoveTodo = (id) => {
           context.emit('remove-todo',id)
       }
        //더블클릭 처리 메소드
        /* 4.13 delete
        const handleDblClick = (index) =>{
            
            //4.12
            //todos[index].isEditing = true
            const {id} = todos[index]

            context.emit('set-editing-id',id)

            //입력 요소에 포커스 처리
            nextTick(()=>{
                console.log("edit value : ",editInput.value)
                editInput.value.focus()
            })
        }
        */
       const fireSetEditingId = (id) =>{
           context.emit('set-editing-id',id)
       }

        //4.12 edit new
        /*
        const handleBlur = (index) =>{
            todos[index].isEditing = false;
        }
        */

       /* 4.13 update blur
       const handleBlur = ()=>{
           
           context.emit('reset-editing-id')
       }
       */
      const fireResetEditingId = () =>{
          context.emit('reset-editing-id')
      }

        /* 4.13 update
        const updateTodo = (id,e) =>{
            const content = e.target.value.trim()
            if(content.length <= 0){
                return false;
            }

            context.emit('update-todo',content,id)
            console.log(editInput)
            editInput.value.blur()
        }
        */
    const fireUpdateTodo = (content,id) => {
        context.emit('update-todo', content,id)
    }

    const fireToggleTodoStatus = (id) => {
        context.emit('toggle-todo-status',id)
    }
    const isEditing = (index) =>{
        if(todos[index]){
            return todos[index].id ===props.editingId
        }
        return false
    }

    return{
        //4.13 update
        //todos,
        /*
        removeTodo,
        handleDblClick,
        handleBlur,
        updateTodo,
        editInput,
        isEditing,
        */
        todos,
        editingId,
        fireRemoveTodo,
        fireUpdateTodo,
        fireSetEditingId,
        fireResetEditingId,
        fireToggleTodoStatus,
    }
    }
}
</script>

<style scoped>
    div{
        background-color: #FFFF00;
    }
</style>