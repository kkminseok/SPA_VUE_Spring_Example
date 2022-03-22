<template>
    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>CodeGroup Code</td>
                <td><input type ="text" :value="codeGroup.groupCode" disabled></td>
            </tr>
            <tr>
                <td>CodeGroup Name</td>
                <td><input type="text" v-model="codeGroup.groupName"></td>
            </tr>
        </table>

        <div>
            <button type="submit">Edit</button>
            <router-link :to="{ name: 'CodeGroupReadPage', params: { groupCode: codeGroup.groupCode} }">Cancle</router-link>
        </div>

    </form>
</template>
<script>
import { ref, inject, onMounted} from 'vue'

export default {
    name: 'CodeGroupModifyForm',
    props: {
        codeGroup: {
            type: Object,
            required: true,
        }
    },
    emits: ['modify-post'],
    setup(props, context){
        const fireModifyPost = () => {
            context.emit('modify-post',{ groupName: props.codeGroup.groupName})
        }

        return {
            fireModifyPost,
        }
    }
}
</script>