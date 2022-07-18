<template>
    <PageIntro
        title="Parks By Region"
        intro="The U.S. National Park Service divides the United States into seven regions."
    />

    <section>
        <div class="search">
            <h3>Search for your park by region</h3>
            <input
                v-model="searchTerm"
                type="text"
                name="search-term"
                placeholder="Eg., Pacific"
            >
        </div>

        <p
            v-if="loading"
            class="search-messages subtle"
        >
            Loading...
        </p>

        <p
            v-else-if="error"
            class="search-messages warn"
        >
            Something went wrong. Please try again.
        </p>

        <template v-else>
            <p class="search-messages">
                <span
                    v-if="searchTerm!=='' && parks.length===1"
                >   
                    {{ parks.length }} result for "{{ searchTerm }}"
                </span>
                <span
                    v-if="searchTerm!=='' && parks.length!==1"
                >
                    {{ parks.length }} results for "{{ searchTerm }}"
                </span>
            </p>

            <div
                v-for="park in parks"
                :key="park.id"
                class="park"
            >
                <figure class="full">
                    <img
                        :src="`${imageUrl}${park.image}.jpg`"
                        :alt="park.caption"
                    >
                    <figcaption>{{ park.caption }}</figcaption>
                </figure>

                <h3>{{ park.name }}</h3>

                <p>
                    <strong>State: </strong>
                    <span>{{ park.states.join(', ') }} </span>
                    <br>
                    <strong>Region: </strong> 
                    <span>{{ park.regions.join(', ') }} </span>
                    <br>
                    <span>
                        <strong>Website:</strong>  
                        <a
                            :href="`${park.website}`"
                            target="_blank"
                        >
                            website
                        </a>
                    </span>
                </p>
                <figure
                    class="favorite"
                    @click="toggleFavorite({ id: park.id })"
                >
                    <img
                        v-if="park.favorite === true"
                        src="@/assets/images/favorite-icon-yes-fill.svg"
                    >
                    <img
                        v-else
                        src="@/assets/images/favorite-icon-no-fill.svg"
                    >
                    <!--Loading text is same color as bg and not seen.-->
                    <!--Modify stylesheet's subtle class to display.-->
                    <!--But, it displays text for each park.-->
                    <figcaption
                        v-if="toggleFavoriteLoading"
                        class="subtle"
                    >
                        Loading...
                    </figcaption>
                    <figcaption
                        v-else-if="toggleFavoriteError"
                        class="warn"
                    >
                        Something went wrong. Please try again.
                    </figcaption>
                </figure>
            </div>
        </template>
    </section>

    <aside>
        <HelpBox
            title="Need Some Help?"
            text="These are the National Parks Service's"
            link="seven regions."
            :list-items="listItems"
        />
        <MapBox />
    </aside>
</template>

<script>
import { ref } from "vue";
import PageIntro from "@/components/PageIntro.vue";
import HelpBox from "@/components/HelpBox.vue";
import MapBox from "@/components/MapBox.vue";

import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useMutation } from "@vue/apollo-composable";
import CHOSEN_REGION_QUERY from "@/graphql/chosenRegion.query.gql";
import FAVORITE_PARK_QUERY from "@/graphql/favoritePark.mutation.gql";

export default {
    name: "ParksByRegion",
    components: {
        PageIntro,
        HelpBox,
        MapBox
    },
    setup() {
        const searchTerm = ref("");

        const { result, loading, error } = useQuery(
            CHOSEN_REGION_QUERY,
            () => (
                { search: searchTerm.value }
            ),
            () => (
                {
                    debounce: 500, //run query half second after user stops typing.
                    enabled: searchTerm.value.length > 3 //4 or more characters.
                }
            )
        );

        const parks = computed(() => result.value?.chosenRegion ?? []);

        const imageUrl = new URL("../assets/images/", import.meta.url).href;

        const {
            mutate: toggleFavorite,
            loading: toggleFavoriteLoading,
            error: toggleFavoriteError
        } = useMutation(
            FAVORITE_PARK_QUERY
        );

        return {
            parks,
            searchTerm,
            loading,
            error,
            imageUrl,
            toggleFavorite,
            toggleFavoriteLoading,
            toggleFavoriteError
        };
    },
    data() {
        return {
            listItems: ["Alaska", "Intermountain", "Midwest", "National Capital", "Northeast", "Pacific West", "Southeast"]
        };
    }
};
//NOTES FOR APOLLO CLIENT: 
// The "search" arg must be a function that returns an obj to const  "result".
//Loading flag, error flag, and debounce are built in.
//But we must:
//Create a const to house flags, return them, & display them in template.
//useResult deprecated. Use computed properties instead. Both extract only data.
</script>
