<script>
import Button from "../../shared/Button.vue";
export default {
    components: {
        Button,
    },
    data() {
        return {
            resetPassword: false,

        };
    },
    methods: {
        submitLoginInfoForm() {
            this.resetPassword = false;
        },
    }
};
</script>

<script setup>
import { ref } from "vue";
import Calendar from 'primevue/calendar';

const date = ref();
const resetPasswordDate = ref();

</script>

<template>
    <div class="mt-[30px]">
        <form @submit.prevent="submitLoginInfoForm" v-if="!resetPassword">
            <p class="font-[400] text-[14px] leading-[20px] capitalize mb-[4px] text-[#505050] dark:text-white">
                Log in information
            </p>
            <div class="flex sm:flex-row flex-col items-center gap-x-[24px] gap-y-[12px] mb-[32px] flex-wrap">
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="Username"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Username
                    </label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Username" id="Username">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="Password"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">Password</label>
                    <input type="password"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Password" id="Password">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="DateofBirth"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Date of Birth</label>
                    <div class="card flex justify-content-center">
                        <Calendar v-model="date" inputId="birth_date" class="w-full"
                            inputClass="bg- shadown-none dark:bg-[#282828] border-[#E5E5E5] form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]" />
                    </div>
                </div>
            </div>
            <Button :attributes="{ type: 'submit' }"
                :customClass="' flex py-[12px] px-[20px] rounded-[4px] items-center justify-center text-white border-2 border-[#07B6BF] bg-black text-[15px] font-[600] h-[48px] md:max-w-[148px] w-full'">
                Save Changes
            </Button>
        </form>
        <form @submit.prevent="submitLoginInfoForm" v-else>
            <p class="font-[400] text-[14px] leading-[20px] capitalize mb-[4px] text-[#505050] dark:text-white">
                Log in information
            </p>
            <div class="flex sm:flex-row flex-col items-center gap-x-[24px] gap-y-[12px] mb-[32px] flex-wrap">
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="ProxyUsername"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Username<span class="text-[#EE3889]">*</span></label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Username" id="ProxyUsername" required>
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="ProxyPassword"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Old Password<span class="text-[#EE3889]">*</span></label>
                    <input type="password"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Old Password" id="ProxyPassword" required>
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="ProxyNewPassword"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        New Password<span class="text-[#EE3889]">*</span></label>
                    <input type="password"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="New Password" id="ProxyNewPassword" required>
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="ConfirmNewPassword"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Confirm Password<span class="text-[#EE3889]">*</span></label>
                    <input type="password"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Confirm Password" id="ConfirmNewPassword" required>
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="DateofBirth"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Date of Birth<span class="text-[#EE3889]">*</span></label>
                    <div class="card flex justify-content-center">
                        <Calendar v-model="resetPasswordDate" inputId="birth_date" class="w-full"
                            inputClass="bg- shadown-none dark:bg-[#282828] border-[#E5E5E5] form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]" />
                    </div>
                </div>
            </div>
            <Button :attributes="{ type: 'submit' }"
                :customClass="' flex py-[12px] px-[20px] rounded-[4px] items-center justify-center text-white border-2 border-[#07B6BF] bg-[#07B6BF] text-[15px] font-[600] h-[48px] md:max-w-[148px] w-full'">
                Save Changes
            </Button>
        </form>
        <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] mt-[10px]">
            Need to reset your Password? <span class="text-[#07B6BF] cursor-pointer" @click="resetPassword = true">Click
                here.</span>
        </p>
    </div>
</template>