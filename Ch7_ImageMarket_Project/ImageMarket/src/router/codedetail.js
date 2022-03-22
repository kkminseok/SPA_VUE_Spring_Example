import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import CodeDetailListPage from '/@pages/codedetail/CodeDetailListPage.vue'
import CodeDetailRegisterPage from '/@pages/codedetail/CodeDetailRegisterPage.vue'
import CodeDetailModifyPage from '/@pages/codedetail/CodeDetailModifyPage.vue'
import CodeDetailReadPage from '/@pages/codedetail/CodeDetailReadPage.vue'

export const CodeDetailRouters = [
    {
        path: '/codedetail',
        name: 'CodeDetailListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailListPage,
            footer: Footer
        }
    },
    
    {
        path: '/codedetail/register',
        name: 'CodeDetailRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailRegisterPage,
            footer: Footer
        }
    },
    {
        path: '/codedetail/:groupCode/:codeValue',
        name: 'CodeDetailReadPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailReadPage,
            footer: Footer
        },
        props: {
            default: true
        }
    },
    {
        path: '/codedetail/:groupCode/:codeValue/modify',
        name: 'CodeDetailModifyPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: CodeDetailModifyPage,
            footer: Footer
        },
        props: {
            default: true
        }

    }
    
]