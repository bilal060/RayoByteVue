<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashbpard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";
import GetApproved from '../components/Dashbpard Components/GetApproved.vue';
import ProxyListGenerator from '../components/Dashbpard Components/ProxyListGenerator.vue';
import ProxiesFormatSetting from '../components/Dashbpard Components/ProxiesFormatSetting.vue';

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
<script setup>
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { ref } from 'vue'

const noOfIp = [
    { name: '10' },
    { name: '20' },
    { name: '30' },
    { name: '40' },
]

const format = [
    { name: 'username:password@hostname:port' },
    { name: 'username:password@hostname:port' },
    { name: 'username:password@hostname:port' },
    { name: 'username:password@hostname:port' },
]

const selectedNoOfIP = ref(noOfIp[0].name);
const selectedFormat = ref(format[0].name);

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