<template>
    <div class="help-box">
        <h3>{{ title }}</h3>
        <p>
            {{ text }}
            <span
                class="link"
                @click="listArea = !listArea"
            >
                {{ link }}
            </span>
        </p>
    </div>
    <Transition name="slide-up-fade-in-out">
        <div
            v-if="listArea"
            class="help-box-list"
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
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false,
            default: "Click here for details."
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