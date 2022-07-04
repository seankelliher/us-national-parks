<template>
    <div class="page-intro">
        <div class="intro-text">
            <h2>{{ title }}</h2>
            <p>{{ intro }}</p>
        </div>

        <figure>
            <img
                alt="National Parks Service logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_of_the_United_States_National_Park_Service.svg/184px-Logo_of_the_United_States_National_Park_Service.svg.png"
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
