<template>
    <div>
        <table>
            <tr>
                <td>GroupCode</td>
                <td>
                    <select :value="codeDetail.groupCode" disabled>
                        <option v-for="codeGroup in codeGroups" :value="codeGroup.groupCode" :key="codeGroup.groupCode">
                            {{codeGroup.groupName}}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Code Value</td>
                <td><input type="text" :value="codeDetail.codeValue" readonly></td>
            </tr>
            <tr>
                <td>Code Name</td>
                <td><input type="text" :value="codeDetail.codeName" readonly></td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'CodeDetailRead',
    props: {
        codeGroups: {
            type: Array
        },
        codeDetail: {
            type: Object,
            required: true
        }
    }
}
</script>