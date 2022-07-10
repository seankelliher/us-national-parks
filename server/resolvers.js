const parks = [
    {
        id: "acad",
        image: "acad-little-hunters-beach",
        caption: "Little Hunters Beach. Photo: Sardius Stalker.",
        name: "Acadia National Park",
        regions: ["Northeast region"],
        states: ["Maine"],
        website: "https://www.nps.gov/acad/index.htm"
    },
    {
        id: "arch",
        image: "arch-delicate-arch",
        caption: "Delicate Arch. Photo: NPS, Neal Herbert",
        name: "Arches National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/arch/index.htm"
    },
    {
        id: "badl",
        image: "badl-hay-butte-overlook",
        caption: "Hay Butte Overlook. Photo: NPS, Ed Welsh.",
        name: "Badlands National Park",
        regions: ["Midwest region"],
        states: ["South Dakota"],
        website: "https://www.nps.gov/badl/index.htm"
    },
    {
        id: "bibe",
        image: "bibe-grass-volcanic-peaks",
        caption: "Grassland and volcanic peaks. Photo: NPS, J. Jurado.",
        name: "Big Bend National Park",
        regions: ["Intermountain region"],
        states: ["Texas"],
        website: "https://www.nps.gov/bibe/index.htm"
    },
    {
        id: "bisc",
        image: "bisc-jones-lagoon",
        caption: "Middle of Jones Lagoon. Photo: Matt Johnson.",
        name: "Biscayne National Park",
        regions: ["Southeast region"],
        states: ["Florida"],
        website: "https://www.nps.gov/bisc/index.htm"
    },
    {
        id: "blca",
        image: "blca-east-portal",
        caption: "Fishing in East Portal. Photo: NPS.",
        name: "Black Canyon of the Gunnison National Park",
        regions: ["Intermountain region"],
        states: ["Colorado"],
        website: "https://www.nps.gov/blca/index.htm"
    },
    {
        id: "brca",
        image: "brca-under-the-rim-trail",
        caption: "Under-the-Rim Trail. Photo: NPS, Peter Densmore.",
        name: "Bryce Canyon National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/brca/index.htm"
    },
    {
        id: "cany",
        image: "cany-white-rim-road",
        caption: "White Rim Road. Photo: NPS, Neal Herbert.",
        name: "Canyonlands National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/cany/index.htm"
    },
    {
        id: "care",
        image: "care-cassidy-arch",
        caption: "Cassidy Arch. Photo: NPS, D. Popovic.",
        name: "Capitol Reef National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/care/index.htm"
    },
    {
        id: "cave",
        image: "cave-carlsbad-caverns",
        caption: "Entrance to Carlsbad Caverns. Photo: NPS, Peter Jones.",
        name: "Carlsbad Caverns National Park",
        regions: ["Intermountain region"],
        states: ["New Mexico"],
        website: "https://www.nps.gov/cave/index.htm"
    },
    {
        id: "chis",
        image: "chis-anacapa-island",
        caption: "Anacapa Island from above. Photo: NPS.",
        name: "Channel Islands National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/chis/index.htm"
    },
    {
        id: "cong",
        image: "cong-ranger-boardwalk",
        caption: "Ranger led walk on the boardwalk. Photo: NPS.",
        name: "Congaree National Park",
        regions: ["Southeast region"],
        states: ["South Carolina"],
        website: "https://www.nps.gov/cong/index.htm"
    },
    {
        id: "crla",
        image: "crla-crater-lake-summer",
        caption: "Crater Lake in summer. Photo: NPS.",
        name: "Crater Lake National Park",
        regions: ["Pacific region"],
        states: ["Oregon"],
        website: "https://www.nps.gov/crla/index.htm"
    },
    {
        id: "cuva",
        image: "cuva-everett-covered-bridge",
        caption: "Everett Road Covered Bridge. Photo: unknown.",
        name: "Cuyahoga Valley National Park",
        regions: ["Midwest region"],
        states: ["Ohio"],
        website: "https://www.nps.gov/cuva/index.htm"
    },
    {
        id: "deva",
        image: "deva-zabriskie-point",
        caption: "Zabriskie Point at sunrise. Photo: NPS, Kurt Moses.",
        name: "Death Valley National Park",
        regions: ["Pacific region"],
        states: ["California", "Nevada"],
        website: "https://www.nps.gov/deva/index.htm"
    },
    {
        id: "dena",
        image: "dena-eielson-visitor-center",
        caption: "Near the Eielson Visitor Center. Photo: NPS, Emily Mesner.",
        name: "Denali National Park",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/dena/index.htm"
    },
    {
        id: "drto",
        image: "drto-coral-monitoring",
        caption: "Coral monitoring. Photo: NPS, Submerged Resource Center.",
        name: "Dry Tortugas National Park",
        regions: ["Southeast region"],
        states: ["Florida"],
        website: "https://www.nps.gov/drto/index.htm"
    },
    {
        id: "ever",
        image: "ever-everglades-at-sunset",
        caption: "Everglades sunset. Photo: Sandy Vergara, NPS photo contest.",
        name: "Everglades National Park",
        regions: ["Southeast region"],
        states: ["Florida"],
        website: "https://www.nps.gov/ever/index.htm"
    },
    {
        id: "gaar",
        image: "gaar-caribou-movement",
        caption: "Caribou movement in spring. Photo: NPS, Alaska Region.",
        name: "Gates of the Arctic National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/gaar/index.htm"
    },
    {
        id: "jeff",
        image: "jeff-gateway-arch",
        caption: "Gateway Arch. Photo: NPS, Sue Ford.",
        name: "Gateway Arch National Park",
        regions: ["Midwest region"],
        states: ["Missouri"],
        website: "https://www.nps.gov/jeff/index.htm"
    },
    {
        id: "glba",
        image: "glba-totem-poles",
        caption: "Totem poles at Bartlett Cove. Photo: NPS, S. Tevebaugh.",
        name: "Glacier Bay National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/glba/index.htm"
    },
    {
        id: "glac",
        image: "glac-road-clearing",
        caption: "Road clearing on the Upper Slopes. Photo: NPS, Glacier.",
        name: "Glacier National Park",
        regions: ["Intermountain region"],
        states: ["Montana"],
        website: "https://www.nps.gov/glac/index.htm"
    },
    {
        id: "grca",
        image: "grca-dine-woman-on-rim",
        caption: "A Dine woman in traditional dress. Photo: NPS, M. Quinn.",
        name: "Grand Canyon National Park",
        regions: ["Intermountain region"],
        states: ["Arizona"],
        website: "https://www.nps.gov/grca/index.htm"
    },
    {
        id: "grte",
        image: "grte-garnet-canyon",
        caption: "The Middle Teton in Garnet Canyon. Photo: NPS.",
        name: "Grand Teton National Park",
        regions: ["Intermountain region"],
        states: ["Wyoming"],
        website: "https://www.nps.gov/grte/index.htm"
    },
    {
        id: "grba",
        image: "grba-great-basin-desert",
        caption: "Great Basin Desert. Photo: unknown.",
        name: "Great Basin National Park",
        regions: ["Pacific region"],
        states: ["Nevada"],
        website: "https://www.nps.gov/grba/index.htm"
    },
    {
        id: "grsa",
        image: "grsa-dunes-cleveland-peak",
        caption: "Sand Dunes and Cleveland Peak. Photo: NPS.",
        name: "Great Sand Dunes National Park & Preserve",
        regions: ["Intermountain region"],
        states: ["Colorado"],
        website: "https://www.nps.gov/grsa/index.htm"
    },
    {
        id: "grsm",
        image: "grms-headstone-cable-cemetery",
        caption: "Headstone in Cable Cemetery. Photo: NPS.",
        name: "Great Smoky Mountains National Park",
        regions: ["Southeast region"],
        states: ["North Carolina", "Tennessee"],
        website: "https://www.nps.gov/grsm/index.htm"
    },
    {
        id: "gumo",
        image: "gumo-wilderness-ridge",
        caption: "View from Wilderness Ridge. Photo: unknown.",
        name: "Guadalupe Mountains National Park",
        regions: ["Intermountain region"],
        states: ["Texas"],
        website: "https://www.nps.gov/gumo/index.htm"
    },
    {
        id: "hale",
        image: "hale-keoneheehee-trail",
        caption: "Rangers on Keoneheʻeheʻe Trail. Photo: NPS, Hannah Mousavi.",
        name: "Haleakalā National Park",
        regions: ["Pacific region"],
        states: ["Hawaii"],
        website: "https://www.nps.gov/hale/index.htm"
    },
    {
        id: "havo",
        image: "havo-hikers-kahuku",
        caption: "Hikers Resting in Kahuku. Photo: NPS, J. Wei.",
        name: "Hawai‘i Volcanoes National Park",
        regions: ["Pacific region"],
        states: ["Hawaii"],
        website: "https://www.nps.gov/havo/index.htm"
    },
    {
        id: "hosp",
        image: "hosp-gulpha-gorge",
        caption: "Gulpha Gorge Creek. Photo: NPS. Mitch Smith.",
        name: "Hot Springs National Park",
        regions: ["Midwest region"],
        states: ["Arkansas"],
        website: "https://www.nps.gov/hosp/index.htm"
    },
    {
        id: "indu",
        image: "indu-cowles-bog",
        caption: "Wetlands of Cowles Bog. Photo: NPS, K. George.",
        name: "Indiana Dunes National Park",
        regions: ["Midwest region"],
        states: ["Indiana"],
        website: "https://www.nps.gov/indu/index.htm"
    },
    {
        id: "isro",
        image: "isro-feldtmann-tower-view",
        caption: "View from Feldtmann Tower. Photo: Kaitlyn Knick.",
        name: "Isle Royale National Park",
        regions: ["Midwest region"],
        states: ["Michigan"],
        website: "https://www.nps.gov/isro/index.htm"
    },
    {
        id: "jotr",
        image: "jotr-lost-horse-valley",
        caption: "Lost Horse Valley. Photo: NPS, Brad Sutton.",
        name: "Joshua Tree National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/jotr/index.htm"
    },
    {
        id: "katm",
        image: "katm-valley-ten-thousand-smokes",
        caption: "Valley of Ten Thousand Smokes. Photo: NPS, Mike Fitz.",
        name: "Katmai National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/katm/index.htm"
    },
    {
        id: "kefj",
        image: "kefj-exit-glacier",
        caption: "Exit Glacier. Photo: NPS, S. Wright.",
        name: "Kenai Fjords National Park",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/kefj/index.htm"
    },
    {
        id: "kova",
        image: "kova-camp-site",
        caption: "Camp site in the Park. Photo: NPS, Arienne Lindholm.",
        name: "Kobuk Valley National Park",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/kova/index.htm"
    },
    {
        id: "lacl",
        image: "lacl-fireweed-on-beach",
        caption: "Fireweed on the beach. Photo: NPS, Warren Hill.",
        name: "Lake Clark National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/lacl/index.htm"
    },
    {
        id: "lavo",
        image: "lavo-bumpass-hell-boardwalk",
        caption: "Bumpass Hell boardwalk. Photo: Kirk Barrett.",
        name: "Lassen Volcanic National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/lavo/index.htm"
    },
    {
        id: "maca",
        image: "maca-kayaks-green-river",
        caption: "Green River. Photo: NPS, Ashley Decker.",
        name: "Mammoth Cave National Park",
        regions: ["Southeast region"],
        states: ["Kentucky"],
        website: "https://www.nps.gov/maca/index.htm"
    },
    {
        id: "meve",
        image: "meve-balcony-house-courtyard",
        caption: "Balcony House courtyard. Photo: NPS.",
        name: "Mesa Verde National Park",
        regions: ["Intermountain region"],
        states: ["Colorado"],
        website: "https://www.nps.gov/meve/index.htm"
    },
    {
        id: "mora",
        image: "mora-mt-rainer-nisqually-glacier",
        caption: "Mount Rainier and Nisqually Glacier. Photo: NPS.",
        name: "Mount Rainier National Park",
        regions: ["Pacific region"],
        states: ["Washington"],
        website: "https://www.nps.gov/mora/index.htm"
    },
    {
        id: "npsa",
        image: "npsa-lower-sauma-ridge-trail",
        caption: "View from the Lower Sauma Ridge Trail. Photo: NPS.",
        name: "National Park of American Samoa",
        regions: ["Pacific region"],
        states: ["American Samoa"],
        website: "https://www.nps.gov/npsa/index.htm"
    },
    {
        id: "npnh",
        image: "npnh-great-hall-ellis-island",
        caption: "The Great Hall at Ellis Island. Photo: NPS.",
        name: "National Parks of New York Harbor",
        regions: ["Northeast region"],
        states: ["New York"],
        website: "https://www.nps.gov/npnh/index.htm"
    },
    {
        id: "neri",
        image: "neri-gorge-in-early-fall",
        caption: "The Gorge in early autumn. Photo: NPS, Dave Bieri.",
        name: "New River Gorge National Park and Preserve",
        regions: ["Northeast region"],
        states: ["West Virginia"],
        website: "https://www.nps.gov/neri/index.htm"
    },
    {
        id: "noca",
        image: "noca-climber-forbidden-ridge",
        caption: "The West Ridge of Forbidden Peak. Photo: A. Brun.",
        name: "North Cascades National Park",
        regions: ["Pacific region"],
        states: ["Washington"],
        website: "https://www.nps.gov/noca/index.htm"
    },
    {
        id: "olym",
        image: "olym-james-island",
        caption: "James Island. Photo: NPS, Danielle Archuleta.",
        name: "Olympic National Park",
        regions: ["Pacific region"],
        states: ["Washington"],
        website: "https://www.nps.gov/olym/index.htm"
    },
    {
        id: "pefo",
        image: "pefo-blue-mesa-member",
        caption: "Blue Mesa Member, Chinle Formation. Photo: NPS.",
        name: "Petrified Forest National Park",
        regions: ["Intermountain region"],
        states: ["Arizona"],
        website: "https://www.nps.gov/pefo/index.htm"
    },
    {
        id: "pinn",
        image: "pinn-hillside-in-park",
        caption: "Pinnacles Rocks. Photo: Emily Novack.",
        name: "Pinnacles National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/pinn/index.htm"
    },
    {
        id: "romo",
        image: "romo-flattop-mountain",
        caption: "Hiking Flattop Mountain. Photo: NPS, Bonnie Beach.",
        name: "Rocky Mountain National Park",
        regions: ["Intermountain region"],
        states: ["Colorado"],
        website: "https://www.nps.gov/romo/index.htm"
    },
    {
        id: "sagu",
        image: "sagu-tanque-verde-ridge",
        caption: "Tanque Verde Ridge Trail. Photo: NPS, Ryan Summers.",
        name: "Saguaro National Park",
        regions: ["Intermountain region"],
        states: ["Arizona"],
        website: "https://www.nps.gov/sagu/index.htm"
    },
    {
        id: "seki",
        image: "seki-giant-sequoia-tree",
        caption: "The base of a Giant Sequoia tree. Photo: NPS, Kiel Maddox.",
        name: "Sequoia & Kings Canyon National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/seki/index.htm"
    },
    {
        id: "shen",
        image: "shen-misty-mountain-view",
        caption: "A misty winter day. Photo: NPS, E. Knepley.",
        name: "Shenandoah National Park",
        regions: ["Northeast region"],
        states: ["Virginia"],
        website: "https://www.nps.gov/shen/index.htm"
    },
    {
        id: "thro",
        image: "thro-loop-road-in-winter",
        caption: "The Loop Road in winter. Photo: NPS, Laura Thomas.",
        name: "Theodore Roosevelt National Park",
        regions: ["Midwest region"],
        states: ["North Dakota"],
        website: "https://www.nps.gov/thro/index.htm"
    },
    {
        id: "viis",
        image: "viis-peace-hill-sugar-mill",
        caption: "Peace Hill Sugar Mill. Photo: NPS, Susanna Pershern.",
        name: "Virgin Islands National Park",
        regions: ["Southeast region"],
        states: ["Virgin Islands"],
        website: "https://www.nps.gov/viis/index.htm"
    },
    {
        id: "voya",
        image: "voya-oberholtzer-trail",
        caption: "Oberholtzer Trail. Photo: NPS, C. Meridith.",
        name: "Voyageurs National Park",
        regions: ["Midwest region"],
        states: ["Minnesota"],
        website: "https://www.nps.gov/voya/index.htm"
    },
    {
        id: "whsa",
        image: "whsa-dunes-drive",
        caption: "The curvy Dunes Drive. Photo: NPS.",
        name: "White Sands National Park",
        regions: ["Intermountain region"],
        states: ["New Mexico"],
        website: "https://www.nps.gov/whsa/index.htm"
    },
    {
        id: "wica",
        image: "wica-bison-highland-park-creek",
        caption: "A bison on the trail. Photo: NPS, Bill Schreier.",
        name: "Wind Cave National Park",
        regions: ["Midwest region"],
        states: ["South Dakota"],
        website: "https://www.nps.gov/wica/index.htm"
    },
    {
        id: "wotr",
        image: "wotr-picnic-in-the-meadow",
        caption: "A picnic in the Meadow. Photo: NPS, Kendra Barat.",
        name: "Wolf Trap National Park for the Performing Arts",
        regions: ["National Capital region"],
        states: ["Virginia"],
        website: "https://www.nps.gov/wotr/index.htm"
    },
    {
        id: "wrst",
        image: "wrst-hikers-near-root-glacier",
        caption: "Hikers near Root Glacier. Photo: NPS.",
        name: "Wrangell - St. Elias National Park & Preserve",
        regions: ["Alaska region"],
        states: ["Alaska"],
        website: "https://www.nps.gov/wrst/index.htm"
    },
    {
        id: "yell",
        image: "yell-wolf-in-gardiner-basin",
        caption: "A wolf in Gardiner Basin. Photo: NPS, Neal Herbert.",
        name: "Yellowstone National Park",
        regions: ["Intermountain region", "Pacific region"],
        states: ["Idaho", "Montana", "Wyoming"],
        website: "https://www.nps.gov/yell/index.htm"
    },
    {
        id: "yose",
        image: "yose-hetch-hetchy",
        caption: "Hetch Hetchy Reservoir. Photo: Clarisa Flores.",
        name: "Yosemite National Park",
        regions: ["Pacific region"],
        states: ["California"],
        website: "https://www.nps.gov/yose/index.htm"
    },
    {
        id: "zion",
        image: "zion-temples-towers-sunrise",
        caption: "Temples and Towers at sunrise. Photo: NPS, Rebecca Alfafara.",
        name: "Zion National Park",
        regions: ["Intermountain region"],
        states: ["Utah"],
        website: "https://www.nps.gov/zion/index.htm"
    }
];

//Resolvers connects everything together.
//They resolve the “functionalities” defined in the schema.
const resolvers = {
    Query: {
        //allParks: ($name) => parks, (With no search capability. Check schema too.)
        chosenName: (_, { search }) => {
            let park = parks.filter((park) =>
                park.name.toLowerCase().includes( search.toLowerCase() )
            );
            return park;
        },
        /*chosenPark: (_, args) => {
            const { id } = args;
            let park = parks.find((park) => park.id === id );
            return park;
        },*/
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

//NOTES ON SUB_STRINGS.
//In chosenState, (0, 7) deciphers overlaps like North Carolina, North Dakota.
//Shorter states like Ohio and Utah still okay.
//In chosenRegion, there is little overlap so (0, 2) works fine.
//Without substrings, search works. But user forced to type full term.
//For example, all of "North Carolina".
