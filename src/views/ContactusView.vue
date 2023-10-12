<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashboard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";

export default {

    components: {
        DashboardLayout,
        DashboardHeading,
        WhiteCard,
        Button,
    },
};
</script>

<template>
    <DashboardLayout>
        <div>
            <DashboardHeading heading="Contact Us" />

            <WhiteCard :customClass="'mt-[20px]'">
                <div class="flex flex-col justify-center items-center gap-[15px] pt-[28px] pb-[31px] px-[20px]">
                    <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white text-center">
                        Welcome to the Rayobyte Dashboard</p>
                    <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] text-center sm:w-3/4">Hi, my name is
                        Lauren and I
                        am the Product Owner of our residential proxy product line. I am responsible to making sure you have
                        the best customer experience possible. I encourage you to use the appropriate form or emails below
                        to get the best service possible, but if you have any other concerns or questions, please feel
                        encouraged to grab a spot on my calendar to chat more: [link]
                    </p>
                </div>
            </WhiteCard>

            <WhiteCard :customClass="'mt-[20px]'">
                <div class="border-b border-[#EBEFF2] dark:border-[#343434] py-[17px] px-[24px] ">
                    <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white mb-[3px]">
                        Contact Us
                    </p>
                    <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] sm:w-3/5">
                        We're here to help! If you have any questions, please don't hesitate to contact us.
                    </p>
                </div>

                <div
                    class="flex sm:flex-row flex-col py-6 sm:py-[50px] xl:px-[111px] lg:px-[60px] md:px-[40px] px-[20px] xl:gap-[111px] lg:gap-[60px] md:gap-[40px] gap-[20px] justify-center">
                    <WhiteCard :customClass="'sm:w-1/2 p-6 bg-gray-100 flex flex-col items-center md:max-w-[370px]'">
                        <div class="flex-1 flex items-center flex-col text-center">
                            <img src="../assets/icons/salesTeamIcon.svg" alt="salesTeamIcon">
                            <h2
                                class="mb-[25px] mt-[20px] text-[22px] leading-[30px] font-[800] text-[#505050] dark:text-white">
                                Talk to
                                a
                                member of our sales team</h2>
                            <p class="mb-[40px] text-[#B4B4B4] font-[500] text-[11px] leading-[18px] flex-1">We’ll help you
                                find
                                the
                                right products and pricing for your business</p>
                        </div>
                        <Button
                            :customClass="' flex py-[8px] px-[16px] rounded-[4px] items-center justify-center text-white bg-[#07B6BF] text-[15px] font-[600] sm:h-[40px] md:max-w-[242px] w-full'">
                            Contact Sales
                        </Button>
                    </WhiteCard>
                    <WhiteCard :customClass="'sm:w-1/2 p-6 bg-gray-100 flex flex-col items-center md:max-w-[370px]'">
                        <div class="flex-1 flex items-center flex-col text-center">
                            <img src="../assets/icons/customersupportIcon.svg" alt="customersupportIcon">
                            <h2
                                class="mb-[25px] mt-[20px] text-[22px] leading-[30px] font-[800] text-[#505050] dark:text-white">
                                Contact
                                customer support
                            </h2>
                            <p class="mb-[40px] text-[#B4B4B4] font-[500] text-[11px] leading-[18px] flex-1">
                                We're here to assist you! If you have any concerns or need help with orders, goods, or other
                                customer-related issues, get in touch with our support team.
                            </p>
                        </div>
                        <Button
                            :customClass="' flex py-[8px] px-[16px] rounded-[4px] items-center justify-center text-white bg-[#07B6BF] text-[15px] font-[600] sm:h-[40px] md:max-w-[242px] w-full'">
                            Contact Support
                        </Button>
                    </WhiteCard>
                </div>
            </WhiteCard>
        </div>
    </DashboardLayout>
</template>