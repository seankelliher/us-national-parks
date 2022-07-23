<template>
    <div class="page-intro">
        <div class="intro-text">
            <h2>{{ title }}</h2>
            <p>{{ intro }}</p>
        </div>

        <figure
            class="logo"
            role="presentation"
        >
            <img
                alt="National Parks Service logo"
                src="@/assets/images/national-park-service-logo.svg"
            >
        </figure>
    </div>
</template>

<script>
export default {
    name: "PageIntro",
    props: {
        title: {
            type: String,
            required: true
        },
        intro: {
            type: String,
            required: true
        }
    }
};
</script>
