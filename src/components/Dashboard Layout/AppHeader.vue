<script>
import DropDown from '../../shared/DropDown.vue';
import Button from '../../shared/Button.vue';
import ThemeToggle from '../Dashboard Components/ThemeToggle.vue';
import SearchHeader from '../Dashboard Components/SearchHeader.vue'
export default {
    components: { DropDown },
    data() {
        return {
            requestBiggerTrial: false,
        };
    },
    mounted() {
        this.requestBiggerTrial = localStorage.getItem('requestBiggerTrial');
        if (this.requestBiggerTrial === null) {
            this.requestBiggerTrial = false;
        }
        // this.approved = localStorage.getItem('approved');
        // if (this.approved === null) {
        //     this.approved = false;
        // }
    },
    methods: {
        RequestBiggerTrial() {
            localStorage.setItem("requestBiggerTrial", true)
            this.requestBiggerTrial = true;
        }
    }
};

</script>

<script setup>
import { MenuItem } from '@headlessui/vue'
import { ref } from "vue";
import Dialog from 'primevue/dialog';
const visible = ref(false);
</script>

<template>
    <header
        class="h-[64px] w-100 pl-[20px] pr-[20px] xs:pr-[45px] sm:pr-[70px] py-3 flex justify-between items-center dark:bg-[#282828] dark:shadow-headerDark gap-[21px] shadow-header sticky z-[1]">

        <SearchHeader />

        <Dialog v-model:visible="visible" modal :showHeader="false"
            contentClass="rounded-[8px] flex flex-col justify-center items-center gap-[24px] dark:bg-[#0D0D0D]"
            class="relative" :style="{ width: '487px' }" :breakpoints="{ '960px': '500px', '641px': '400px' }">
            <img src="../../assets/icons/modalClose.svg" alt="close" class="absolute right-[7px] top-[8px] cursor-pointer"
                @click="visible = false">
            <h3 class=" mt-[28px] text-center dark:text-white text-[#282828] text-[25px] leading-normal font-[600]">Error!
            </h3>
            <p class="text-center text-[#505050] text-[15px] leading-[22px] font-[400] inline">
                Account does not exist. If you purchased datacenter or ISP proxies, please try logging into your dashboard
                <RouterLink to="/" class="underline underline-offset-2">here</RouterLink>. You may also reach our support
                team at <a href="mailto:support@rayobyte.com" class="underline underline-offset-2">support@rayobyte.com</a>.
                Thank you.
            </p>
            <Button @click="visible = false"
                :customClass="'mt-[17px] flex py-[12px] px-[20px] rounded-[4px] items-center justify-center text-white bg-[#07B6BF] w-full text-[15px] font-[600] h-[43px] max-w-[170px]'">
                Ok
            </Button>
        </Dialog>

        <Button v-if="requestBiggerTrial === false" @click="RequestBiggerTrial"
            :customClass="'hidden md:flex py-[8px] px-[16px] rounded-[4px] items-center justify-center text-white bg-[#07B6BF] w-full text-[15px] font-[600] h-[30px] max-w-[209px]'">Request
            bigger trial
        </Button>


        <div v-else class="hidden md:flex flex-col items-center">
            <p class="text-[14px] font-[600] leading-[24px] text-[#192A3E] dark:text-white">100GB</p>
            <p class="text-[12px] font-[500] leading-[18px] text-[#B4B4B4]">Available Bandwidth</p>

        </div>

        <div class="flex items-center gap-[21px]">
            <ThemeToggle />
            <div class="flex items-center gap-3 text-[16px] text-gray-700 font-semibold">
                <div class="xl:flex flex-col hidden">
                    <span class="font-[500] text-[14px] leading-[24px] text-[#192A3E] dark:text-white">Full Name (User
                        Name)</span>
                    <span class="font-[500] text-[12px] leading-[18px] text-[#B4B4B4]">LoremIpsum@gmail.com</span>
                </div>
                <DropDown>
                    <template v-slot:dropbutton class="relative">
                        <img src="../../assets/icons/avatar.svg" class="img-fluid rounded-top" alt="avatar" />
                        <img src="../../assets/icons/chevron-downIcon.svg" class="absolute -right-2 bottom-0"
                            alt="avatar" />
                    </template>
                    <template v-slot:dropmenu>
                        <MenuItem v-slot="{ active }">
                        <RouterLink to="/profile"
                            :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm pt-[25px]']">
                            My
                            Profile</RouterLink>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <RouterLink to="/billinghistory"
                            :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm']">
                            Billing
                            History</RouterLink>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <RouterLink to="/contactus"
                            :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm']">
                            Contact
                            Us</RouterLink>
                        </MenuItem>
                        <div class="xl:hidden block">
                            <MenuItem v-slot="{ active }">
                            <a
                                :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm']">Full
                                Name (User Name)</a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a
                                :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm']">LoremIpsum@gmail.com</a>
                            </MenuItem>
                        </div>
                        <div class="md:hidden block">
                            <MenuItem v-slot="{ active }">
                            <a v-if="requestBiggerTrial === false" @click="RequestBiggerTrial"
                                :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm cursor-pointer']">Request
                                bigger trial</a>
                            <a v-else
                                :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm ']">
                                Available Bandwidth: 100GB </a>
                            </MenuItem>
                        </div>

                        <MenuItem v-slot="{ active }" class="mt-[13px]">
                        <RouterLink to="/"
                            :class="[active ? 'text-[#07B6BF]' : 'text-[#07B6BF]', 'bg-[#F6F7FB] dark:text-[#07B6BF] block px-[28px] py-[13px] text-sm']"
                            class="flex gap-[13px] rounded-b-[8px]">
                            <img src="../../assets/icons/logoutIcon.svg" alt="">
                            Log out
                        </RouterLink>
                        </MenuItem>
                    </template>
                </DropDown>
            </div>
        </div>


    </header>
</template>
