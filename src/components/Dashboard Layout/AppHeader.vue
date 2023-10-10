<script>
import DropDown from '../../shared/DropDown.vue';
import Button from '../../shared/Button.vue';
import ThemeToggle from '../Dashbpard Components/ThemeToggle.vue';
import SearchHeader from '../Dashbpard Components/SearchHeader.vue'
export default {
    components: { DropDown }
};

</script>

<script setup>
import { MenuItem } from '@headlessui/vue'
</script>

<template>
    <header
        class="h-[64px] w-100 pl-[20px] pr-[20px] xs:pr-[45px] sm:pr-[70px] py-3 flex justify-between items-center dark:bg-[#0D0D0D] dark:shadow-headerDark gap-[21px] shadow-header sticky z-[1]">

        <SearchHeader />


        <Button v-if="$route.path === '/dashboard'"
            :customClass="'hidden md:flex py-[8px] px-[16px] rounded-[4px] items-center justify-center text-white bg-[#07B6BF] w-full text-[15px] font-[600] h-[30px] max-w-[209px]'">Request
            bigger trial
        </Button>
        <div v-else class="hidden md:flex flex-col items-center">
            <p class="text-[14px] font-[600] leading-[24px] text-[#192A3E]">100GB</p>
            <p class="text-[12px] font-[500] leading-[18px] text-[#B4B4B4]">Available Bandwidth</p>

        </div>

        <div class="flex items-center gap-[21px]">
            <ThemeToggle />
            <div class="flex items-center gap-3 text-[16px] text-gray-700 font-semibold">
                <div class="xl:flex flex-col hidden">
                    <span class="font-[500] text-[14px] leading-[24px] text-[#192A3E]">Full Name (User Name)</span>
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
                            <a v-if="$route.path === '/dashboard'"
                                :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm']">Request
                                bigger trial</a>
                            <a v-else
                                :class="[active ? 'text-gray-900' : 'text-black', 'dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] block px-[28px] py-3 text-sm']">
                                Available Bandwidth: 100GB </a>
                            </MenuItem>
                        </div>

                        <MenuItem v-slot="{ active }" class="mt-[13px]">
                        <RouterLink to="/"
                            :class="[active ? 'text-[#07B6BF]' : 'text-[#07B6BF]', 'bg-[#F6F7FB] dark:text-[#b4b4b4b4] block px-[28px] py-[13px] text-sm']"
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
