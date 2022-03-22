import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import NoticeListPage from '/@pages/notice/NoticeListPage.vue'
import NoticeRegisterPage from '/@pages/notice/NoticeRegisterPage.vue'
import NoticeModifyPage from '/@pages/notice/NoticeModifyPage.vue'
import NoticeReadPage from '/@pages/notice/NoticeReadPage.vue'

export const NoticeRouters = [
  {
    path: '/notice',
    name: 'NoticeListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: NoticeListPage,
      footer: Footer
    }
  },
  {
    path: '/notice/register',
    name: 'NoticeRegisterPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: NoticeRegisterPage,
      footer: Footer
    },
  },
  {
    path: '/notice/:noticeNo',
    name: 'NoticeReadPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: NoticeReadPage,
      footer: Footer
    },
    props: {
      default: true
    }
  },
  {
    path: '/notice/:noticeNo/modify',
    name: 'NoticeModifyPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: NoticeModifyPage,
      footer: Footer
    },
    props: {
      default: true
    },
  }
]
