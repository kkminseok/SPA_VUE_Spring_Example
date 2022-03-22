import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import AdminSetupPage from '/@pages/member/AdminSetupPage.vue'
import MemberListPage from '/@pages/member/MemberListPage.vue'
import MemberRegisterPage from '/@pages/member/MemberRegisterPage.vue'
import MemberModifyPage from '/@pages/member/MemberModifyPage.vue'
import MemberReadPage from '/@pages/member/MemberReadPage.vue'

export const MemberRouters= [
    {
        path: '/user/setup',
        name: 'AdminSetupPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: AdminSetupPage,
            footer: Footer,
        }
    },
    {
        path: '/user',
        name: 'MemberListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: MemberListPage,
            footer: Footer
        }
    },
    {
        path: '/user/register',
        name: 'MemberRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: MemberRegisterPage,
            footer: Footer
        }
    },
    {
        path: '/user/:userNo',
        name: 'MemberReadPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: MemberReadPage,
            footer:Footer
        },
        props: {
            default: true
        }
    },
    {
        path: '/user/:userNo/modify',
        name: 'MemberModifyPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: MemberModifyPage,
            footer: Footer
        },
        props: {
            default: true
        }
    }
]