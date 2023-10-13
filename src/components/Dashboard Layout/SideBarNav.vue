<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import '../../assets/css/sidebar.css'
export default {

    components: {
        RouterLink,
    },
    setup() {
        const navlinks = ref([
            {
                name: "Home", key: "1", to: "/dashboard", icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">< g clip- path="url(#clip0_16416_2356)" > <path d="M3.5 10.1333C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333H3.5ZM3.5 16.8C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8H3.5ZM11.8333 16.8C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8H11.8333ZM11.5333 3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5V3.5Z" stroke="#B4B4B4" stroke-width="1.4" /></ ><defs><clipPath id="clip0_16416_2356"><rect width="20" height="20" fill="white" /></clipPath></defs></svg >'
            },
            { name: "Collections", key: "2", to: "/collections" },
            { name: "Create Collection", key: "3", to: "/createcollections" },
            { name: "Statistics", key: "4", to: "/statistics" },
            { name: "Billing and Plan", key: "5", to: "/billing" },
            { name: "Activate Proxy Pilot", key: "6", to: "/proxylist" },
            { name: "Profile", key: "7", to: "/profile" },
            { name: "Resources ", key: "8", to: "/recources" },
            { name: "Contact Us", key: "9", to: "/contactus" },]);

        return {
            navlinks,
        };
    },
    data() {
        return {
            currentDate: '',
            currentDay: '',
        };
    },
    props: {
        isSidebarOpen: Boolean,
    },
    methods: {
        toggleSidebar() {
            this.$emit('toggleSidebar');
        },
        getCurrentDateAndDay() {
            const now = new Date();
            const year = now.getFullYear();
            const monthNames = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];
            const monthIndex = now.getMonth();
            const month = monthNames[monthIndex];
            const day = String(now.getDate()).padStart(2, '0');
            this.currentDate = `${year} ${month} ${day}`;
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            this.currentDay = daysOfWeek[now.getDay()];
        },
    },
    mounted() {
        this.getCurrentDateAndDay();
    },
};

</script>
<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>

