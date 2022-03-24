<template>
    <div>
        <table>
            <tr>
                <td>pds Num</td>
                <td><input type="text" :value="pdsItem.itemId" readonly></td>
            </tr>
            <tr>
                <td>pds Name</td>
                <td><input type="text" :value="pdsItem.itemName" readonly></td>
            </tr>
            <tr>
                <td>file</td>
                <td>
                    <div>
                        <div v-for="(attachment, index) in attachments" :key="index"><a :href="downloadUrl(attachment)">{{getOriginalName(attachment)}}</a></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>description</td>
                <td><textarea :value="pdsItem.description" readonly></textarea></td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'PdsRead',
    props: {
        pdsItem: {
            type: Object,
            required: true
        },
        attachments: {
            type: Array
        }
    },
    setup() {
        const downloadUrl = (fileName) => {
            return 'http://localhost:8080/pds/download?fullName=' + fileName
        }

        const getOriginalName = (fileName) => {
            const idx  = fileName.indexOf("_" ) + 1
            return fileName.substr(idx)
        }

        return {
            downloadUrl,
            getOriginalName
        }
    }
}
</script>