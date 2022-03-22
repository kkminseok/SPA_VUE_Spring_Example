<template>
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>Notice Title</td>
                <td><input type="text" v-model="title"></td>
            </tr>
            <tr>
                <td>Notice Content</td>
                <td><textarea v-model="content" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">submit</button>
            <router-link :to="{ name: 'NoticeListPage'}">Notice List</router-link>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'NoticeRegisterForm',
    emits: ['add-post'],
    setup(props, context){
        const title = ref('')
        const content = ref('')

        const fireAddPost = () => {
            context.emit('add-post',{ title: title.value, content: content.value})
        }

        return {
            title,
            content,
            fireAddPost,
        }
    }
}
</script>