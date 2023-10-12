<script>
import WhiteCard from '../../shared/WhiteCard.vue';
import Button from "../../shared/Button.vue";

export default {
    components: {
        WhiteCard,
        Button,
    },
    methods: {
        getApproved() {
            this.$emit('getApproved', this.approved);
        },
    },
    props: {
        approved: Boolean,
    },
};
</script>

<template>
    <div v-if="!approved">
        <transition leave-active-class="transition duration-300 ease-in" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <WhiteCard :customClass="'mt-[20px]'">
                <div
                    class=" py-[17px] px-[24px] flex justify-between items-center gap-[50px] md:gap-[70px] lg:gap-[84px] md:flex-row flex-col border-t-4 border-[#d58b3661] rounded-b-[8px] rounded-t-[4px]">
                    <div
                        class="flex xs:flex-row flex-col justify-between items-start md:items-center gap-[20px] sm:gap-[34px]">
                        <img src="../../assets/icons/dashboardAlert.svg" alt="">
                        <div>
                            <p class="text-[#505050] font-[700] text-[14px] leading-[20px] mb-[8px] dark:text-white">Get
                                Approved To
                                Purchased</p>
                            <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">Before anyone uses our
                                residential proxies,
                                we
                                make sure we’re dealing with a legitimate user who has been thoroughly vetted and approved
                                by our sales
                                and
                                support teams. The user MUST be using proxies for one of our verified use cases. Questions?
                                Contact
                                <span class="text-[#07B6BF]">sales@rayobyte.com</span>
                            </p>
                        </div>
                    </div>

                    <Button @click="getApproved()"
                        :customClass="'flex py-[7px] px-[16px] rounded-[4px] items-center justify-center text-white transition-all hover:bg-black border-2 border-[#07B6BF] bg-[#07B6BF] text-[15px] font-[600] sm:h-[40px] max-w-[148px] w-full'">
                        Get approved
                    </Button>
                </div>
            </WhiteCard>
        </transition>
    </div>
</template>