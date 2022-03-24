<template>
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>pds name</td>
                <td><input type="text" v-model="itemName"></td>
            </tr>
            <tr>
                <td>File</td>
                <input type="file" @change="handleFileChange($event)"/>
                <div>
                    <div v-for="(attachment, index) in attachments" :key="index">{{getOriginalName(attachment)}}<span @click="removeAttach(index)">X</span></div>
                </div>
            </tr>
            <tr>
                <td>description</td>
                <td><textarea v-model="description" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">Add</button>
            <router-link :to="{ name: 'PdsListPage' }">List</router-link>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default { 
    name: 'PdsRegisterForm',
    props: {
        attachments: {
            type: Array
        }
    },
    emits: ['add-post','add-attach','remove-attach'],
    setup(props, context) {
        const itemName = ref('')
        const description = ref('')
        const file = ref('')

        const fireAddPost = () => {
            context.emit('add-post',{
                itemName: itemName.value,
                description: description.value
            })
        }

        const handleFileChange =(evt) => {
            file.value=evt.target.files[0]
            context.emit('add-attach', {file: file.value})
        }

        const getOriginalName = (fileName) => {
            const idx = fileName.indexOf("_") + 1
            return fileName.substr(idx)
        }

        const removeAttach = (index) => {
            context.emit('remove-attach',index)
        }

        return {
            itemName,
            description,
            file,
            fireAddPost,
            handleFileChange,
            getOriginalName,
            removeAttach,
        }
        
    }
    
}
</script>