<template>
    <div class="sidebar shadow-sidebar transition ease-in-out duration-300 z-[1] dark:bg-[#282828] dark:shadow-sidebarDark"
        :class="{ 'open': isSidebarOpen, 'closed': !isSidebarOpen }">
        <div>
            <div class="px-[24px] py-[30px] border-b border-[#EBEFF2] dark:border-[#212B33] h-[84px]">
                <RouterLink to="/" class="w-full">
                    <img v-if="isSidebarOpen && !isDark" src="../../assets/icons/sidebar-logo.svg"
                        class="lg:block hidden img-fluid h-[26px]" alt="Logo">
                    <img v-if="isSidebarOpen && isDark" src="../../assets/icons/authlogo.svg"
                        class="lg:block hidden img-fluid h-[26px]" alt="Logo">
                    <img v-if="!isSidebarOpen" src="../../assets/icons/simpleRlogo.svg" class="lg:block hidden img-fluid "
                        alt="Logo">
                </RouterLink>
                <RouterLink to="/" class="w-full">
                    <img src="../../assets/icons/simpleRlogo.svg" class="lg:hidden img-fluid h-[26px]" alt="avatar" />
                </RouterLink>
            </div>
            <div class="px-[24px] py-[35px] border-b border-[#EBEFF2] dark:border-[#212B33] relative">
                <p class="text-[#192A3E] dark:text-white font-[400] text-[14px] leading-[20px] mb-[5px]">Hi, <span
                        v-if="isSidebarOpen" class="lg:contents hidden">
                        Good Morning</span>
                    <!-- <span v-if="!isSidebarOpen" class="lg:block hidden">
                        GM</span>
                    <span class="lg:hidden block">GM</span> -->
                </p>
                <p v-if="isSidebarOpen" class="text-[#B4B4B4] font-[500] text-[12px] leading-[18px] lg:block hidden">
                    {{ currentDay }}, {{ currentDate }}</p>
                <button @click="toggleSidebar" class="absolute right-0 top-0 bottom-0 my-auto mx-0">
                    <img v-if="isSidebarOpen" src="../../assets/icons/sidebar-toogler.svg" alt="toogler" class="w-full" />
                    <img v-else src="../../assets/icons/sidebar-toogle-open.svg" alt="toogler" class="w-full" />
                </button>
            </div>


            <div class=" navlist">
                <ul class="border-b border-[#EBEFF2] dark:border-[#212B33] py-[24px] sidebar-nav1">
                    <li class="h-[48px] flex items-center cursor-pointer">
                        <RouterLink id="navlink"
                            class="navlink dashboard px-[24px] w-full py-3 flex items-center gap-[14px] text-[14px]" to="/dashboard">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16428_2366)">
                                    <path
                                        d="M3.5 10.1333C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333H3.5ZM3.5 16.8C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8H3.5ZM11.8333 16.8C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8H11.8333ZM11.5333 3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5V3.5Z"
                                        stroke="#B4B4B4" stroke-width="1.4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16428_2366">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span class="dark:text-[#B4B4B4] text-[#505050]">Dashboard</span>
                        </RouterLink>
                    </li>
                    <li class="h-[48px] flex items-center cursor-pointer">
                        <RouterLink id="navlink"
                            class="navlink profile px-[24px] w-full py-3 flex items-center gap-[14px] text-[14px]" to="/profile">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16416_723)">
                                    <path
                                        d="M7.31106 6.11155C7.31106 4.34953 8.73793 2.92266 10.4999 2.92266C12.262 2.92266 13.6888 4.34953 13.6888 6.11155C13.6888 7.87356 12.262 9.30044 10.4999 9.30044C8.73793 9.30044 7.31106 7.87356 7.31106 6.11155ZM3.42217 14.8615C3.42217 14.4721 3.61169 14.0792 4.04717 13.6773C4.4874 13.271 5.13067 12.9045 5.89793 12.5971C7.43358 11.9819 9.28953 11.6727 10.4999 11.6727C11.7104 11.6727 13.5663 11.9819 15.102 12.5971C15.8692 12.9045 16.5125 13.271 16.9527 13.6773C17.3882 14.0792 17.5777 14.4721 17.5777 14.8615V17.0782H3.42217V14.8615Z"
                                        stroke="#B4B4B4" stroke-width="1.4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16416_723">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span class="dark:text-[#B4B4B4] text-[#505050]">Profile</span>
                        </RouterLink>
                    </li>
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="navlink ps-[24px] pe-[30px] w-full py-3 flex items-center justify-between text-[14px] gap-[2px]"
                            :class="$route.path === '/purchasebandwidth' || $route.path === '/autoreplenish' || $route.path === '/billinghistory' ? 'router-link-active' : ''">
                            <div class="flex items-center gap-[14px]">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_16496_1340)">
                                        <path
                                            d="M16.6666 3.33301H3.33329C2.40829 3.33301 1.67496 4.07467 1.67496 4.99967L1.66663 14.9997C1.66663 15.9247 2.40829 16.6663 3.33329 16.6663H16.6666C17.5916 16.6663 18.3333 15.9247 18.3333 14.9997V4.99967C18.3333 4.07467 17.5916 3.33301 16.6666 3.33301ZM16.6666 14.9997H3.33329V9.99967H16.6666V14.9997ZM16.6666 6.66634H3.33329V4.99967H16.6666V6.66634Z"
                                            fill="#B4B4B4" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_16496_1340">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span class="dark:text-[#B4B4B4] text-[#505050]">Billing </span>
                            </div>
                            <!-- <img src="../../assets//icons/chevron-down.svg" alt=""> -->
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                :class="open && 'rotate-180 transform'">
                                <g id="chevron-down">
                                    <path id="Icon" d="M4 6L8 10L12 6"
                                        :stroke="$route.path === '/purchasebandwidth' || $route.path === '/autoreplenish' || $route.path === '/billinghistory' ? '#07B6BF' : '#475467'"
                                        stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>


                        </DisclosureButton>
                        <DisclosurePanel class="navlink py-[8px]"
                            :class="{ 'pl-[24px]': !isSidebarOpen, 'pl-[40px]': isSidebarOpen }">
                            <li class="h-[38px] flex items-center cursor-pointer">
                                <RouterLink id="navlink" class="navlink w-full flex items-center gap-[24px] text-[14px]"
                                    to="/purchasebandwidth">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.4225 2.74417C11.3452 2.66663 11.2534 2.60514 11.1523 2.56324C11.0512 2.52133 10.9428 2.49984 10.8333 2.5H3.33333C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V10.8333C2.5 11.055 2.5875 11.2667 2.74417 11.4225L9.41083 18.0892C9.48804 18.1668 9.57984 18.2284 9.68096 18.2705C9.78207 18.3125 9.89049 18.3342 10 18.3342C10.1095 18.3342 10.2179 18.3125 10.319 18.2705C10.4202 18.2284 10.512 18.1668 10.5892 18.0892L18.0892 10.5892C18.1666 10.5118 18.2281 10.42 18.27 10.3189C18.3119 10.2178 18.3335 10.1094 18.3335 10C18.3335 9.89056 18.3119 9.78219 18.27 9.68109C18.2281 9.57999 18.1666 9.48816 18.0892 9.41083L11.4225 2.74417ZM10 16.3217L4.16667 10.4883V4.16667H10.4883L16.3217 10L10 16.3217Z"
                                            fill="#B4B4B4" />
                                        <path
                                            d="M7.08009 8.33353C7.77275 8.33353 8.33426 7.77202 8.33426 7.07936C8.33426 6.3867 7.77275 5.8252 7.08009 5.8252C6.38744 5.8252 5.82593 6.3867 5.82593 7.07936C5.82593 7.77202 6.38744 8.33353 7.08009 8.33353Z"
                                            fill="#B4B4B4" />
                                    </svg>
                                    <span class="dark:text-[#B4B4B4] text-[#505050]">Purchase Bandwidth</span>
                                </RouterLink>
                            </li>
                            <li class="h-[38px] flex items-center cursor-pointer">
                                <RouterLink id="navlink" class="navlink w-full flex items-center gap-[24px] text-[14px]"
                                    to="/autoreplenish">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.5666 4.99984H9.43329L5.83329 13.3332H7.49996L8.10829 11.6665H11.8916L12.5 13.3332H14.1666L10.5666 4.99984ZM8.58329 10.4165L9.99996 6.6665L11.4166 10.4165H8.58329ZM14.5 16.9998L15.8333 18.3332H11.6666V14.1665L13.3333 15.8332C15.325 14.6748 16.6666 12.4582 16.6666 9.99984C16.6666 6.32484 13.675 3.33317 9.99996 3.33317C6.32496 3.33317 3.33329 6.32484 3.33329 9.99984C3.33329 12.4582 4.67496 14.6082 6.66663 15.7665V17.6332C3.72496 16.3415 1.66663 13.4165 1.66663 9.99984C1.66663 5.4165 5.41663 1.6665 9.99996 1.6665C14.5833 1.6665 18.3333 5.4165 18.3333 9.99984C18.3333 12.9415 16.8083 15.5165 14.5 16.9998Z"
                                            fill="#B4B4B4" />
                                    </svg>
                                    <span class="dark:text-[#B4B4B4] text-[#505050]">Auto-Replenish Bandwidth</span>
                                </RouterLink>
                            </li>
                            <li class="h-[38px] flex items-center cursor-pointer">
                                <RouterLink id="navlink" class="navlink w-full flex items-center gap-[24px] text-[14px]"
                                    to="/billinghistory">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.33329 15.8332V6.6665V15.8332ZM3.33329 17.4998C2.87496 17.4998 2.48274 17.3368 2.15663 17.0107C1.82996 16.684 1.66663 16.2915 1.66663 15.8332V6.6665C1.66663 6.20817 1.82996 5.81595 2.15663 5.48984C2.48274 5.16317 2.87496 4.99984 3.33329 4.99984H6.66663V3.33317C6.66663 2.87484 6.82996 2.48234 7.15663 2.15567C7.48274 1.82956 7.87496 1.6665 8.33329 1.6665H11.6666C12.125 1.6665 12.5175 1.82956 12.8441 2.15567C13.1702 2.48234 13.3333 2.87484 13.3333 3.33317V4.99984H16.6666C17.125 4.99984 17.5175 5.16317 17.8441 5.48984C18.1702 5.81595 18.3333 6.20817 18.3333 6.6665V10.229C18.0833 10.0484 17.8194 9.89206 17.5416 9.75984C17.2638 9.62817 16.9722 9.51373 16.6666 9.4165V6.6665H3.33329V15.8332H9.22913C9.27079 16.1248 9.33329 16.4096 9.41663 16.6873C9.49996 16.9651 9.60413 17.2359 9.72913 17.4998H3.33329ZM8.33329 4.99984H11.6666V3.33317H8.33329V4.99984ZM15 19.1665C13.8472 19.1665 12.8647 18.7604 12.0525 17.9482C11.2397 17.1354 10.8333 16.1526 10.8333 14.9998C10.8333 13.8471 11.2397 12.8643 12.0525 12.0515C12.8647 11.2393 13.8472 10.8332 15 10.8332C16.1527 10.8332 17.1355 11.2393 17.9483 12.0515C18.7605 12.8643 19.1666 13.8471 19.1666 14.9998C19.1666 16.1526 18.7605 17.1354 17.9483 17.9482C17.1355 18.7604 16.1527 19.1665 15 19.1665ZM16.375 16.9582L16.9583 16.3748L15.4166 14.8332V12.4998H14.5833V15.1665L16.375 16.9582Z"
                                            fill="#B4B4B4" />
                                    </svg>
                                    <span class="dark:text-[#B4B4B4] text-[#505050]">Billing History</span>
                                </RouterLink>
                            </li>
                        </DisclosurePanel>
                    </Disclosure>
                    <li class="h-[48px] flex items-center cursor-pointer">
                        <RouterLink id="navlink"
                            class="navlink px-[24px] w-full py-3 flex items-center gap-[14px] text-[14px]"
                            to="/proxylistgenerator">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16496_1351)">
                                    <path
                                        d="M9.16667 5.83333H14.1667V7.5H9.16667V5.83333ZM9.16667 9.16667H14.1667V10.8333H9.16667V9.16667ZM9.16667 12.5H14.1667V14.1667H9.16667V12.5ZM5.83333 5.83333H7.5V7.5H5.83333V5.83333ZM5.83333 9.16667H7.5V10.8333H5.83333V9.16667ZM5.83333 12.5H7.5V14.1667H5.83333V12.5ZM16.75 2.5H3.25C2.83333 2.5 2.5 2.83333 2.5 3.25V16.75C2.5 17.0833 2.83333 17.5 3.25 17.5H16.75C17.0833 17.5 17.5 17.0833 17.5 16.75V3.25C17.5 2.83333 17.0833 2.5 16.75 2.5ZM15.8333 15.8333H4.16667V4.16667H15.8333V15.8333Z"
                                        fill="#B4B4B4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16496_1351">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span class="dark:text-[#B4B4B4] text-[#505050]">Proxy List Generator</span>
                        </RouterLink>
                    </li>
                    <li class="h-[48px] flex items-center cursor-pointer">
                        <RouterLink id="navlink"
                            class="navlink domainlist px-[24px] w-full py-3 flex items-center gap-[14px] text-[14px]" to="/domainlist">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16496_1358)">
                                    <path
                                        d="M2.49996 3.2H16.6666C16.7384 3.2 16.8 3.2616 16.8 3.33333V8.33333C16.8 8.40507 16.7384 8.46667 16.6666 8.46667H2.49996C2.42823 8.46667 2.36663 8.40507 2.36663 8.33333V3.33333C2.36663 3.2616 2.42823 3.2 2.49996 3.2ZM2.49996 11.5333H16.6666C16.7384 11.5333 16.8 11.5949 16.8 11.6667V16.6667C16.8 16.7384 16.7384 16.8 16.6666 16.8H2.49996C2.42823 16.8 2.36663 16.7384 2.36663 16.6667V11.6667C2.36663 11.5949 2.42823 11.5333 2.49996 11.5333Z"
                                        stroke="#B4B4B4" stroke-width="1.4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16496_1358">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span class="dark:text-[#B4B4B4] text-[#505050]">Domains List</span>
                        </RouterLink>
                    </li>
                </ul>
                <ul class="py-[24px] sidebar-nav2">
                    <li class="h-[48px] flex items-center cursor-pointer">
                        <RouterLink id="navlink"
                            class="navlink contactus px-[24px] w-full py-3 flex items-center gap-[14px] text-[14px]" to="/contactus">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16416_2424)">
                                    <path
                                        d="M2.37508 5.00026V4.99967C2.37508 4.46503 2.80791 4.03301 3.33341 4.03301H16.6667C17.1968 4.03301 17.6334 4.46961 17.6334 4.99967V14.9997C17.6334 15.5297 17.1968 15.9663 16.6667 15.9663H3.33341C2.80343 15.9663 2.36689 15.5299 2.36675 14.9999C2.36675 14.9998 2.36675 14.9998 2.36675 14.9997L2.37508 5.00026Z"
                                        stroke="#B4B4B4" stroke-width="1.4" />
                                    <path d="M2.5 5L10 10L17.5 5" stroke="#B4B4B4" stroke-width="1.4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16416_2424">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span class="dark:text-[#B4B4B4] text-[#505050]">Contact Us</span>
                        </RouterLink>
                    </li>
                    <li class="h-[48px] flex items-center cursor-pointer">
                        <RouterLink id="navlink"
                            class="navlink px-[24px] w-full py-3 flex items-center gap-[14px] text-[14px]" to="/knowledge">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16496_1373)">
                                    <path
                                        d="M3.45837 4.09199L4.63337 2.91699L6.12504 4.41699L4.95004 5.59199L3.45837 4.09199ZM9.66671 3.33366H11.3334V0.833658H9.66671V3.33366ZM1.33337 10.8337H3.83337V9.16699H1.33337V10.8337ZM11.3334 16.6253V13.3253L12.1667 12.842C13.2 12.242 13.8334 11.142 13.8334 9.95866C13.8334 8.11699 12.3417 6.62533 10.5 6.62533C8.65837 6.62533 7.16671 8.11699 7.16671 9.95866C7.16671 11.142 7.80837 12.242 8.83337 12.842L9.66671 13.3253V16.6253H11.3334ZM13 18.292H8.00004V14.2837C6.50837 13.417 5.50004 11.8087 5.50004 9.95866C5.50004 7.20033 7.74171 4.95866 10.5 4.95866C13.2584 4.95866 15.5 7.20033 15.5 9.95866C15.5 11.8087 14.4917 13.417 13 14.2837V18.292ZM17.1667 10.8337H19.6667V9.16699H17.1667V10.8337ZM14.8667 4.40866L16.3584 2.90866L17.5334 4.08366L16.0334 5.57533L14.8667 4.40866Z"
                                        fill="#B4B4B4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16496_1373">
                                        <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0.5 20)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span class="dark:text-[#B4B4B4] text-[#505050]">Knowledge Base</span>
                        </RouterLink>
                    </li>
                    <li class="h-[48px] flex items-center cursor-pointer">
                        <RouterLink id="navlink"
                            class="navlink px-[24px] w-full py-3 flex items-center gap-[14px] text-[14px]"
                            to="/residentialuse">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16496_1379)">
                                    <path
                                        d="M10.5084 13.3337C10.2834 13.3337 10.075 13.2503 9.91671 13.092C9.75004 12.9253 9.67504 12.7337 9.67504 12.5003C9.66671 12.042 10.0334 11.6753 10.4917 11.667C10.5 11.667 10.5 11.667 10.5084 11.667C10.7417 11.667 10.9334 11.7503 11.1 11.9087C11.25 12.067 11.3334 12.267 11.3334 12.492C11.3334 12.717 11.25 12.917 11.0917 13.0837C10.9334 13.2503 10.7334 13.3337 10.5084 13.3337ZM9.77504 10.2837C9.77504 9.90866 9.85837 9.58366 10.0167 9.31699C10.175 9.04199 10.4584 8.73366 10.85 8.38366C11.0834 8.17533 11.25 7.99199 11.3584 7.83366C11.4667 7.67533 11.5167 7.50033 11.5167 7.30033C11.5167 7.05866 11.425 6.85866 11.25 6.68366C11.075 6.51699 10.8334 6.43366 10.5417 6.43366C10.2334 6.43366 9.92504 6.51699 9.74171 6.68366C9.56671 6.85033 9.40837 7.05866 9.40837 7.50033H8.00004C8.00004 6.65866 8.38337 6.05866 8.80837 5.65866C9.27504 5.23366 9.87504 5.00033 10.5 5.00033C10.9917 5.00033 11.425 5.10033 11.8084 5.29199C12.1917 5.48366 12.4667 5.75033 12.6834 6.09199C12.9 6.43366 13 6.80866 13 7.21699C13 7.62533 12.9167 7.96699 12.7417 8.25866C12.5667 8.55033 12.3417 8.85033 12 9.16699C11.7334 9.41699 11.5584 9.63366 11.4584 9.80866C11.3584 9.98366 11.3084 10.217 11.3084 10.4837V10.8337H9.76671V10.2837H9.77504ZM15.5 8.50033C15.5 5.47533 13.2917 3.33366 10.5 3.33366C7.70837 3.33366 5.50004 5.47533 5.50004 8.50033C5.50004 10.4503 7.12504 13.0337 10.5 16.117C13.875 13.0337 15.5 10.4503 15.5 8.50033ZM10.5 1.66699C14 1.66699 17.1667 4.35033 17.1667 8.50033C17.1667 11.267 14.9417 14.542 10.5 18.3337C6.05837 14.542 3.83337 11.267 3.83337 8.50033C3.83337 4.35033 7.00004 1.66699 10.5 1.66699Z"
                                        fill="#B4B4B4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16496_1379">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>


                            <span class="dark:text-[#B4B4B4] text-[#505050]">How to Use Residential</span>
                        </RouterLink>
                    </li>
                    <li class="h-[48px] flex items-center cursor-pointer">
                        <RouterLink id="navlink"
                            class="navlink px-[24px] w-full py-3 flex items-center gap-[14px] text-[14px]"
                            to="/stickysessions">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_16496_1385)">
                                    <path
                                        d="M9.66663 15.0003H11.3333V13.3337H9.66663V15.0003ZM10.5 1.66699C5.89996 1.66699 2.16663 5.40033 2.16663 10.0003C2.16663 14.6003 5.89996 18.3337 10.5 18.3337C15.1 18.3337 18.8333 14.6003 18.8333 10.0003C18.8333 5.40033 15.1 1.66699 10.5 1.66699ZM10.5 16.667C6.82496 16.667 3.83329 13.6753 3.83329 10.0003C3.83329 6.32533 6.82496 3.33366 10.5 3.33366C14.175 3.33366 17.1666 6.32533 17.1666 10.0003C17.1666 13.6753 14.175 16.667 10.5 16.667ZM10.5 5.00033C8.65829 5.00033 7.16663 6.49199 7.16663 8.33366H8.83329C8.83329 7.41699 9.58329 6.66699 10.5 6.66699C11.4166 6.66699 12.1666 7.41699 12.1666 8.33366C12.1666 10.0003 9.66663 9.79199 9.66663 12.5003H11.3333C11.3333 10.6253 13.8333 10.417 13.8333 8.33366C13.8333 6.49199 12.3416 5.00033 10.5 5.00033Z"
                                        fill="#B4B4B4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_16496_1385">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span class="dark:text-[#B4B4B4] text-[#505050]">How to Use Sticky Sessions</span>
                        </RouterLink>
                    </li>
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="navlink ps-[24px] pe-[30px] w-full py-3 flex items-center justify-between text-[14px] gap-[2px]"
                            :class="$route.path === '/locationstate' || $route.path === '/locationcity' || $route.path === '/locationcountry' ? 'router-link-active' : ''">
                            <div class="flex items-center gap-[14px]">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_16496_1392)">
                                        <path
                                            d="M10.5 1.66699C7.27496 1.66699 4.66663 4.27533 4.66663 7.50033C4.66663 11.8753 10.5 18.3337 10.5 18.3337C10.5 18.3337 16.3333 11.8753 16.3333 7.50033C16.3333 4.27533 13.725 1.66699 10.5 1.66699ZM6.33329 7.50033C6.33329 5.20033 8.19996 3.33366 10.5 3.33366C12.8 3.33366 14.6666 5.20033 14.6666 7.50033C14.6666 9.90033 12.2666 13.492 10.5 15.7337C8.76663 13.5087 6.33329 9.87533 6.33329 7.50033Z"
                                            fill="#B4B4B4" />
                                        <path
                                            d="M10.5 9.58366C11.6506 9.58366 12.5833 8.65092 12.5833 7.50033C12.5833 6.34973 11.6506 5.41699 10.5 5.41699C9.34937 5.41699 8.41663 6.34973 8.41663 7.50033C8.41663 8.65092 9.34937 9.58366 10.5 9.58366Z"
                                            fill="#B4B4B4" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_16496_1392">
                                            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span class="dark:text-[#B4B4B4] text-[#505050]">Location Selection </span>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                :class="open && 'rotate-180 transform'">
                                <g id="chevron-down">
                                    <path id="Icon" d="M4 6L8 10L12 6"
                                        :stroke="$route.path === '/locationstate' || $route.path === '/locationcity' || $route.path === '/locationcountry' ? '#07B6BF' : '#475467'"
                                        stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </DisclosureButton>
                        <DisclosurePanel class="navlink py-[8px]"
                            :class="{ 'pl-[24px]': !isSidebarOpen, 'pl-[40px]': isSidebarOpen }">
                            <li class="h-[38px] flex items-center cursor-pointer">
                                <RouterLink id="navlink" class="navlink w-full flex items-center gap-[24px] text-[14px]"
                                    to="/locationcity">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_10229_37292)">
                                            <path
                                                d="M11.3335 5.00033V7.50033H13.8335V9.16699H11.3335V11.667H9.66683V9.16699H7.16683V7.50033H9.66683V5.00033H11.3335ZM15.5002 8.50033C15.5002 5.47533 13.2918 3.33366 10.5002 3.33366C7.7085 3.33366 5.50016 5.47533 5.50016 8.50033C5.50016 10.4503 7.12516 13.0337 10.5002 16.117C13.8752 13.0337 15.5002 10.4503 15.5002 8.50033ZM10.5002 1.66699C14.0002 1.66699 17.1668 4.35033 17.1668 8.50033C17.1668 11.267 14.9418 14.542 10.5002 18.3337C6.0585 14.542 3.8335 11.267 3.8335 8.50033C3.8335 4.35033 7.00016 1.66699 10.5002 1.66699Z"
                                                fill="#B4B4B4" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10229_37292">
                                                <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class="dark:text-[#B4B4B4] text-[#505050]">City</span>
                                </RouterLink>
                            </li>
                            <li class="h-[38px] flex items-center cursor-pointer">
                                <RouterLink id="navlink" class="navlink w-full flex items-center gap-[24px] text-[14px]"
                                    to="/locationstate">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_10229_37300)">
                                            <path
                                                d="M17.1668 0.833008V3.33301H19.6668V4.99967H17.1668V7.49967H15.5002V4.99967H13.0002V3.33301H15.5002V0.833008H17.1668ZM10.5002 10.833C9.5835 10.833 8.8335 10.083 8.8335 9.16634C8.8335 8.24967 9.5835 7.49967 10.5002 7.49967C11.4168 7.49967 12.1668 8.24967 12.1668 9.16634C12.1668 10.083 11.4168 10.833 10.5002 10.833ZM11.3335 2.54967V4.23301C11.0578 4.18945 10.7792 4.16716 10.5002 4.16634C7.7085 4.16634 5.50016 6.30801 5.50016 9.33301C5.50016 11.283 7.12516 13.8663 10.5002 16.9497C13.8752 13.8663 15.5002 11.2913 15.5002 9.33301V9.16634H17.1668V9.33301C17.1668 12.0997 14.9418 15.3747 10.5002 19.1663C6.0585 15.3747 3.8335 12.0997 3.8335 9.33301C3.8335 5.18301 7.00016 2.49967 10.5002 2.49967C10.7835 2.49967 11.0585 2.51634 11.3335 2.54967Z"
                                                fill="#B4B4B4" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10229_37300">
                                                <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class="dark:text-[#B4B4B4] text-[#505050]">State</span>
                                </RouterLink>
                            </li>
                            <li class="h-[38px] flex items-center cursor-pointer">
                                <RouterLink id="navlink" class="navlink w-full flex items-center gap-[24px] text-[14px]"
                                    to="/locationcountry">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_10229_37289)">
                                            <path
                                                d="M10.5002 10.0003C9.5835 10.0003 8.8335 9.25033 8.8335 8.33366C8.8335 7.41699 9.5835 6.66699 10.5002 6.66699C11.4168 6.66699 12.1668 7.41699 12.1668 8.33366C12.1668 9.25033 11.4168 10.0003 10.5002 10.0003ZM15.5002 8.50033C15.5002 5.47533 13.2918 3.33366 10.5002 3.33366C7.7085 3.33366 5.50016 5.47533 5.50016 8.50033C5.50016 10.4503 7.12516 13.0337 10.5002 16.117C13.8752 13.0337 15.5002 10.4503 15.5002 8.50033ZM10.5002 1.66699C14.0002 1.66699 17.1668 4.35033 17.1668 8.50033C17.1668 11.267 14.9418 14.542 10.5002 18.3337C6.0585 14.542 3.8335 11.267 3.8335 8.50033C3.8335 4.35033 7.00016 1.66699 10.5002 1.66699Z"
                                                fill="#B4B4B4" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10229_37289">
                                                <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class="dark:text-[#B4B4B4] text-[#505050]">Country</span>
                                </RouterLink>
                            </li>
                        </DisclosurePanel>
                    </Disclosure>
                </ul>
            </div>
        </div>
    </div>
</template>

