<template>
  <h1>{{message}}</h1>
</template>

<script>
import {ref} from 'vue'

export default{
  setup(){
    const message = ref("Hello Vue!");

    return{
      message,
    }
  }
}
</script>