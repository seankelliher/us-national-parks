<template>
    <div class="help-box">
        <div class="help-box-title">
            <h3>{{ title }}</h3>
        </div>
        <figure
            v-if="!listArea"
            class="open-close"
            role="button"
            tabindex="0"
            @click="listArea = !listArea"
        >
            <img
                src="@/assets/images/open-in-full-icon.svg"
                alt="icon to expand window"
            >
        </figure>
        <figure
            v-if="listArea"
            class="open-close"
            role="button"
            tabindex="0"
            @click="listArea = !listArea"
        >
            <img
                src="@/assets/images/close-icon.svg"
                alt="icon to close window"
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
                    v-for="(listItem, index) in listItems"
                    :key="index"
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