<template>
    <div class="map-box">
        <div class="map-box-title">
            <h3>{{ title }}</h3>
        </div>
        <figure
            v-if="!mapArea"
            class="open-close"
            role="button"
            tabindex="0"
            @click="mapArea = !mapArea"
        >
            <img
                src="@/assets/images/open-in-full-icon.svg"
                alt="icon to expand window"
            >
        </figure>
        <figure
            v-if="mapArea"
            class="open-close"
            role="button"
            tabindex="0"
            @click="mapArea = !mapArea"
        >
            <img
                src="@/assets/images/close-icon.svg"
                alt="icon to close window"
            >
        </figure>
        <Transition name="slide-up-fade-in-out">
            <div
                v-if="mapArea"
                class="map-box-content"
            >
                <figure
                    class="full"
                >
                    <img
                        alt="National Parks Service regions map"
                        src="@/assets/images/national-park-service-regions-map.png"
                    >
                    <figcaption>National Park Service Regions. Map produced by Intermountain Region GIS Program Office, September 2003.</figcaption>
                </figure>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    name: "MapBox",
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            mapArea: false
        };
    }
};
</script>