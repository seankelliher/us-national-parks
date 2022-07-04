<template>
    <div class="page-nav">
        <label
            v-if="label"
        >
            {{ label }}
        </label>
        <select
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
            <option
                disabled
                value=""
            >
                {{ menu }}
            </option>
            <option
                v-for="option in options"
                :key="option"
                :value="option"
                :selected="option === modelValue"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "PageNav",
    props: {
        label: {
            type: String,
            default: ""
        },
        menu: {
            type: String,
            default: "an option"
        },
        options: {
            type: Array,
            default() {
                return [];
            }
        },
        modelValue: {
            type: [String, Number],
            default: ""
        }
    },
    emits: ["update:modelValue"]
};
</script>
