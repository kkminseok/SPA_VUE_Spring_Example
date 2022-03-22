<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="80">Notice Num</th>
                <th align="center" width="320">Notice Title</th>
                <th align="center" width="180" >Notice regDate</th>
            </tr>

            <tr v-if="!notices || (Array.isArray(notices) && notices.length === 0)">
                <td colspan="3">
                    List is Empty
                </td>
            </tr>

            <tr v-else v-for="notice in notices" :key="notice.noticeNo">
                <td align="center">{{notice.noticeNo}}</td>
                <td align="left"><router-link :to="{ name: 'NoticeReadPage', params: { noticeNo: notice.noticeNo.toString() } }">{{ notice.title }}</router-link></td>
                <td align="center">{{ notice.regDate }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default { 
    name: 'NoticeList',
    props: {
        notices: {
            type: Array
        }
    }
}
</script>