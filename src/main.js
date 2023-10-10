import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "./assets/css/common.css";
import VueApexCharts from "vue3-apexcharts";
import { allCountries } from "country-region-data";

const navlink = document.getElementById("navlink");
if (navlink === window.location.pathname) {
  navlink.className = "navlink active";
}

const app = createApp(App);

app.use(router, PrimeVue, allCountries);
app.use(VueApexCharts);

app.mount("#app");
