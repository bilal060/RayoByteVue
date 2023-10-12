<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashboard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";
import GetApproved from '../components/Dashboard Components/GetApproved.vue';

export default {

    components: {
        DashboardLayout,
        DashboardHeading,
        WhiteCard,
        Button,
        GetApproved
    },
    data() {
        return {
            approved: false,
        };
    },
    mounted() {
        let approvement = localStorage.getItem('approved');
        if (approvement !== null) {
            approvement === 'true' ? this.approved = true : this.approved = false;
        }
    },
    methods: {
        getApproved() {
            this.approved = true;
            localStorage.setItem('approved', this.approved)
        },
    },
};
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '../service/ProductService';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const products = ref();
const filter = ref();

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
</script>
<template>
    <DashboardLayout>
        <div>
            <DashboardHeading heading="Billing History Page" />
            <WhiteCard :customClass="'mt-[20px]'">
                <div class="flex flex-col justify-center items-center gap-[8px] px-[32px] sm:px-[97px] py-[32px]">
                    <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white text-center">
                        Welcome to your Billing History Page</p>
                    <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] text-center">On this page you can track
                        the billing history of your account. Both manually generated invoices and automatic invoices, which
                        are generated when auto-replenishment is enabled, are displayed displayed in the table below.
                    </p>
                </div>
            </WhiteCard>
            <GetApproved @getApproved="getApproved" :approved="approved" v-if="!approved" />
            <WhiteCard :customClass="'mt-[20px]'" v-else>
                <div
                    class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[18px] px-[24px] w-full flex items-center justify-between">
                    <div>
                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                            Invoices List
                        </p>
                        <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">
                            You can get your all billing history from here.
                        </p>
                    </div>
                    <div>
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                                <MenuButton
                                    class="text-[#707683] text-[12px] font-[400] leading-[18px] flex items-center gap-[9px]"
                                    :class="filter === 'unpaid' ? 'text-[#EE3889]' : 'text-[#07B6BF]'">
                                    Filter
                                    <svg width="7" height="3" viewBox="0 0 7 3" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 3L0.468911 -9.41288e-08L6.53109 4.35844e-07L3.5 3Z" fill="#B4B4B4" />
                                    </svg>

                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 md:right-auto md:left-0  top-5 z-10 w-max origin-top-right rounded-[8px] bg-white shadow-card dark:shadow-cardDark ring-1 ring-[#0000001f] dark:ring-[#343434] focus:outline-none ">
                                    <div class="rounded-[8px] dark:bg-[#0D0D0D] flex flex-col gap-[10px] px-[6px] py-[9px]">
                                        <p @click="filter = 'unpaid'"
                                            class=" cursor-pointer text-[#EE3889] dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] flex gap-[6px] items-center text-[12px] font-[500] leading-[18px]">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z"
                                                    fill="#EE3889" />
                                            </svg>

                                            Unpaid
                                        </p>
                                        <p @click="filter = 'paid'"
                                            class=" cursor-pointer text-[#07B6BF] dark:bg-[#0D0D0D] dark:text-[#b4b4b4b4] flex gap-[6px] items-center text-[12px] font-[500] leading-[18px]">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z"
                                                    fill="#07B6BF" />
                                            </svg>
                                            Paid
                                        </p>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
                <div class="px-[24px] py-[20px]">
                    <div class="rounded-8">
                        <DataTable :value="products" paginator :rows="10" tableStyle="min-width: 50rem; borderRadius:8px">
                            <Column field="ip" header="LIST OF YOUR IPS"
                                style="width: 280px; min-width: 280px; font-size: 11px;font-weight: 500;"
                                headerStyle="fontWeight:500; fontSize:10px; color:#555 ; background:#07b6bf12">
                            </Column>
                            <Column field="totalAmount" header="TOTAL AMOUNT"
                                headerStyle="width: 52px; fontWeight:500; fontSize:10px; color:#555; background:#07b6bf12"
                                style="color: #969696;font-size: 11px;font-weight: 500;"></Column>
                            <Column field="gbPurchased" header="GB PURCHASED"
                                headerStyle="width: 66px; fontWeight:500; fontSize:10px; color:#555; background:#07b6bf12"
                                style="color: #969696;font-size: 11px;font-weight: 500;"></Column>
                            <Column field="issuedAt" header="ISSUED AT"
                                headerStyle="width: 49px; fontWeight:500; fontSize:10px; color:#555; background:#07b6bf12"
                                style="color: #969696;font-size: 10px;font-weight: 500;"></Column>
                            <Column field="paidAt" header="PAID AT"
                                style="width: 49px; color: #969696;font-size: 10px;font-weight: 500;"
                                headerStyle="width: 20px; fontWeight:500; fontSize:10px; color:#555; background:#07b6bf12 ">
                            </Column>
                            <Column field="status" header="Status" style="font-size: 11px;font-weight: 500;color: #EE3889"
                                headerStyle="fontWeight:500; fontSize:10px; color:#555 ; background:#07b6bf12"></Column>

                            <Column field="pay" headerStyle="background:#07b6bf12">
                                <template #body="{ data }">
                                    <span
                                        class="bg-[#07B6BF] rounded-[4px] text-white flex items-center w-max justify-center px-[14px] text-[10px] font-[700] leading-[14px] h-[19px]">
                                        PAY</span>
                                </template>
                            </Column>
                            <Column field="void" headerStyle="background:#07b6bf12">
                                <template #body="{ data }">
                                    <span
                                        class="bg-[#EE3889] rounded-[4px] text-white flex items-center w-max justify-center px-[14px] text-[10px] font-[700] leading-[14px] h-[19px]">
                                        VOID</span>
                                </template>
                            </Column>
                            <Column field="download" headerStyle="background:#07b6bf12">
                                <template #body="{ data }">
                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 6.05859H10V0.0585938H4V6.05859H0L7 13.0586L14 6.05859ZM6 8.05859V2.05859H8V8.05859H9.17L7 10.2286L4.83 8.05859H6ZM0 15.0586H14V17.0586H0V15.0586Z"
                                            fill="#07B6BF" />
                                    </svg>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </WhiteCard>

        </div>
    </DashboardLayout>
</template>
