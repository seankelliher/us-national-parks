<template>
    <PageIntro
        title="National Park Service"
        intro="Since 1916, the National Park Service has safeguarded America's National Parks."
    />
    <section>
        <div class="park">
            <h3>404 - Page Not Found</h3>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    </section>
</template>

<script>
import PageIntro from "@/components/PageIntro.vue";

export default {
    name: "NotFound",
    components: {
        PageIntro
    }
};
</script>
