import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Paginator from "primevue/paginator";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "./assets/css/common.css";
import VueApexCharts from "vue3-apexcharts";
import { allCountries } from "country-region-data";
import Tooltip from "primevue/tooltip";

const navlink = document.getElementById("navlink");
if (navlink === window.location.pathname) {
  navlink.className = "navlink active";
}

const app = createApp(App);
app.directive("tooltip", Tooltip);
app.component("Paginator", Paginator);
app.use(PrimeVue, { ripple: true });
app.use(router, allCountries);
app.use(VueApexCharts);

app.mount("#app");
