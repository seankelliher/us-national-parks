<template>
    <PageIntro
        title="Parks By Name"
        intro="There are 63 National Parks in the United States, including American Samoa."
    />

    <section>
        <div class="search">
            <h3>Search for your park by name</h3>
            <input
                v-model="searchTerm"
                type="text"
                name="search-term"
                placeholder="Eg., Yellowstone."
            >
        </div>

        <p
            v-if="loading"
            class="search-messages"
        >
            Loading...
        </p>

        <p
            v-else-if="error"
            class="search-messages"
        >
            Something went wrong! Please try again.
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
            </div>
        </template>
    </section>

    <aside>
        <HelpBox
            title="Need Some Help?"
            text="Type 'park' into the search bar' to get all parks or"
            link="see this list."
            :list-items="listItems"
        />
    </aside>
</template>

<script>
import { ref } from "vue";
import PageIntro from "@/components/PageIntro.vue";
import HelpBox from "@/components/HelpBox.vue";

import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import CHOSEN_NAME_QUERY from "@/graphql/chosenName.query.gql";

export default {
    name: "ParksByName",
    components: {
        PageIntro,
        HelpBox
    },
    setup() {
        const searchTerm = ref("");
        const { result, loading, error } = useQuery(
            CHOSEN_NAME_QUERY,
            () => (
                { search: searchTerm.value }
            ),
            () => (
                {
                    debounce: 500, //half second after user stops typing.
                    enabled: searchTerm.value.length > 3 //4 or more characters.
                }
            )
        );

        const parks = computed(() => result.value?.chosenName ?? []);

        const imageUrl = new URL("../assets/images/", import.meta.url).href;

        return { parks, searchTerm, loading, error, imageUrl};
    },
    data() {
        return{
            listItems: ["Acadia ", "Arches ", "Badlands ", "Big Bend ", "Biscayne ", "Black Canyon", "Bryce Canyon ", "Canyonlands ", "Capitol Reef ", "Carlsbad Caverns ", "Channel Islands ", "Congaree ", "Crater Lake ", "Cuyahoga Valley ", "Death Valley ", "Denali ", "Dry Tortugas ", "Everglades ", "Gates of the Arctic", "Gateway Arch ", "Glacier Bay", "Glacier ", "Grand Canyon ", "Grand Teton ", "Great Basin ", "Great Sand Dunes", "Great Smoky Mountains ", "Guadalupe Mountains ", "Haleakalā ", "Hawai‘i Volcanoes ", "Hot Springs ", "Indiana Dunes ", "Isle Royale ", "Joshua Tree ", "Katmai", "Kenai Fjords ", "Kobuk Valley ", "Lake Clark", "Lassen Volcanic ", "Mammoth Cave ", "Mesa Verde ", "Mount Rainier ", "American Samoa", "New York Harbor", "New River Gorge", "North Cascades ", "Olympic ", "Petrified Forest ", "Pinnacles ", "Rocky Mountain ", "Saguaro ", "Sequoia & Kings Canyon ", "Shenandoah ", "Theodore Roosevelt ", "Virgin Islands ", "Voyageurs ", "White Sands ", "Wind Cave ", "Wolf Trap", "Wrangell - St. Elias", "Yellowstone ", "Yosemite ", "Zion "]
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
