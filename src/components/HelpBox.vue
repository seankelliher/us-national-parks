<template>
    <div class="help-box">
        <div class="help-box-title">
            <h3>{{ title }}</h3>
        </div>
        <figure
            v-if="!listArea"
            class="open-close"
        >
            <img
                src="@/assets/images/open-in-full-icon.svg"
                alt="icon to expand window"
                @click="listArea = !listArea"
            >
        </figure>
        <figure
            v-if="listArea"
            class="open-close"
        >
            <img
                src="@/assets/images/close-icon.svg"
                alt="icon to close window"
                @click="listArea = !listArea"
            >
        </figure>
    </div>
    <Transition name="slide-up-fade-in-out">
        <div
            v-if="listArea"
            class="help-box-content"
        >
            <ol>
                <li
                    v-for="listItem in listItems"
                    :key="listItem"
                >
                    {{ listItem }}
                </li>
            </ol>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "HelpBox",
    props: {
        title: {
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
    },
    data() {
        return {
            listArea: false
        };
    }
};
</script>