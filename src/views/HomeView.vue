<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashbpard Components/DashboardHeading.vue'
import LineChart from '../components/Dashbpard Components/LineChart.vue';
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";
import SelectVue from "../shared/SelectVue.vue";
import GetApproved from '../components/Dashbpard Components/GetApproved.vue';

const people = [
  { name: '30 days' },
  { name: '15 days' },
  { name: '7 days' },
  { name: '3 days' },

]
const enabled = ref(false)
export default {

  components: {
    DashboardLayout,
    DashboardHeading,
    LineChart,
    WhiteCard,
    Button,
    SelectVue,
    GetApproved
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
      <DashboardHeading heading="Dashboard" />

      <GetApproved />
      <WhiteCard :customClass="'mt-[20px]'">
        <div
          class="border-b border-[#EBEFF2] dark:border-[#343434] py-[17px] px-[24px] flex justify-between md:items-center md:flex-row flex-col gap-5">
          <div>
            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white">Proxy Credentials</p>
            <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">Choose your preferred credential type</p>
          </div>

          <div class="flex ssm:items-center gap-[20px] justify-between ssm:flex-row flex-col">
            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white cursor-pointer"
              @click="enabled = false">
              Username:Password</p>
            <Switch v-model="enabled" :class="enabled ? 'bg-[#07B6BF]' : 'bg-[#B4B4B4]'"
              class="relative inline-flex h-[28px] w-[54px] items-center rounded-full">
              <span class="sr-only">Enable notifications</span>
              <span :class="enabled ? 'translate-x-[27px]' : 'translate-x-[1px]'"
                class="inline-block h-[26px] w-[26px] transform rounded-full bg-white dark:bg-[#0D0D0D] transition" />
            </Switch>
            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white cursor-pointer"
              @click="enabled = true">IP
              Authorization</p>
          </div>
        </div>
        <div
          class="pt-[37px] px-[24px] md:pr-[171px] pb-[54px] ssm:pl-[48px] flex justify-between md:items-center md:flex-row flex-col gap-[22px] md:gap-[100px] lg:gap-[150px] xl:gap-[236px]">
          <div class="flex flex-col gap-[22px]">
            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white break-words">Proxy server <span
                class="text-[#B4B4B4] font-[400]">: la.residential.ipauth.rayobyte.com</span></p>

            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white">Proxy port <span
                class="text-[#B4B4B4] font-[400]">: 8000</span></p>

          </div>
          <div class="flex flex-col gap-[22px]">
            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white break-words">Proxy username
              <span class="text-[#B4B4B4] font-[400]">: Lorem_Ipsum_Lorem_Ipsum</span>
            </p>

            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white">Proxy password <span
                class="text-[#B4B4B4] font-[400]">: 1234567890</span></p>

          </div>
        </div>
      </WhiteCard>
      <WhiteCard :customClass="'mt-[20px]'">
        <div
          class="border-b border-[#EBEFF2] dark:border-[#343434] py-[17px] px-[24px] flex justify-between items-center">
          <div>
            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white">Bandwidth Consumed</p>
            <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">for the last 15 days [MB]</p>
          </div>

          <div class="flex justify-between items-center gap-1">

            <span class="text-[#B4B4B4] font-[500] text-[12px] leading-[18px]">Show:</span>
            <SelectVue :option=people
              :customClass="'relative w-full cursor-default border-none outline-none text-[#07B6BF] bg-transparent font-[500] text-[12px] leading-[18px] flex items-center gap-2'" />
          </div>
        </div>
        <div class="pt-[17px] pb-[32px] flex flex-col sm:gap-[30px] md:gap-[50px]">
          <div class="ml-2 mr-4 md:mx-2">
            <LineChart />
          </div>
          <div class="mx-[24px]">
            <Button
              :customClass="' flex py-[8px] px-[16px] rounded-[4px] items-center justify-center text-white bg-[#07B6BF] w-full text-[15px] font-[600] sm:h-[40px] md:max-w-[291px]'">
              Download Traffic usage (csv)
            </Button>
          </div>
        </div>
      </WhiteCard>
    </div>
</DashboardLayout></template>