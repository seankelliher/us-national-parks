<template>
    <div class="map-box">
        <div class="map-box-title">
            <p
                style="background: #d5eaf2"
                class="link"
                @click="mapArea = !mapArea"
            >
                View a region map
            </p>
        </div>
        <Transition name="slide-up-fade-in-out">
            <div
                v-if="mapArea"
                class="map-box-map"
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
    data() {
        return {
            mapArea: false
        };
    }
};
</script>