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
            <DashboardHeading heading="Proxy List Generator" />
            <GetApproved />


        </div>
    </DashboardLayout>
</template>