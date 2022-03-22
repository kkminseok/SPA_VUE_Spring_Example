<template>
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>GroupCode</td>
                <td><input v-model="groupCode" type="text"/></td>
            </tr>
            <tr>
                <td>GroupCode Name</td>
                <td><input v-model="groupName" type="text"/></td>
            </tr>
        </table>
        <div>
            <button type="submit">Submit</button>
            <router-link :to="{ name: 'CodeGroupListPage'}">List</router-link>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'CodeGroupRegisterForm',
    emits: ['add-post'],
    setup(props, context){
        const groupCode = ref('')
        const groupName = ref('')

        const fireAddPost = () =>{
            context.emit('add-post',{
                groupCode: groupCode.value,
                groupName: groupName.value
            })
        }

        return { 
            groupCode,
            groupName,
            fireAddPost,
        }
    }
}
</script>