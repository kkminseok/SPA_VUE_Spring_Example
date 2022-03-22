<template>

    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>Notice Num</td>
                <td><input type="text" :value="notice.noticeNo" disabled></td>
            </tr>
            <tr>
                <td>Notice Title</td>
                <td><input type="text" v-model="notice.title"></td>
            </tr>
            <tr>
                <td>Notice Content</td>
                <td><textarea v-model="notice.content" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">Edit</button>
            <router-link :to="{ name: 'NoticeReadPage', params: { noticeNo: notice.noticeNo.toString()}}">Cancle</router-link> 
        </div>
    </form>
</template>
<script>
export default {
    name: 'NoticeModifyForm',
    props: {
        notice: {
            type: Object,
            required: true
        }
    },
    emits: ['modify-post'],
    setup(props,context) {
        const fireModifyPost = () => {
            context.emit('modify-post',{
                title: props.notice.title,
                content: props.notice.content,
            })
        }

        return {
            fireModifyPost,
        }
    }
}
</script>