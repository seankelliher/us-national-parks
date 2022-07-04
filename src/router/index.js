import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ParksByName from "@/views/ParksByName.vue";
import ParksByRegion from "@/views/ParksByRegion.vue";
import ParksByState from "@/views/ParksByState.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/parks-by-name",
        name: "ParksByName",
        component: ParksByName
    },
    {
        path: "/parks-by-region",
        name: "ParksByRegion",
        component: ParksByRegion
    },
    {
        path: "/parks-by-state",
        name: "ParksByState",
        component: ParksByState
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;