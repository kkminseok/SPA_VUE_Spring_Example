<template>
    <div>
        <table>
            <tr>
                <td>Notice Num</td>
                <td><input type="text" :value="notice.noticeNo" readonly></td>
            </tr>
            <tr>
                <td>Notice Title</td>
                <td><input type="text" :value="notice.title" readonly></td>
            </tr>
            <tr>
                <td>Notice Content</td>
                <td><textarea :value="notice.content" readonly></textarea></td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'NoticeRead',
    props: {
        notice: {
            type: Object,
            required: true
        }
    }
}
</script>