<template>
    <section>
        <PageIntro
            title="Welcome"
            intro="This is sample intro text. A lacus vestibulum sed arcu non odio. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi."
        />
        <p>Text content can go here, if needed.</p>
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
