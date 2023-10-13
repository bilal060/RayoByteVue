<script>
import WhiteCard from '../../shared/WhiteCard.vue';
import Button from "../../shared/Button.vue";

export default {
    components: {
        WhiteCard,
        Button,
    },
    data() {
        return {
            resetProxy: false,
        };
    },
    methods: {
        submitProxyResetForm() {
            this.resetProxy = false;
        },
        submitLoginInfoForm() {
            this.resetProxy = false;
        },
    }
};
</script>
<template>
    <WhiteCard :customClass="'flex flex-col items-start mt-[21px]'">
        <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[18px] px-[24px] w-full">
            <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                Proxy setting
            </p>
            <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">
                You can edit your Proxy Userrname and Password here.
            </p>
        </div>
        <div class="p-[24px] w-full">
            <form @submit.prevent="submitLoginInfoForm" v-if="!resetProxy">
                <p class="font-[400] text-[14px] leading-[20px] capitalize mb-[8px] text-[#505050] dark:text-white">
                    proxy Log in information </p>
                <div class="flex sm:flex-row flex-col items-center gap-x-[24px] gap-y-[12px] mb-[32px] flex-wrap">
                    <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                        <label for="ProxyUsername"
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                            Proxy Username</label>
                        <input type="text"
                            class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                            placeholder="Proxy Username" id="ProxyUsername" required>
                    </div>
                    <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                        <label for="ProxyPassword"
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                            Proxy Password</label>
                        <input type="password"
                            class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                            placeholder="Proxy Password" id="ProxyPassword" required>
                    </div>
                </div>
                <Button
                    :customClass="' flex py-[12px] px-[20px] rounded-[4px] items-center justify-center text-white border-2 border-[#07B6BF] bg-black text-[15px] font-[600] h-[48px] md:max-w-[148px] w-full'">
                    Save Changes
                </Button>
            </form>
            <form @submit.prevent="submitProxyResetForm" v-else>
                <p class="font-[400] text-[14px] leading-[20px] capitalize mb-[8px] text-[#505050] dark:text-white">
                    proxy Log in information </p>
                <div class="flex sm:flex-row flex-col items-center gap-x-[24px] gap-y-[12px] mb-[32px] flex-wrap">
                    <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                        <label for="ProxyUsername"
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                            Proxy Username<span class="text-[#EE3889]">*</span></label>
                        <input type="text"
                            class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                            placeholder="Proxy Username" id="ProxyUsername" required>
                    </div>
                    <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                        <label for="ProxyPassword"
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                            Old Proxy Password<span class="text-[#EE3889]">*</span></label>
                        <input type="password"
                            class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                            placeholder="Old Proxy Password" id="ProxyPassword" required>
                    </div>
                    <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                        <label for="ProxyNewPassword"
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                            New Proxy Password<span class="text-[#EE3889]">*</span></label>
                        <input type="password"
                            class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                            placeholder="New Password" id="ProxyNewPassword" required>
                    </div>
                    <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                        <label for="ConfirmNewPassword"
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                            Confirm New Password<span class="text-[#EE3889]">*</span></label>
                        <input type="password"
                            class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                            placeholder="Confirm Password" id="ConfirmNewPassword" required>
                    </div>
                </div>
                <Button :attributes="{ type: 'submit' }"
                    :customClass="' flex py-[12px] px-[20px] rounded-[4px] items-center justify-center text-white border-2 border-[#07B6BF] bg-[#07B6BF] text-[15px] font-[600] h-[48px] md:max-w-[148px] w-full'">
                    Save Changes
                </Button>
            </form>
            <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] mt-[10px]">
                Need to reset your Proxy Password? <span class="text-[#07B6BF] cursor-pointer"
                    @click="resetProxy = true">Click here.</span>
            </p>
        </div>

    </WhiteCard>
</template>