<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashboard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";
import GetApproved from '../components/Dashboard Components/GetApproved.vue';
import ProxyListGenerator from '../components/Dashboard Components/ProxyListGenerator.vue';
import ProxiesFormatSetting from '../components/Dashboard Components/ProxiesFormatSetting.vue';

export default {

    components: {
        DashboardLayout,
        DashboardHeading,
        WhiteCard,
        Button,
        GetApproved,
        ProxyListGenerator,
        ProxiesFormatSetting
    },
};
</script>

<template>
    <DashboardLayout>
        <div>
            <DashboardHeading heading="Proxy List Generator" />
            <GetApproved />
            <ProxyListGenerator />
            <ProxiesFormatSetting />
        </div>
    </DashboardLayout>
</template>