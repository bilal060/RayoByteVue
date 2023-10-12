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
            approved: '',
        };
    },
    mounted() {
        this.approved = localStorage.getItem('approved');
    },
};
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '../service/ProductService';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

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

            <WhiteCard :customClass="'mt-[20px]'">
                <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[18px] px-[24px] w-full">
                    <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                        Invoices List
                    </p>
                    <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">
                        You can get your all billing history from here.
                    </p>
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
                    <!-- <Paginator :rows="5" :totalRecords="products?.length" v-model:products="products" ></Paginator> -->
                </div>
            </WhiteCard>

        </div>
    </DashboardLayout>
</template>
