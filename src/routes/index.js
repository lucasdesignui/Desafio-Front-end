import Home from '../views/Home/Home.jsx';

const indexRoutes = [
    {
        path: '/home',
        name: 'Home Owli',
        component: Home
    },
    {
        redirect: true,
        path: '/',
        pathTo: '/home'
    }
];

export default indexRoutes;