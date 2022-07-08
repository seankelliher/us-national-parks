const parks = [
    {
        id: "acad",
        name: "Acadia National Park",
        regions: ["Northeast region"],
        states: ["Maine"],
        website: "https://www.nps.gov/acad/index.htm"
    },
    {
        id: "arch",
        name: "Arches National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/arch/index.htm"
    },
    {
        id: "badl",
        name: "Badlands National Park",
        regions: ["Midwest region"],
        states: ["South Dakota"],
        website: "https://www.nps.gov/badl/index.htm"
    },
    {
        id: "bibe",
        name: "Big Bend National Park",
        regions: ["Intermountain region"],
        states: ["Texas"],
        website: "https://www.nps.gov/bibe/index.htm"
    },
    {
        id: "bisc",
        name: "Biscayne National Park",
        regions: ["Southeast region"],
        states: ["Florida"],
        website: "https://www.nps.gov/bisc/index.htm"
    },
    {
        id: "blca",
        name: "Black Canyon of the Gunnison National Park",
        regions: ["Intermountain region"],
        states: ["Colorado"],
        website: "https://www.nps.gov/blca/index.htm"
    },
    {
        id: "brca",
        name: "Bryce Canyon National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/brca/index.htm"
    },
    {
        id: "cany",
        name: "Canyonlands National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/cany/index.htm"
    },
    {
        id: "care",
        name: "Capitol Reef National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/care/index.htm"
    },
    {
        id: "cave",
        name: "Carlsbad Caverns National Park",
        regions: ["Intermountain region"],
        states: ["New Mexico"],
        website: "https://www.nps.gov/cave/index.htm"
    },
    {
        id: "chis",
        name: "Channel Islands National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/chis/index.htm"
    },
    {
        id: "cong",
        name: "Congaree National Park",
        regions: ["Southeast region"],
        states: ["South Carolina"],
        website: "https://www.nps.gov/cong/index.htm"
    },
    {
        id: "crla",
        name: "Crater Lake National Park",
        regions: ["Pacific region"],
        states: ["Oregon"],
        website: "https://www.nps.gov/crla/index.htm"
    },
    {
        id: "cuva",
        name: "Cuyahoga Valley National Park",
        regions: ["Midwest region"],
        states: ["Ohio"],
        website: "https://www.nps.gov/cuva/index.htm"
    },
    {
        id: "deva",
        name: "Death Valley National Park",
        regions: ["Pacific region"],
        states: ["California", "Nevada"],
        website: "https://www.nps.gov/deva/index.htm"
    },
    {
        id: "dena",
        name: "Denali National Park",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/dena/index.htm"
    },
    {
        id: "drto",
        name: "Dry Tortugas National Park",
        regions: ["Southeast region"],
        states: ["Florida"],
        website: "https://www.nps.gov/drto/index.htm"
    },
    {
        id: "ever",
        name: "Everglades National Park",
        regions: ["Southeast region"],
        states: ["Florida"],
        website: "https://www.nps.gov/ever/index.htm"
    },
    {
        id: "gaar",
        name: "Gates of the Arctic National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/gaar/index.htm"
    },
    {
        id: "jeff",
        name: "Gateway Arch National Park",
        regions: ["Midwest region"],
        states: ["Missouri"],
        website: "https://www.nps.gov/jeff/index.htm"
    },
    {
        id: "glba",
        name: "Glacier Bay National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/glba/index.htm"
    },
    {
        id: "glac",
        name: "Glacier National Park",
        regions: ["Intermountain region"],
        states: ["Montana"],
        website: "https://www.nps.gov/glac/index.htm"
    },
    {
        id: "grca",
        name: "Grand Canyon National Park",
        regions: ["Intermountain region"],
        states: ["Arizona"],
        website: "https://www.nps.gov/grca/index.htm"
    },
    {
        id: "grte",
        name: "Grand Teton National Park",
        regions: ["Intermountain region"],
        states: ["Wyoming"],
        website: "https://www.nps.gov/grte/index.htm"
    },
    {
        id: "grba",
        name: "Great Basin National Park",
        regions: ["Pacific region"],
        states: ["Nevada"],
        website: "https://www.nps.gov/grba/index.htm"
    },
    {
        id: "grsa",
        name: "Great Sand Dunes National Park & Preserve",
        regions: ["Intermountain region"],
        states: ["Colorado"],
        website: "https://www.nps.gov/grsa/index.htm"
    },
    {
        id: "grsm",
        name: "Great Smoky Mountains National Park",
        regions: ["Southeast region"],
        states: ["North Carolina", "Tennessee"],
        website: "https://www.nps.gov/grsm/index.htm"
    },
    {
        id: "gumo",
        name: "Guadalupe Mountains National Park",
        regions: ["Intermountain region"],
        states: ["Texas"],
        website: "https://www.nps.gov/gumo/index.htm"
    },
    {
        id: "hale",
        name: "Haleakalā National Park",
        regions: ["Pacific region"],
        states: ["Hawaii"],
        website: "https://www.nps.gov/hale/index.htm"
    },
    {
        id: "havo",
        name: "Hawai‘i Volcanoes National Park",
        regions: ["Pacific region"],
        states: ["Hawaii"],
        website: "https://www.nps.gov/havo/index.htm"
    },
    {
        id: "hosp",
        name: "Hot Springs National Park",
        regions: ["Midwest region"],
        states: ["Arkansas"],
        website: "https://www.nps.gov/hosp/index.htm"
    },
    {
        id: "indu",
        name: "Indiana Dunes National Park",
        regions: ["Midwest region"],
        states: ["Indiana"],
        website: "https://www.nps.gov/indu/index.htm"
    },
    {
        id: "isro",
        name: "Isle Royale National Park",
        regions: ["Midwest region"],
        states: ["Michigan"],
        website: "https://www.nps.gov/isro/index.htm"
    },
    {
        id: "jotr",
        name: "Joshua Tree National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/jotr/index.htm"
    },
    {
        id: "katm",
        name: "Katmai National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/katm/index.htm"
    },
    {
        id: "kefj",
        name: "Kenai Fjords National Park",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/kefj/index.htm"
    },
    {
        id: "kova",
        name: "Kobuk Valley National Park",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/kova/index.htm"
    },
    {
        id: "lacl",
        name: "Lake Clark National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/lacl/index.htm"
    },
    {
        id: "lavo",
        name: "Lassen Volcanic National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/lavo/index.htm"
    },
    {
        id: "maca",
        name: "Mammoth Cave National Park",
        regions: ["Southeast region"],
        states: ["Kentucky"],
        website: "https://www.nps.gov/maca/index.htm"
    },
    {
        id: "meve",
        name: "Mesa Verde National Park",
        regions: ["Intermountain region"],
        states: ["Colorado"],
        website: "https://www.nps.gov/meve/index.htm"
    },
    {
        id: "mora",
        name: "Mount Rainier National Park",
        regions: ["Pacific region"],
        states: ["Washington"],
        website: "https://www.nps.gov/mora/index.htm"
    },
    {
        id: "npsa",
        name: "National Park of American Samoa",
        regions: ["Pacific region"],
        states: ["American Samoa"],
        website: "https://www.nps.gov/npsa/index.htm"
    },
    {
        id: "npnh",
        name: "National Parks of New York Harbor",
        regions: ["Northeast region"],
        states: ["New York"],
        website: "https://www.nps.gov/npnh/index.htm"
    },
    {
        id: "neri",
        name: "New River Gorge National Park and Preserve",
        regions: ["Northeast region"],
        states: ["West Virginia"],
        website: "https://www.nps.gov/neri/index.htm"
    },
    {
        id: "noca",
        name: "North Cascades National Park",
        regions: ["Pacific region"],
        states: ["Washington"],
        website: "https://www.nps.gov/noca/index.htm"
    },
    {
        id: "olym",
        name: "Olympic National Park",
        regions: ["Pacific region"],
        states: ["Washington"],
        website: "https://www.nps.gov/olym/index.htm"
    },
    {
        id: "pefo",
        name: "Petrified Forest National Park",
        regions: ["Intermountain region"],
        states: ["Arizona"],
        website: "https://www.nps.gov/pefo/index.htm"
    },
    {
        id: "pinn",
        name: "Pinnacles National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/pinn/index.htm"
    },
    {
        id: "romo",
        name: "Rocky Mountain National Park",
        regions: ["Intermountain region"],
        states: ["Colorado"],
        website: "https://www.nps.gov/romo/index.htm"
    },
    {
        id: "sagu",
        name: "Saguaro National Park",
        regions: ["Intermountain region"],
        states: ["Arizona"],
        website: "https://www.nps.gov/sagu/index.htm"
    },
    {
        id: "seki",
        name: "Sequoia & Kings Canyon National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/seki/index.htm"
    },
    {
        id: "shen",
        name: "Shenandoah National Park",
        regions: ["Northeast region"],
        states: ["Virginia"],
        website: "https://www.nps.gov/shen/index.htm"
    },
    {
        id: "thro",
        name: "Theodore Roosevelt National Park",
        regions: ["Midwest region"],
        states: ["North Dakota"],
        website: "https://www.nps.gov/thro/index.htm"
    },
    {
        id: "viis",
        name: "Virgin Islands National Park",
        regions: ["Southeast region"],
        states: ["Virgin Islands"],
        website: "https://www.nps.gov/viis/index.htm"
    },
    {
        id: "voya",
        name: "Voyageurs National Park",
        regions: ["Midwest region"],
        states: ["Minnesota"],
        website: "https://www.nps.gov/voya/index.htm"
    },
    {
        id: "whsa",
        name: "White Sands National Park",
        regions: ["Intermountain region"],
        states: ["New Mexico"],
        website: "https://www.nps.gov/whsa/index.htm"
    },
    {
        id: "wica",
        name: "Wind Cave National Park",
        regions: ["Midwest region"],
        states: ["South Dakota"],
        website: "https://www.nps.gov/wica/index.htm"
    },
    {
        id: "wotr",
        name: "Wolf Trap National Park for the Performing Arts",
        regions: ["National Capital region"],
        states: ["Virginia"],
        website: "https://www.nps.gov/wotr/index.htm"
    },
    {
        id: "wrst",
        name: "Wrangell - St. Elias National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/wrst/index.htm"
    },
    {
        id: "yell",
        name: "Yellowstone National Park",
        regions: ["Intermountain region", "Pacific region"],
        states: ["Idaho", "Montana", "Wyoming"],
        website: "https://www.nps.gov/yell/index.htm"
    },
    {
        id: "yose",
        name: "Yosemite National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/yose/index.htm"
    },
    {
        id: "zion",
        name: "Zion National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/zion/index.htm"
    }
];


// Resolvers connects everything together.
//They resolve the “functionalities” defined in the schema.
//This resolver retrieves parks from the "parks" array above.

//const chosenPark = "Yosemite National Park";
//const chosenState = "Alaska";
//const chosenRegion = "Pacific region";

const resolvers = {
    Query: {
        //allParks: ($name) => parks, (With no search capability. Check schema too.)
        allParks: (_, { search }) => {
            let park = parks.filter((park) =>
                park.name.toLowerCase().includes( search.toLowerCase() )
            );
            return park;
        },
        chosenPark: (_, args) => {
            const { id } = args;
            let park = parks.find((park) => park.id === id );
            return park;
        },
        chosenState: (_, { search }) => {
            let park = parks.filter((park) =>
                park.states.map((state) =>
                    state.substring(0, 7).toLowerCase()).includes(
                        search.substring(0, 7).toLowerCase()
                    )
            );
            return park;
        },
        chosenRegion: (_, { search }) => {
            let park = parks.filter((park) =>
                park.regions.map((region) =>
                    region.substring(0, 2).toLowerCase()).includes(
                        search.substring(0, 2).toLowerCase()
                    )
            );
            return park;
        }
    }
};

module.exports = resolvers;
