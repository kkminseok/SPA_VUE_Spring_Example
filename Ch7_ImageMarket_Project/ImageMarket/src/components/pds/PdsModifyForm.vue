<template>
    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>pds Num</td>
                <td><input type="text" :value="pdsItem.itemId" disabled></td>
            </tr>
            <tr>
                <td>pds Name</td>
                <td><input type="text" v-model="pdsItem.itemName"></td>
            </tr>
            <tr>
                <td>file</td>
                <td>
                    <input type="file" @change="handleFileChange($event)"/>
                    <div>
                        <div v-for="(attachment,index) in attachments" :key="index">{{getOriginalName(attachment)}}<span @click="removeAttach(index)">X</span></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>description</td>
                <td><textarea v-model="pdsItem.description" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">edit</button>
            <router-link :to="{ name: 'PdsReadPage', params: { itemId: pdsItem.itemId.toString()}}">Cancle</router-link>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default { 
    name: 'PdsModifyForm',
    props: {
        pdsItem: {
            type: Object,
            required: true
        },
        attachments: {
            type: Array
        }
    },
    emits: ['modify-post','add-attach','remove-attach'],
    setup(props, context){
        const file = ref('')

        const fireModifyPost = () => {

            context.emit('modify-post',{
                itemName: props.pdsItem.itemName,
                description: props.pdsItem.description,
                file: file.value
            })
        }

        const handleFileChange = (evt) => {
            file.value = evt.target.files[0]

            context.emit('add-attach',{ file:file.value})
        }
        const getOriginalName = (fileName) => {
            const idx = fileName.indexOf("_") + 11

            return fileName.substr(idx)
        }

        const removeAttach = (index) => {
            context.emit('remove-attach',index)
        }

        return {
            file,
            fireModifyPost,
            handleFileChange,
            getOriginalName,
            removeAttach,
        }
    }
}
</script>