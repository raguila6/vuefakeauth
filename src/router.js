
import {createRouter, createWebHistory} from "vue-router";

import About from "./pages/about.vue";
import Hello from "./pages/hello.vue";
import Index from "./pages/index.vue";
import notFound from "./pages/404.vue";


const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/hello",
        name: "Hello",
        component: Hello,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: notFound,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;