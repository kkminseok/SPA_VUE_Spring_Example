<template>
    <div align="center">
        <h2>Buy item List</h2>
        <user-item-list :userItems="userItems" @download="onDownload"/>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import UserItemList from '/@components/useritem/UserItemList.vue'
import { inject, onMounted } from 'vue'

export default {
    name: 'UserItemListPage',
    components: { UserItemList },
    setup() {
        const userItems = inject("userItems")
        const fetchUserItemList = inject("fetchUserItemList")

        onMounted(() => {
            fetchUserItemList()
        })

        const onDownload = (payload) => {
            const { userItemNo } = payload
            client.get(`/useritems/download/${userItemNo}`,{
                responseType: 'blob'
            }).then(response => {
                const contentDisposition = response.request.getResponseHeader('Content-Disposition')
                const downloadFilename = contentDisposition.substring(22, contentDisposition.length - 1)
                const decodedDownloadFilename = decodeURIComponent(escape(downloadFilename))

                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download',decodedDownloadFilename)
                document.body.appendChild(link)
                link.click()
            })
        }

        return {
            userItems,
            onDownload,
        }
    }

}
</script>