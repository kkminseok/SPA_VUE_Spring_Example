import MainHeader from "/@components/common/MainHeader.vue";
import Footer from "/@components/common/Footer.vue";
import MenuBar from "/@components/common/MenuBar.vue";
import BoardListPage from '/@pages/board/BoardListPage.vue'
import BoardRegisterPage from '/@pages/board/BoardRegisterPage.vue'
import BoardReadPage from '/@pages/board/BoardReadPage.vue'
import BoardModifyPage from '/@pages/board/BoardModifyPage.vue'

export const BoardRouters= [
    {
        path:'/board',
        name:'BoardListPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: BoardListPage,
            fotter: Footer
        }
    },
    {
        path:'/board/register',
        name:'BoardRegisterPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: BoardRegisterPage,
            footer: Footer
        }
    },
    {
        path: '/board/:boardNo',
        name: 'BoardReadPage',
        components: {
            header:MainHeader,
            menu: MenuBar,
            default: BoardReadPage,
            footer: Footer
        },
        props: {
            default: true
        }
    },
    {
        path: '/board/:boardNo/modify',
        name: 'BoardModifyPage',
        components: {
          header: MainHeader,
          menu: MenuBar,
          default: BoardModifyPage,
          footer: Footer
        },
        props: {
          default: true
        },
      }
]