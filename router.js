import { createRouter, createWebHistory } from 'vue-router';

import myHome from './views/myHome.vue';
import MyProjects from './views/myProjects.vue';
import myAbout from './views/myAbout.vue';

const routes = [
    { path: '/', name: 'home', component: myHome },
    { path: '/projects', name: 'projects', component: MyProjects},
    { path: '/about', name: 'about', component: myAbout},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
