<template>
  <form>
    <table>
      <tr>
        <td>user ID</td>
        <td>{{userId}}</td>
      </tr>
      <tr>
        <td>password</td>
        <td><input type="password" v-bind:value="userPw"/></td>
      </tr>
      <tr>
        <td>introduce</td>
        <td><textarea rows="5" v-bind:value="introduction"></textarea></td>
      </tr>
      <tr>
        <td>developer?</td>
        <td>
          <span v-if="developer">yes developer</span>
        </td>
      </tr>
      <tr>
        <td>foreigner?</td>
        <td>
          <span v-show="foreigner === 'yes'"> yes foreigner</span>
        </td>
      </tr>
      <tr>
        <td>hobby</td>
        <td>
          <ul>
            <li v-for="hobby in hobbyList">{{hobby}}</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>gender</td>
        <td>
          <span v-if="gender ==='male'">Male</span>
          <span v-else>Female</span>
        </td>
      </tr>
      <tr>
        <td>area</td>
        <td>
          <select v-bind:value="nationality">
            <option disabled value="">Please Select one</option>
            <option value="01">Korea</option>
            <option value="02">Germany</option>
            <option value="03">Australia</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>region</td>
        <td>
          <span v-if="nationality ==='01'">Korea</span>
          <span v-else-if="nationality ==='02'">Germany</span>
          <span v-else-if="nationality ==='03'">Australia</span>
          <span v-else>None</span>
        </td>
      </tr>
      <tr>
        <td>region</td>
        <td>
          {{getNationality}}
        </td>
      </tr>
      <tr>
        <td>has car</td>
        <td>
          <select v-model="carList" multiple>
            <option>Volvo</option>
            <option>Tesla</option>
            <option>Opel</option>
          </select>
        </td>
      </tr>
    </table>
  </form>
</template>

<script>
import {ref, computed} from 'vue'

export default{
  setup(){
    const userId = ref("kms")
    const userPw = ref("1234")
    const introduction = ref("hello kms")
    const developer = ref(false)
    const foreigner = ref('no')
    const hobbyList = ref(["Sports","Game","Music"])
    const gender = ref("male")
    const nationality = ref("01")
    const carList = ref(["Tesla","Volvo"])

    const getNationality = computed(() =>{
      if(nationality.value ==="01"){
        return "korea";
      }else if(nationality.value ==="02"){
        return "germany";
      }else if(nationality.value ==="03"){
        return "Australia";
      }else{
        return "None";
      }
    })

    return {
      userId,
      userPw,
      introduction,
      developer,
      foreigner,
      gender,
      hobbyList,
      nationality,
      carList,
      getNationality,
    }
  }
}
</script>