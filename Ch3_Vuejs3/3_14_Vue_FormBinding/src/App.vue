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
        <td>password</td>
        <td>
          <input type="password" v-model="userPw">
        </td>
      </tr>
      <tr>
        <td>introduce</td>
        <td>
          <textarea rows="5" v-model="introduction"></textarea>
        </td>
      </tr>
      <tr>
        <td>developer?</td>
        <td>
          <input type="checkbox" v-model="developer">
        </td>
      </tr>
      <tr>
        <td>foreigner?</td>
        <td>
          <input type="checkbox" v-model="foreigner" true-value="yes" false-value="no">
        </td>
      </tr>
      <tr>
        <td>hobby</td>
        <td>
          <input type="checkbox" id="chkSports" value="Sports" v-model="hobbyList">
          <label for="chkSports">Sports</label>
          <input type="checkbox" id="chkMusic" value="Music" v-model="hobbyList">
          <label for="chkMusic">Music</label>
          <input type="checkbox" id="chkMovie" value="Movie" v-model="hobbyList">
          <label for="chkMovie">Movie</label>
        </td>
      </tr>
      <tr>
        <td>gender</td>
        <td>
          <input type="radio" id="rdoMale" value="male" v-model="gender">
          <label for="rdoMale">Male</label>
          <input type="radio" id="rdoFemale" value="female" v-model="gender">
          <label for="rdoFemale">Female</label>
        </td>
      </tr>
      <tr>
        <td>area</td>
        <td>
          <select v-model="nationality">
            <option disabled value="">Please select one</option>
            <option value="01">Korea</option>
            <option value="02">Germany</option>
            <option value="03">Australia</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>have car</td>
        <td>
          <select v-model="carList" multiple>
            <option>Volvo</option>
            <option>Saab</option>
            <option>Opel</option>
          </select>
        </td>
      </tr>
    </table>

    <p>
      <button type="submit">submit</button>
    </p>
  </form>
</template>

<script>
import {ref} from 'vue'

export default{
  setup(){
    const userId = ref("")
    const userPw = ref("")
    const introduction = ref("")
    const developer = ref(false)
    const foreigner = ref("no")
    const hobbyList = ref([])
    const gender = ref('male')
    const nationality = ref("")
    const carList = ref([])

    const onSubmit = () => {
      console.log('userId : ',userId.value)
      console.log('userPw : ',userPw.value)
      console.log('introduction : ',introduction.value)
      console.log('developer : ',developer.value)
      console.log('foreigner : ',foreigner.value)
      console.log('hobbyList : ',hobbyList.value)
      console.log('gender : ',gender.value)
      console.log('nationality : ',nationality.value)
      console.log('carList : ',carList.value)
    }

   

    return {
      userId,
      userPw,
      introduction,
      developer,
      foreigner,
      hobbyList,
      gender,
      nationality,
      carList,
      onSubmit,

    }
  }
}
</script>