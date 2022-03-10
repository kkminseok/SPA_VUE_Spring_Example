<template>
  <form v-on:submit.prevent="onSubmit">
    <table>
      <tr>
        <td>user Id</td>
        <td>
          <input type="text" v-model="userId">
        </td>
      </tr>
      <tr>
        <td>user Pw</td>
        <td>
          <input type="password" v-model="userPw">
        </td>
      </tr>
      <tr>
        <td>introduction</td>
        <td>
          <textarea rows="5" v-model="introduction"></textarea>
        </td>
      </tr>
    </table>
    <p>
      <button type="submit">submit</button>
      <button v-on:click="onClick">reset</button>
    </p>
  </form>

  <p>userId : {{userId}}</p>
  <p>userPw : {{userPw}}</p>
  <p>introduction : {{introduction}}</p>
</template>

<script>
import {ref} from 'vue'

export default{
  setup(){
    //반응형 변수 생성
    const userId = ref("")
    const userPw = ref("")
    const introduction = ref("")

    const onSubmit = () =>{
      console.log('userId : ',userId.value)
      console.log('userPw : ',userPw.value)
      console.log('introduction: ',introduction.value)
    }

    const onClick = () =>{
      userId.value =''
      userPw.value=''
      introduction.value=''
    }

    return {
      userId,
      userPw,
      introduction,
      onSubmit,
      onClick,
    }
  }
}
</script>