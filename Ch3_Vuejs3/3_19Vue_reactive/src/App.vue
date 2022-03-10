<template>
  <form v-on:submit.prevent="onSubmit">
    <table>
      <tr>
        <td>user Id</td>
        <td>
          <input type="text" v-model="member.userId">
        </td>
      </tr>
      <tr>
        <td>user Pw</td>
        <td>
          <input type="password" v-model="member.userPw">
        </td>
      </tr>
      <tr>
        <td>introduction</td>
        <textarea rows="5" v-model="member.introduction"></textarea>
      </tr>
    </table>
     <p>
    <button type="submit">submit</button>
    <button v-on:click="onClick">reset</button>
  </p>
  </form>

  <p>userId: {{member.userId}}</p>
  <p>userPw : {{member.userPw}}</p>
  <p>introduction : {{member.introduction}}</p>

 
</template>

<script>
import {reactive} from 'vue'

export default{
  setup(){
    const userId=''
    const userPw=''
    const introduction=''

    const member = reactive({
      userId,
      userPw,
      introduction,
    })

    const onSubmit = () =>{
      console.log('userId : ',member.userId)
      console.log('userPw : ',member.userPw)
      console.log('introduction : ',member.introduction)
    }

    const onClick = () =>{
      member.userId=''
      member.userPw = ''
      member.introduction= ''
    }

    return {
      member,
      onSubmit,
      onClick,
    }
  }
}
</script>