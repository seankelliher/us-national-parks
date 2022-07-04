<template>
    <section>
        <PageIntro
            title="Parks By Name"
            intro="This is sample intro text. A lacus vestibulum sed arcu non odio. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi."
        />

        <PageNav
            v-model="option"
            label="Choose your park"
            :options="options"
            menu="Park name begins with..."
        />
        {{ option }}
        <div class="sample">
            <p
                v-for="park in result.allParks"
                :key="park.id"
            >
                {{ park.name }}
                <br><span
                    v-for="state in park.states"
                    :key="state.index"
                >
                    {{ state }}, 
                </span><br>
                <span
                    v-for="region in park.regions"
                    :key="region.index"
                >
                    {{ region }}, 
                </span>
            </p>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean. Consectetur a erat nam at lectus urna. Consequat mauris nunc congue nisi vitae suscipit. At urna condimentum mattis pellentesque id nibh tortor id. Tincidunt dui ut ornare lectus sit amet est placerat. Tellus in hac habitasse platea. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Sapien eget mi proin sed libero enim sed faucibus turpis. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Consectetur lorem donec massa sapien. Tortor consequat id porta nibh venenatis cras. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. A lacus vestibulum sed arcu non odio. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Dictum at tempor commodo ullamcorper a lacus. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sagittis nisl rhoncus mattis rhoncus urna. Purus semper eget duis at tellus at urna. Pharetra et ultrices neque ornare. Vitae nunc sed velit dignissim sodales ut eu sem. Donec ac odio tempor orci dapibus ultrices in iaculis. Amet nulla facilisi morbi tempus iaculis. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ullamcorper sit amet risus nullam. In arcu cursus euismod quis viverra nibh. Non nisi est sit amet facilisis magna etiam tempor. Ultrices sagittis orci a scelerisque purus semper eget duis at. Arcu risus quis varius quam quisque id diam.</p>
    </section>
</template>

<script>
import PageIntro from "@/components/PageIntro.vue";
import PageNav from "@/components/PageNav.vue";

import { useQuery } from "@vue/apollo-composable";
import ALL_PARKS_QUERY from "@/graphql/allParks.query.gql";


export default {
    name: "ParksByName",
    components: {
        PageIntro,
        PageNav
    },
    setup() {
        const { result } = useQuery(ALL_PARKS_QUERY);
        return { result };
    },
    data() {
        return {
            options: ["All Parks", "A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "V", "W", "Y", "Z"],
            option: ""
        };
    }
};
</script>
