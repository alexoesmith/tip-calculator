import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPoundSign } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPoundSign, faUser, faUndo);

import mitt from "mitt";
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
