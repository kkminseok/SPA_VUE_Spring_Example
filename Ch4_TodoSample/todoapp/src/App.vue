<template>
  <TodoHeader></TodoHeader>
  <TodoInput v-on:add-todo="handleAddTodo"></TodoInput>
  <TodoFilter
    v-bind:filter="filter"
    v-on:set-filter="handleSetFilter"
  ></TodoFilter>
  <TodoList 
  v-on:remove-todo="handleRemoveTodo"
  v-on:update-todo="handleEditTodo"
  v-on:set-editing-id="handleSetEditingId"
  v-on:reset-editing-id="handleResetEditingId"
  v-on:toggle-todo-status="handleToggleTodoStatus"
  ></TodoList>
  <TodoFooter v-on:remove-all="handleClearAll"></TodoFooter>
</template>

<script>
//4.10에서 ref -> vuex대체
//import {ref} from 'vue'
import { computed } from 'vue'
//4.17 delete
//import {useStore} from 'vuex'
import {useTodos} from './compositions/useTodos'

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoFilter from './components/TodoFilter.vue'

//4.18
import {readonly, provide} from 'vue'

export default{
  name:'App',
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    TodoFilter,
  },
  setup(){


    //4.17 delete
    //const store = useStore()
    const {
      todos,
      filteredTodos,
      editingId,
      filter,
      clearAll,
      addTodo,
      removeTodo,
      editTodo,
      setEditingId,
      resetEditingId,
      toggleTodoStatus,
      save,
      restore,
      setFilter,
    } = useTodos()

    provide("filteredTodos",readonly(filteredTodos))
    provide("editingId",editingId)
    provide("filter",filter)

    //4.10 폐기
    //const todos = ref([])
    //4.15 delete
    //const todos = computed(() => store.state.todos)
    //4.17 delete
    //const todos = computed(() => store.getters['filteredTodos']())
    //const editingId = computed(() => store.state.editingId)

    const handleClearAll = () =>{
      //4.10
      //todos.value.length=0
      //4.17 delete
      //store.dispatch('clearAll')
      //store.dispatch('save')

      clearAll()
      save()
    }
    const handleAddTodo = (content) =>{
      //4.10
      //todos.value.push(todo)
      //4.12 
      //const isEditing = false
      //const todo = {isEditing, content}
      //4.16 삭제
      //const id = new Date().getTime()
      //const done = false
      //const todo = {id,content, done}

      //4.14
      //const todo = {id,content}
      
      const todo = {content}
      //4.17 delete
      //store.dispatch('addTodo',todo)
      //store.dispatch('save')
      addTodo(todo)
      save()
    }
    const handleRemoveTodo = (id) =>{
      //4.10
      //todos.value.splice(index,1)
      //4.17
      //store.dispatch('removeTodo',id)
      //store.dispatch('save')
      removeTodo(id)
      save()
    }

    const handleEditTodo = (content, id) =>{
      //4.17 delete
      //store.dispatch('editTodo',{content,id})
      //store.dispatch('save')
      editTodo({id, content})
      save()
    }

    const handleSetEditingId = (id) =>{
      //4.17 delete
      //store.dispatch('setEditingId',id)
      setEditingId(id)
    }

    const handleResetEditingId = () => {
      //4.17 delete
      //store.dispatch('resetEditingId')
      resetEditingId()
    }

    const handleToggleTodoStatus = (id) => {
      //4.17 delete
      //store.dispatch('toggleTodoStatus',id)
      //store.dispatch('save')
      toggleTodoStatus(id)
      save()
    }
    const handleSetFilter = (filter) =>{
      setFilter(filter)
    }
    //4.17 delelte
    //store.dispatch('restore')
    restore()
    return{
      todos,
      editingId,
      filteredTodos,
      filter,
      //4.17 delete
      /*
      clearAll,
      addTodo,
      removeTodo,
      editTodo,
      
      //4.12 edit
      setEditingId,
      resetEditingId,
      //4.15
      toggleTodoStatus
      */
     handleClearAll,
     handleAddTodo,
     handleRemoveTodo,
     handleEditTodo,
     handleSetEditingId,
     handleResetEditingId,
     handleToggleTodoStatus,
     handleSetFilter

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