import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import CodeGroupListPage from '/@pages/codegroup/CodeGroupListPage.vue'
import CodeGroupRegisterPage from '/@pages/codegroup/CodeGroupRegisterPage.vue'
import CodeGroupReadPage from '/@pages/codegroup/CodeGroupReadPage.vue'
import CodeGroupModifyPage from '/@pages/codegroup/CodeGroupModifyPage.vue'

export const CodeGroupRouters= [
    {
        path: '/codegroup',
        name: 'CodeGroupListPage',
        components: {
            headers: MainHeader,
            menu: MenuBar,
            default: CodeGroupListPage,
            footer: Footer
        }
    },
    {
        path: '/codegroup/register',
        name: 'CodeGroupRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CodeGroupRegisterPage,
            footer: Footer
        }
    },
    {
        path: '/codegroup/:groupCode',
        name: 'CodeGroupReadPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CodeGroupReadPage,
            footer: Footer,
        },
        props: {
            default: true
        }
    },
    {
        path: '/codegroup/:groupCode/modify',
        name: 'CodeGroupModifyPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CodeGroupModifyPage,
            footer: Footer
        },
        props: {
            default: true
        }
    }
]