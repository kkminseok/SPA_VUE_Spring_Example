<template>
    <div>
        <table>
            <tr>
                <td>CodeGroupCode</td>
                <td><input type="text" :value="codeGroup.groupCode" readonly="readonly"/></td>
            </tr>
            <tr>
                <td>CodeGroupName</td>
                <td><input type="text" :value="codeGroup.groupName" readonly="readonly"/></td>
            </tr>
        </table>

    </div>
</template>
<script>
export default {
    name: 'CodeGroupRead',
    props: {
        codeGroup: {
            type: Object,
            required: true
        }
    }
}
</script>