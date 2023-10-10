<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashbpard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";
import GetApproved from '../components/Dashbpard Components/GetApproved.vue';

export default {

    components: {
        DashboardLayout,
        DashboardHeading,
        WhiteCard,
        Button,
        GetApproved
    },
};
</script>

<template>
    <DashboardLayout>
        <div>
            <DashboardHeading heading="Billing History Page" />

            <WhiteCard :customClass="'mt-[20px]'">
                <div class="flex flex-col justify-center items-center gap-[8px] px-[97px] py-[32px]">
                    <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white text-center">
                        Welcome to your Billing History Page</p>
                    <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] text-center">On this page you can track
                        the billing history of your account. Both manually generated invoices and automatic invoices, which
                        are generated when auto-replenishment is enabled, are displayed displayed in the table below.
                    </p>
                </div>
            </WhiteCard>

            <GetApproved />

        </div>
    </DashboardLayout>
</template>