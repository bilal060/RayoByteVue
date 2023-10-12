<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashboard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";
import GetApproved from '../components/Dashboard Components/GetApproved.vue';
import ProxySetting from '../components/Dashboard Components/ProxySetting.vue';
import AddressandAccountSetting from '../components/Dashboard Components/AddressandAccountSetting.vue';
import LoginInfoSetting from '../components/Dashboard Components/LoginInfoSetting.vue';


export default {

    components: {
        DashboardLayout,
        DashboardHeading,
        WhiteCard,
        Button,
        GetApproved,
        ProxySetting,
        AddressandAccountSetting,
        LoginInfoSetting
    },
};
</script>

<template>
    <DashboardLayout>
        <div>
            <DashboardHeading heading="Profile" />
            <GetApproved />
            <WhiteCard :customClass="'flex flex-col items-start mt-[21px]'">
                <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[29px] pb-[24px] px-[24px] w-full">
                    <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                        Profile Settings
                    </p>
                </div>
                <div class="p-[24px] w-full">
                    <AddressandAccountSetting />
                    <LoginInfoSetting />
                </div>
            </WhiteCard>

            <ProxySetting />


        </div>
    </DashboardLayout>
</template>