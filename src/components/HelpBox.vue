<template>
    <div class="help-box">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
        <ol>
            <li
                v-for="listItem in listItems"
                :key="listItem"
            >
                {{ listItem }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "HelpBox",
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        listItems: {
            type: Array,
            required: false,
            default: function() {
                return [];
            }
        }
    }
};
</script>