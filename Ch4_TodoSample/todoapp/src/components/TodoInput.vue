<template>
    <div>
        <!--
        <h1>TodoInput</h1>
        -->
        <input type="text" v-model="newTodo" v-on:keypress.enter="addTodo">
        <button v-on:click="addTodo">append</button>
    </div>
</template>

<script>
import {ref} from 'vue'

export default{
    name: 'TodoInput',
    emits:['add-todo'],
    setup(props,context){
        const newTodo = ref('')

        const addTodo = () =>{
            if(newTodo.value !== ""){
                const inputValue = newTodo.value && newTodo.value.trim()
                //console.log('addtodo inputValue' + inputValue)
                context.emit('add-todo',inputValue)
                clearInput()
            }
        }
        
        const clearInput = () =>{
            newTodo.value = ''
        }

        return{
            newTodo,
            addTodo,
            clearInput,
        }
    }
}
</script>

<style scoped>
div{
    background-color: #FF00FF;
}
</style>
