import { HomeRoutes } from "/@router/home";
import { AuthRouters } from "/@router/auth";
import { MemberRouters } from '/@router/member'
import { CodeGroupRouters } from "/@router/codegroup";
import { CodeDetailRouters } from "/@router/codedetail";
import { BoardRouters } from '/@router/board.js'
import { NoticeRouters } from "/@router/notice.js";
import { ItemRouters } from "/@router/item";
import { CoinRouters } from "/@router/coin";
const routes = [
    ...HomeRoutes,
    ...AuthRouters,
    ...MemberRouters,
    ...CodeGroupRouters,
    ...CodeDetailRouters,
    ...BoardRouters,
    ...NoticeRouters,
    ...ItemRouters,
    ...CoinRouters,
]

export default routes
