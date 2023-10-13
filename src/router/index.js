import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import SignupSuccessView from "../views/SignupSuccessView.vue";
import AutoBillingView from "../views/AutoBillingView.vue";
import BillingHistoryView from "../views/BillingHistoryView.vue";

import PurchaseBandwidthView from "../views/PurchaseBandwidthView.vue";
import ProxyListGeneratorView from "../views/ProxyListGeneratorView.vue";
import DomainListView from "../views/DomainListView.vue";
import ContactusView from "../views/ContactusView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/signupsuccess",
      name: "signupsuccess",
      component: SignupSuccessView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/autoreplenish",
      name: "autoreplenish",
      component: AutoBillingView,
    },
    {
      path: "/billinghistory",
      name: "billinghistory",
      component: BillingHistoryView,
    },
    {
      path: "/purchasebandwidth",
      name: "purchasebandwidth",
      component: PurchaseBandwidthView,
    },
    {
      path: "/proxylistgenerator",
      name: "proxylistgenerator",
      component: ProxyListGeneratorView,
    },
    {
      path: "/domainlist",
      name: "domainlist",
      component: DomainListView,
    },
    {
      path: "/knowledge",
      name: "knowledge",
      component: HomeView,
    },
    {
      path: "/residentialuse",
      name: "residentialuse",
      component: HomeView,
    },
    {
      path: "/stickysessions",
      name: "stickysessions",
      component: HomeView,
    },
    {
      path: "/locationcity",
      name: "locationcity",
      component: ProfileView,
    },
    {
      path: "/locationstate",
      name: "locationstate",
      component: ProfileView,
    },
    {
      path: "/locationcountry",
      name: "locationcountry",
      component: ProfileView,
    },
    {
      path: "/contactus",
      name: "contactus",
      component: ContactusView,
    },
  ],
});

export default router;
