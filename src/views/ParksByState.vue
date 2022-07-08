<template>
    <section>
        <PageIntro
            title="Parks By State"
            intro="This is sample intro text. A lacus vestibulum sed arcu non odio. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi."
        />

        <PageNav
            v-model="option"
            label="Choose your park"
            :options="options"
            menu="Park is in this state"
        />
        {{ option }}
        <div class="sample">
            <input
                v-model="searchTerm"
                type="text"
                name="search-term"
            >
            <p v-if="loading">
                Loading...
            </p>
            <p v-else-if="error">
                Something went wrong! Please try again.
            </p>
            <!--use <template v-else> for all parks to show-->
            <!--use <template v-else-if="result"> to hide parks until user types-->
            <!--use v-for="park in result.allParks" to use results-->
            <template v-else>
                <p
                    v-for="park in parks"
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
            </template>
        </div>
        <p>Text content can go here, if needed.</p>
    </section>
</template>

<script>
import { ref } from "vue";
import PageIntro from "@/components/PageIntro.vue";
import PageNav from "@/components/PageNav.vue";

import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import CHOSEN_STATE_QUERY from "@/graphql/chosenState.query.gql";

export default {
    name: "ParksByState",
    components: {
        PageIntro,
        PageNav
    },
    setup() {
        const searchTerm = ref("");
        //NOTE: the "search" argument needs to be a function that returns an object to the "result" constant.
        //Also, in Apollo, the mechanics for a loading flag are done automatically. But we have to create a constant and return it, and add a place for it to display on the template.
        //Error messages are similar.
        //Debounce is built in too. Wait 500ms after user stops typing, then fire request to server.
        const { result, loading, error } = useQuery(
            CHOSEN_STATE_QUERY,
            () => (
                { search: searchTerm.value }
            ),
            () => (
                {
                    debounce: 500,
                    enabled: searchTerm.value.length > 2 //3 or more characters.
                }
            )
        );

        //results from query, default value for parks (empty array to itinerate over), and a function that defines the data we want to extract from the query response. We just want the data, not anything else. Also, now the default valie in empty array, we cna change template above to <template v-else>
        //const parks = useResult(result, [], data => data.allParks);
        //return { result, searchTerm, loading, error };

        //Computed replaces deprecated useResult.
        //Same as const parks = useResult(result, [], data => data.allParks);
        //Provides default value for const parks, empty array to iterate over.
        //Provices function to extract what we want from the query, just the data.
        const parks = computed(() => result.value?.chosenState ?? []);

        return { parks, searchTerm, loading, error };
    },
    data() {
        return {
            options: ["All States", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Florida", "Hawaii", "Idaho", "Indiana", "Kentucky", "Maine", "Michigan", "Minnesota", "Missouri", "Montana", "Nevada", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oregon", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wyoming"],
            option: ""
        };
    }
};
</script>
