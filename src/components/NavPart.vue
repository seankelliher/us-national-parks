<template>
    <nav>
        <button class="nav">
            <router-link to="/parks-by-name">
                BY NAME
            </router-link>
        </button>
        <button class="nav">
            <router-link to="/parks-by-region">
                BY REGION
            </router-link>
        </button>
        <button class="nav">
            <router-link to="/parks-by-state">
                BY STATE
            </router-link>
        </button>
    </nav>
</template>

<script>
export default {
    name: "NavPart"
};
</script>
