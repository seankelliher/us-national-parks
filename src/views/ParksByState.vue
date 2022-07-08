<template>
    <section>
        <PageIntro
            title="Parks By State"
            intro="There are National Parks in 32 US states and in the U.S. territory of American Samoa."
        />

        <div class="sample">
            <h3>Search for your park by state</h3>
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
            <template v-else>
                <div
                    v-for="park in parks"
                    :key="park.id"
                    class="sample"
                >
                    <h3>{{ park.name }}</h3>
                    <p>
                        <strong>State: </strong>
                        <span
                            v-for="state in park.states"
                            :key="state.index"
                        >
                            {{ state }}, 
                        </span>
                        <br>
                        <strong>Region: </strong> 
                        <span
                            v-for="region in park.regions"
                            :key="region.index"
                        >
                            {{ region }}, 
                        </span><br>
                        <span>
                            <strong>Website:</strong>  
                            <a
                                href="`{{ park.website }}`"
                                target="_blank"
                            >
                                website
                            </a>
                        </span>
                    </p>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
import PageIntro from "@/components/PageIntro.vue";

import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import CHOSEN_STATE_QUERY from "@/graphql/chosenState.query.gql";

export default {
    name: "ParksByState",
    components: {
        PageIntro
    },
    setup() {
        const searchTerm = ref("");
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

        const parks = computed(() => result.value?.chosenState ?? []);

        return { parks, searchTerm, loading, error };
    }
};
//NOTES FOR APOLLO CLIENT: 
// The "search" arg must be a function that returns an obj to const  "result".
//Loading flag, error flag, and debounce are built in.
//But we must:
//Create a const to house flags, return them, & display them in template.
//useResult deprecated. Use computed properties instead. Both extract only data.
</script>

