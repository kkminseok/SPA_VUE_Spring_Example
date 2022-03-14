<template>
    <div>
        <li>
            <span v-if="!isEditing" v-on:dblclick="handleDblClick">{{todo.content}}</span>
            <input v-else type="text" ref="editInput"
                v-bind:value="todo.content"
                v-on:blur="handleBlur"
                v-on:keydown.enter="updateTodo"/>
            <input type="checkbox" v-bind:checked="todo.done" v-on:change="fireToggleTodoStatus">
            <button v-on:click="removeTodo">delete</button>
        </li>
    </div>
</template>
<script>
import {ref, computed, nextTick} from 'vue'

export default {
    name: 'TodoItem',
    props: ['todo', 'editingId'],
    emits: ['update-todo','remove-todo','set-editing-id','reset-editing-id','toggle-todo-status'],
    setup(props, context){
        const todo = props.todo
        const isEditing = computed(() => props.todo.id === props.editingId)

        const editInput = ref(null)

        const removeTodo = () =>{
            const id = todo.id
            context.emit('remove-todo',id)
        }

        const handleDblClick = () =>{
            const {id} = todo

            context.emit('set-editing-id',id)

            nextTick(() => {
                editInput.value.focus()
            })
        }

        const handleBlur = () =>{
            context.emit('reset-editing-id')
        }

        const updateTodo = (e) =>{
            const id = todo.id
            const content = e.target.value.trim()
            if(content.length <= 0){
                return false
            }

            context.emit('update-todo',content,id)

            editInput.value.blur()
        }

        const fireToggleTodoStatus = () =>{
            const id = todo.id
            context.emit('toggle-todo-status',id)
        }

        return {
            isEditing,
            removeTodo,
            handleDblClick,
            handleBlur,
            updateTodo,
            editInput,
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