<template>
    <HeaderPart />
    <NavPart />

    <router-view />
    <FooterPart />
</template>

<script>
import HeaderPart from "@/components/HeaderPart.vue";
import NavPart from "@/components/NavPart.vue";
import FooterPart from "@/components/FooterPart.vue";

//setup is before component is created. It's the entry point for composables.
//useQuery is a composbale in the Vue Apollo Library.
//It performs the query, handles loading/error state, returns results to components.
export default {
    name: "App",
    components: {
        HeaderPart,
        NavPart,
        FooterPart
    }
    /*setup() {
    const { result }  = useQuery(ALL_PARKS_QUERY);
    console.log(result);
    return { result };
    }*/
};
</script>

<style>
@import "@/assets/style.css";
</style>
