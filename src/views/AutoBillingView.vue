<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashboard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";
import GetApproved from '../components/Dashboard Components/GetApproved.vue';
const enabled = ref(false)

export default {

    components: {
        DashboardLayout,
        DashboardHeading,
        WhiteCard,
        Button,
        GetApproved,
    },
    data() {
        return {
            approved: '',
        };
    },
    mounted() {
        this.approved = localStorage.getItem('approved');
    },
};
</script>
<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
</script>

<template>
    <DashboardLayout>
        <div>
            <DashboardHeading heading="Auto Billing" />
            <WhiteCard :customClass="'mt-[20px]'">
                <div class="flex flex-col justify-center items-center gap-[8px] p-[20px]">
                    <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white text-center">
                        Welcome to our Auto Billing Page</p>
                    <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] text-center">
                        Never worry about your bandwidth balance running out with our auto-replenish system.
                    </p>
                </div>
            </WhiteCard>
            <GetApproved />
            <div class="flex min900:flex-row flex-col py-6 sm:py-[50px]  gap-[20px] justify-center"
                :class="approved ? '' : 'blur-[4px]'">
                <WhiteCard :customClass="'min900:w-1/2 bg-gray-100 flex flex-col items-center'">
                    <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[14px] px-[20px] w-full">
                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                            Auto Refill Setting
                        </p>
                    </div>
                    <div class="flex-1 flex flex-col px-[32px] py-[18px] w-full">
                        <div class="form-control mb-[25px]">
                            <label for="autorefil" class="font-[500] text-[12px] leading-[15px]">
                                <p class="text-[#505050] dark:text-white  mb-1">Auto refill when my bandwidth falls below
                                </p>
                                <p class="text-[#B4B4B4]">(must be 1 GB or higher)</p>
                            </label>
                            <div class="flex items-center gap-[10px] mt-[10px]">
                                <input type="number" name="autorefil" id="autorefil"
                                    class="form-input min900:w-auto w-full"><span>GB</span>
                            </div>
                        </div>
                        <div class="form-control mb-[25px]">
                            <label for="numofgb"
                                class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[15px] ">
                                Number of GB i would like to add to my account </label>
                            <div class="flex items-center gap-[10px] mt-[10px]">
                                <input type="number" name="numofgb" id="numofgb" class="form-input min900:w-auto w-full">
                                <span>GB</span>
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="paymentmethod"
                                class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[15px] ">
                                Select a payment method</label>
                            <div class="flex items-center gap-[10px] mt-[10px]">
                                <input type="number" name="paymentmethod" id="paymentmethod"
                                    class="form-input min900:w-auto w-full">
                                <span>GB</span>
                            </div>
                        </div>
                    </div>
                </WhiteCard>
                <WhiteCard :customClass="'min900:w-1/2 bg-gray-100 flex flex-col items-center'">
                    <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[14px] px-[20px] w-full">
                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                            Approve Charge
                        </p>
                        <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">This is the amount your account will
                            be billed when the bandwidth balance is running out</p>
                    </div>
                    <div class="flex-1 flex items-center flex-col text-center p-6 justify-center w-full">
                        <div
                            class=" text-[50px] leading-normal font-[700] flex flex-col items-center text-[#07B6BF] mb-[43px]">
                            <div><sup class=" top-[-1.2rem] right-[3px] text-[22px] leading-[30px] font-[500]">$</sup>
                                <span>20.00</span>
                            </div>
                            <div class="bg-[#b4b4b496] h-[3px] w-[90px] rounded-sm"></div>
                        </div>
                        <div class="flex ssm:items-center gap-[20px] justify-between ssm:flex-row flex-col">
                            <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                                Disable auto billing
                            </p>
                            <Switch v-model="enabled" :class="enabled ? 'bg-[#07B6BF]' : 'bg-[#B4B4B4]'"
                                class="relative inline-flex h-[28px] w-[54px] items-center rounded-full">
                                <span class="sr-only">Enable notifications</span>
                                <span :class="enabled ? 'translate-x-[26px]' : 'translate-x-[1px]'"
                                    class="inline-block h-[26px] w-[26px] transform rounded-full bg-white dark:bg-[#0D0D0D] transition" />
                            </Switch>
                            <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                                Enable auto billing
                            </p>
                        </div>
                    </div>
                </WhiteCard>
            </div>
            <div class="flex items-center bg-[#b4b4b40f] shadow-card dark:shadow-cardDark border-t-[4px] rounded-b-[8px] rounded-t-[4px] py-[18px] sm:px-[55px] px-[25px]"
                :class="enabled ? 'border-[#07B6BF]' : 'border-[#B4B4B4] dark:border-[#343434]', approved ? '' : 'blur-[4px]'">
                <div class="flex sm:items-center sm:gap-[40px] gap-[20px] xs:flex-row flex-col">
                    <svg class="w-[64px] h-[64px]" width="63" height="63" viewBox="0 0 63 63" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.11" width="63" height="63" rx="8"
                            :class="enabled ? 'fill-[#07B6BF]' : 'fill-[#B4B4B4]'" />
                        <mask id="mask0_10128_28969" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="18" y="19"
                            width="27" height="25">
                            <path
                                d="M31.4998 20.625V42.375C27.2707 42.375 24.1284 36.8408 24.1284 36.8408H20.6248C20.3044 36.8408 19.997 36.7135 19.7704 36.4869C19.5438 36.2603 19.4165 35.953 19.4165 35.6325V27.2769C19.4165 26.9564 19.5438 26.6491 19.7704 26.4225C19.997 26.1958 20.3044 26.0685 20.6248 26.0685H24.1284C24.1284 26.0685 27.2707 20.625 31.4998 20.625Z"
                                fill="white" stroke="white" stroke-width="2" stroke-linejoin="round" />
                            <path
                                d="M36.333 26.0625C36.7107 26.4 37.0518 26.7765 37.3504 27.1856C38.2636 28.4385 38.7537 29.9497 38.7497 31.5C38.7497 33.1035 38.2385 34.5855 37.3734 35.7835C37.0692 36.2045 36.7203 36.5914 36.333 36.9375"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M37.6841 41.8829C41.2172 39.7744 43.5832 35.9131 43.5832 31.4997C43.5832 27.1545 41.2897 23.3459 37.8478 21.2168"
                                stroke="white" stroke-width="2" stroke-linecap="round" />
                        </mask>
                        <g mask="url(#mask0_10128_28969)">
                            <path d="M17 17H46V46H17V17Z" :class="enabled ? 'fill-[#07B6BF]' : 'fill-[#B4B4B4]'" />
                        </g>
                    </svg>
                    <p v-if="!enabled" class="text-[#505050] dark:text-white font-[400] text-[16px] leading-[24px] w-[70%]">
                        Approve the setting and billing</p>
                    <p v-else class="text-[#505050] dark:text-white font-[400] text-[16px] leading-[24px] w-[70%]">With the
                        settings we showed here, we will charge <b>$20</b> straight away and auto refill the same amount
                        every time your balance falls bellow <b>1GB</b>.</p>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>