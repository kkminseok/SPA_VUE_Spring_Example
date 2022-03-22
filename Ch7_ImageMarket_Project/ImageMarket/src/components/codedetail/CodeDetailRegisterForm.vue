<template>
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>Group Code</td>
                <td>
                    <select v-model="groupCode">
                        <option v-for="codeGroup in codeGroups" :value="codeGroup.groupCode" :key="codeGroup.groupCode">
                            {{codeGroup.groupName}}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Code Value</td>
                <td><input v-model="codeValue" type="text"></td>
            </tr>
            <tr>
                <td>Code Name</td>
                <td><input v-model="codeName" type="text"></td>
            </tr>
        </table>

        <div>
            <button type="submit">Submit</button>
            <router-link :to="{ name: 'CodeDetailListPage' }">List</router-link>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'CodeDetailRegisterForm',
    props: {
        codeGroups: {
            type: Array
        }
    },
    emits: ['add-post'],
    setup(props,context){
        const groupCode = ref('A01')
        const codeValue = ref('')
        const codeName = ref('')

        const fireAddPost =() =>{
            context.emit('add-post',{
                groupCode: groupCode.value,
                codeValue: codeValue.value,
                codeName: codeName.value
            })
        }
        
        return {
            groupCode,
            codeValue,
            codeName,
            fireAddPost,
        }
    }
}
</script>