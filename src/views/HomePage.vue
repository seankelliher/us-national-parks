<template>
    <section>
        <PageIntro
            title="Welcome"
            intro="Since 1916, the National Park Service has safeguarded America's national parks and welcomed more than 318 million visitors every year."
        />

        <div class="home-page">
            <button class="large">
                <router-link to="/parks-by-name">
                    Search Parks by Name
                </router-link>
            </button>

            <button class="large">
                <router-link to="/parks-by-region">
                    Search Parks by Region
                </router-link>
            </button>

            <button class="large">
                <router-link to="/parks-by-state">
                    Search Parks by State
                </router-link>
            </button>
        </div>
    </section>
</template>

<script>
import PageIntro from "@/components/PageIntro.vue";

export default {
    name: "ParksByName",
    components: {
        PageIntro
    }
};
</script>
