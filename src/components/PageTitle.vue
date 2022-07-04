<template>
    <div class="page-title">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: "PageTitle",
    props: {
        title: {
            type: String,
            required: true
        }
    }
};
</script>
