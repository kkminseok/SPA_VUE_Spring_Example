<template>
  <h1>{{message}}</h1>
  
</template>

<script>
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated} from 'vue';

export default { 
  setup(){
    const message = "3_6message";

    onBeforeMount(() =>{
      console.log("before Mount")
    })

    onMounted(() =>{
      console.log("on Mounted!")
    })

    onBeforeUpdate(() =>{
      console.log("on before update")
    })

    onUpdated(()=>{
      console.log("on update")
    })

    return { 
      message
    }
  }
}

</script>