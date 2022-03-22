<template>
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>Title</td>
                <td><input type="text" v-model="title"></td>
            </tr>
            <tr>
                <td>Writer</td>
                <td><input type="text" :value="myinfo.userId" disabled></td>
            </tr>
            <tr>
                <td>Content</td>
                <td><textarea v-model="content" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit" v-if="isAuthorized">Submit</button>
            <router-link :to="{ name: 'BoardListPage' }">List</router-link>
        </div>
    </form>
</template>
<script>
import { ref, inject } from 'vue'

export default {
    name: 'BoardRegisterForm',
    emits: ['add-post'],
    setup(props, context) {
        const isAuthorized = inject("isAuthorized")
        const myinfo = inject('myinfo')

        const title = ref('')
        const content = ref('')

        const fireAddPost = () => {
            context.emit('add-post', {title: title.value, content: content.value})
        }

        return {
            isAuthorized,
            myinfo,
            title,
            content,
            fireAddPost,
        }
    }
}
</script>