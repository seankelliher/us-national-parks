import { createApp, h, provide } from "vue";
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from "@apollo/client/core";
import gql from "graphql-tag";

//This is a Vue Apollo "helper." It provides the apolloClient to the Vue app.
//Allows you to use queries like "ALL_PARKS_QUERY" in Vue components.
import { DefaultApolloClient } from "@vue/apollo-composable";

import App from "@/App.vue";

import router from "@/router";

const httpLink = createHttpLink({
    uri: "http://localhost:4000/server"
});

//This is the Apollo Client cache, query data stored here.
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },
    render: () => h(App)
});

app.use(router);
app.mount("#app");
