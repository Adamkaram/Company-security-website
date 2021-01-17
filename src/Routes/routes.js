import Home from "../Components/Home/Home";
import Auth from "../Components/auth/auth"
import BlogHome from "../Components/Blog/Home/index";
const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    title: 'Blog',
    path: '/blog',
    component: BlogHome
  },
  {
    title: 'Singin',
    path: '/Singin',
    component: Auth
  }
]

export default routes