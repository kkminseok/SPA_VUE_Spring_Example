<template>
  <todo-header></todo-header>
  <todo-input v-on:add-todo="addTodo"></todo-input>
  <todo-list v-bind:todos="todos"
  v-bind:editingId="editingId" 
  v-on:remove-todo="removeTodo"
  v-on:update-todo="editTodo"
  v-on:set-editing-id="setEditingId"
  v-on:reset-editing-id="resetEditingId"></todo-list>
  <todo-footer v-on:remove-all="clearAll"></todo-footer>
</template>

<script>
//4.10에서 ref -> vuex대체
//import {ref} from 'vue'
import { computed } from 'vue'
import {useStore} from 'vuex'


import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default{
  name:'App',
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  setup(){

    const store = useStore()
    //4.10 폐기
    //const todos = ref([])
    const todos = computed(() => store.state.todos)
    const editingId = computed(() => store.state.editingId)

    const clearAll = () =>{
      //4.10
      //todos.value.length=0
      store.dispatch('clearAll')
      store.dispatch('save')
    }
    const addTodo = (content) =>{
      //4.10
      //todos.value.push(todo)
      //4.12 
      //const isEditing = false
      //const todo = {isEditing, content}
      const id = new Date().getTime()
      const todo = {id,content}

      store.dispatch('addTodo',todo)
      store.dispatch('save')
    }
    const removeTodo = (index) =>{
      //4.10
      //todos.value.splice(index,1)
      store.dispatch('removeTodo',index)
      store.dispatch('save')
    }

    const editTodo = (content, id) =>{
      store.dispatch('editTodo',{content,id})
      store.dispatch('save')
    }

    const setEditingId = (id) =>{
      store.dispatch('setEditingId',id)
    }

    const resetEditingId = () => {
      store.dispatch('resetEditingId')
    }

    store.dispatch('restore')
    return{
      todos,
      editingId,
      clearAll,
      addTodo,
      removeTodo,
      editTodo,
      
      //4.12 edit
      setEditingId,
      resetEditingId,
    }
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #0000FF;
  }
</style>