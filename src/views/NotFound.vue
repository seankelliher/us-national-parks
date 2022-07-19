<template>
    <PageIntro
        title="National Park Service"
        intro="The National Park Service is the caretaker of America's National Parks."
    />
    <section>
        <PageTitle name="404 - Page Not Found" />
        <p>Sorry, the page you are looking for does not exist.</p>
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
