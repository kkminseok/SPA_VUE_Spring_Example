<template>
    <div>
        <ul>
            <li v-for="(todo,index) in todos" v-bind:key="index">
                <!-- 4.11 delete
                {{todo}} 
                -->
                <span v-if="!isEditing(index)" v-on:dblclick="handleDblClick(index)">{{todo.content}}</span>
                <input v-else type="text" ref="editInput"
                    v-bind:value="todo.content"
                    v-on:blur="handleBlur()"
                    v-on:keydown.enter="updateTodo(todo.id,$event)"/>
            <button v-on:click="removeTodo(index)">delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {ref, nextTick} from 'vue'

export default {
    name: 'TodoList',
    props: ['todos','editingId'],
    emits: ['remove-todo','update-todo'],
    setup(props,context){
        //const todos = ref(['todo1','todo2','todo3'])

        const todos = props.todos

        const editInput = ref(null)

        const removeTodo = (index) =>{
            //console.log('removeTodo')
            //index에서 1개의 요소 제거
            //todos.value.splice(index,1)
            context.emit('remove-todo',index)
        }
        //더블클릭 처리 메소드
        const handleDblClick = (index) =>{
            
            //4.12
            //todos[index].isEditing = true
            const {id} = todos[index]

            context.emit('set-editing-id',id)

            //입력 요소에 포커스 처리
            nextTick(()=>{
                editInput.value.focus()
            })
        }

        //4.12 edit new
        /*
        const handleBlur = (index) =>{
            todos[index].isEditing = false;
        }
        */
       const handleBlur = ()=>{
           context.emit('reset-editing-id')
       }

        const updateTodo = (id,e) =>{
            const content = e.target.value.trim()
            if(content.length <= 0){
                return false;
            }

            context.emit('update-todo',content,id)

            editInput.value.blur()
        }

        const isEditing = (index) =>{
            if(todos[index]){
                return todos[index].id ===props.editingId
            }
            return false
        }

        return{
            //todos,
            removeTodo,
            handleDblClick,
            handleBlur,
            updateTodo,
            editInput,
            isEditing,
        }
    }
}
</script>

<style scoped>
    div{
        background-color: #FFFF00;
    }
</style>