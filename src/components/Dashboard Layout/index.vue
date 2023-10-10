<script>
import Copyrights from '../../shared/Copyrights.vue';
import AppHeader from './AppHeader.vue';
import SideBarNav from './SideBarNav.vue';
export default {
    components: {
        SideBarNav,
        AppHeader,
        Copyrights
    },
    data() {
        return {
            isSidebarOpen: true,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            localStorage.setItem("sidebar", this.isSidebarOpen);
        },
    },
    mounted() {
        const sidebarCheck = localStorage.getItem("sidebar");
        if (sidebarCheck) {
            this.isSidebarOpen = sidebarCheck === 'true';
        }
    },
};
</script>


<template>
    <div class="flex w-100">
        <SideBarNav @toggleSidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen" />
        <div class="main" :class="{ 'w100': !isSidebarOpen }">
            <AppHeader @toggleSidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen" />
            <div
                class="pt-[15px]  pb-[36px] content bg-[#F6F7FB] dark:bg-[#0D0D0D] overflow-auto flex flex-col justify-between relative gap-[47px] pl-[17px] md:pr-[46px] pr-[17px]">
                <button @click="toggleSidebar" v-if="!isSidebarOpen" class="absolute left-0 top-[50px] lg:hidden">
                    <img src="../../assets/icons/sidebar-toogler.svg" alt="toogler" class="w-full rotate-[180deg]" />
                </button>
                <slot></slot>

                <Copyrights />
            </div>

        </div>
    </div>
</template>

<style scoped>
.main {
    width: calc(100vw - 279px);
}


.content {
    height: calc(100vh - 64px);

}

@media screen and (width>=1024px) {
    .main.w100 {
        width: calc(100vw - 80px) !important
    }
}

@media screen and (width<1024px) {
    .main.w100 {
        width: 100vw !important
    }

    .main {
        width: calc(100vw - 80px);
    }
}
</style>
