import TQDiscover from "@/pages/discover";
import TQFriend from "@/pages/friend";
import TQMine from "@/pages/mine";

const routes = [
    {
        path: '/',
        exact: true,
        component: TQDiscover
    }, 
    {
        path: '/friend',
        component: TQFriend
    },
    {
        path: '/mine',
        component: TQMine
    }
];

export default routes;