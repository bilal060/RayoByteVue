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
};
</script>

<template>
    <DashboardLayout>
        <div>
            <DashboardHeading heading="Purchase Bandwidth" />
            <GetApproved />
            <WhiteCard :customClass="'flex flex-col items-center mt-[21px]'">
                <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[14px] px-[24px] w-full">
                    <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                        Pricing Calculator
                    </p>
                    <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">
                        Please enter the number of GB you would like to purchase (whole numbers only).
                    </p>
                </div>
                <div
                    class="flex lg:flex-row flex-col xl:items-start pt-[29px] sm:pt-[39px] px-[24px] sm:px-[48px] pb-[29px] w-full justify-between gap-[30px] xl:gap-[68px]">
                    <div>
                        <div class="hidden ssm:flex justify-start items-start gap-[29px]">
                            <div class="flex flex-col gap-[40px] ">
                                <p class="text-[#282828] dark:text-white font-[700] text-[16px] leading-[30px] w-[120px]">
                                    Proxy
                                    Type:</p>
                                <p class="text-[#282828] dark:text-white font-[700] text-[16px] leading-[30px] w-[120px]">
                                    Bandwidth:</p>
                                <p class="text-[#282828] dark:text-white font-[700] text-[16px] leading-[30px] w-[120px]">
                                    Pricing
                                    Plans:
                                </p>
                            </div>
                            <div class="flex flex-col gap-[40px]">
                                <p class="text-[#07B6BF] font-[700] text-[14px] leading-[30px]">Residential Proxies</p>
                                <div class="form-control">
                                    <div class="flex items-center gap-[10px]">
                                        <input type="number" name="numofgb" id="numofgb"
                                            class="h-[40px] px-[12px] py-[10px] border border-[#D0D0D0] w-[89px] rounded-[8px] ">
                                        <span class="font-[700] text-[14px] leading-[23px] text-black">GB</span>
                                    </div>
                                </div>
                                <div class="flex items-center flex-wrap gap-[41px]">
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Starter:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 to 15
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Personal: :
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">16 to 49
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$12/50/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Consumer::
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">50 to 99
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$7/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Professional::
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">100 to 249
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$6/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Business::
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">250 to 499
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$5/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Business:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">500 to 999
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$4/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Enterprise:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 TB - 4.9 TB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="ssm:hidden">
                            <div class="flex flex-col justify-start gap-[8px] mb-[20px]">
                                <p class="text-[#282828] dark:text-white font-[700] text-[16px] leading-[30px] w-[120px]">
                                    Proxy
                                    Type:</p>
                                <p class="text-[#07B6BF] font-[700] text-[14px] leading-[20px]">Residential Proxies</p>
                            </div>
                            <div class="flex flex-col justify-start gap-[8px] mb-[20px]">
                                <p class="text-[#282828] dark:text-white font-[700] text-[16px] leading-[30px] w-[120px]">
                                    Bandwidth:</p>
                                <div class="form-control">
                                    <div class="flex items-center gap-[10px]">
                                        <input type="number" name="numofgb" id="numofgb"
                                            class="h-[40px] px-[12px] py-[10px] border border-[#D0D0D0] w-[89px] rounded-[8px] ">
                                        <span class="font-[700] text-[14px] leading-[23px] text-black">GB</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col justify-start gap-[8px]">
                                <p class="text-[#282828] dark:text-white font-[700] text-[16px] leading-[30px]">
                                    Pricing
                                    Plans:
                                </p>
                                <div class="flex items-center flex-wrap gap-[21px] xs:gap-[41px] w-full">
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Starter:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 to 15
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Starter:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 to 15
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Starter:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 to 15
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Starter:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 to 15
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Starter:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 to 15
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Starter:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 to 15
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[23px]">
                                            Starter:
                                        </p>
                                        <p class="text-[#505050b3] font-[700] text-[14px] leading-[23px]">1 to 15
                                            GB</p>
                                        <p class="text-[#505050b3] font-[500] text-[14px] leading-[23px] italic">$15/GB
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <WhiteCard
                        :customClass="'flex flex-col items-center rounded-[8px] px-[24px] py-[28px] w-full max-w-[354px] h-max'">
                        <div class="flex flex-col  gap-[12px] w-full mb-[31px]">
                            <p class="text-[#505050] mb-[8px] dark:text-white font-[500] text-[14px] leading-[20px]">Your
                                Order
                            </p>
                            <div
                                class="w-full flex xs:flex-row flex-col justify-between xs:items-center font-[400] text-[14px] leading-[20px]">
                                <p class="text-[#B4B4B4]">Package type</p>
                                <p class="text-[#282828] dark:text-white">Residential</p>
                            </div>
                            <div
                                class="w-full flex xs:flex-row flex-col justify-between xs:items-center font-[400] text-[14px] leading-[20px]">
                                <p class="text-[#B4B4B4]">Proxy type</p>
                                <p class="text-[#282828] dark:text-white">Rotating</p>
                            </div>
                            <div
                                class="w-full flex xs:flex-row flex-col justify-between xs:items-center font-[400] text-[14px] leading-[20px]">
                                <p class="text-[#B4B4B4]">Bandwidth</p>
                                <p class="text-[#282828] dark:text-white">5 GB</p>
                            </div>
                            <div
                                class="w-full flex xs:flex-row flex-col justify-between xs:items-center font-[400] text-[14px] leading-[20px]">
                                <p class="text-[#B4B4B4]">Subscription Plan</p>
                                <p class="text-[#282828] dark:text-white">Starter Plan</p>
                            </div>
                            <p class="font-[400] text-[14px] leading-[20px] text-[#07B6BF] pt-[2px]">I have a Promo Code!
                            </p>
                        </div>
                        <div
                            class="flex justify-between xs:flex-row flex-col xs:items-center w-full font-[700] text-[18px] leading-[26px] text-[#07B6BF] mb-[50px]">
                            <p>Total Price</p>
                            <p>$25.00</p>
                        </div>

                        <Button
                            :customClass="' flex py-[12px] px-[22px] rounded-[4px] items-center justify-center text-white bg-[#07B6BF] text-[15px] font-[600] sm:h-[48px] w-full'">
                            Get approved
                        </Button>
                    </WhiteCard>
                </div>
            </WhiteCard>


            <div
                class="flex items-center bg-[#07b6bf0f] shadow-card dark:shadow-cardDark border-t-[4px] rounded-b-[8px] rounded-t-[4px] py-[18px] sm:px-[55px] px-[25px] border-[#07B6BF] mt-[21px]">
                <div class="flex sm:items-center sm:gap-[40px] gap-[20px] xs:flex-row flex-col">
                    <svg class="w-[63px] h-[63px]" width="63" height="63" viewBox="0 0 63 63" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.11" width="63" height="63" rx="8" fill="#07B6BF" />
                        <path
                            d="M50.5938 16.794L44.1422 22.8826L50.3136 33.2701L50.5938 32.9218V16.7939V16.794ZM13.4062 16.8829V34.5307C13.7562 34.5762 14.1768 34.6013 14.6012 34.6057C15.5285 34.6155 16.2929 34.555 16.7223 34.5164L20.8359 24.1074L13.4062 16.8829ZM43.8089 25.075L43.2589 25.431C43.2472 25.4386 42.84 25.6916 42.7204 25.7661L41.8919 26.2677L41.9036 26.2747C41.5197 26.5136 41.413 26.5807 40.9773 26.8513C40.7562 26.9886 40.7507 26.9918 40.541 27.122C38.9559 26.2699 37.2359 25.615 35.2287 25.1C32.7043 25.8626 30.0301 26.9662 27.3598 28.0017C28.4684 29.3366 29.7004 29.7713 30.9414 29.7868C32.3805 29.8048 33.8516 29.179 34.8647 28.4779L35.4428 28.0779L36.023 28.9162L45.0427 35.4264L48.5671 33.0836L43.8088 25.075H43.8089ZM21.881 25.2891L18.3367 34.2568L19.6375 35.2571L22.0434 32.5301L22.2361 32.3118L22.5267 32.2936C22.6439 32.2863 22.7595 32.2829 22.8736 32.2835C23.6714 32.2886 24.3847 32.4957 24.9197 32.9679C25.3159 33.3172 25.5794 33.7824 25.7322 34.321L25.9103 34.3099C26.8474 34.2513 27.6917 34.4447 28.3033 34.9841C28.9148 35.5237 29.2119 36.3375 29.2705 37.2747L29.2759 37.3591C29.7791 37.4541 30.2295 37.6522 30.5957 37.9754C31.2073 38.5149 31.5043 39.3285 31.5629 40.2657L31.5783 40.5095C31.6282 40.5253 31.6777 40.5424 31.7267 40.5609L31.8855 40.338L32.3129 39.7382L32.5327 39.4296L33.1053 39.8376L37.7481 43.1451C38.2531 43.0206 38.5541 42.8268 38.7216 42.5915C38.8893 42.3562 38.9741 42.0079 38.9266 41.4894L33.3595 37.5027L32.7878 37.0933L33.1933 36.5272L33.7144 35.7956L34.287 36.2036L40.5632 40.6744C41.0682 40.55 41.3695 40.3561 41.5369 40.1209C41.7044 39.8857 41.7892 39.5383 41.742 39.0207L34.5234 33.8997L33.9499 33.4926L34.7635 32.3457L35.3372 32.7526L42.557 37.8749C43.0625 37.7504 43.3638 37.5565 43.5315 37.3211C43.6993 37.0856 43.7841 36.7371 43.7362 36.2176L35.108 29.9903C33.9631 30.669 32.4985 31.2128 30.9239 31.1931C29.0812 31.17 27.1101 30.2895 25.6601 28.0642C25.6027 27.9762 25.5658 27.8764 25.5521 27.7723C25.5383 27.6682 25.5481 27.5623 25.5806 27.4624C25.6132 27.3625 25.6677 27.2712 25.7401 27.1952C25.8126 27.1192 25.9012 27.0603 25.9994 27.023C27.0161 26.6367 28.0434 26.2285 29.073 25.8235L21.8812 25.2896L21.881 25.2891ZM22.889 33.6969L19.173 37.9086C19.2455 38.4357 19.4105 38.7635 19.633 38.9597C19.8554 39.156 20.2013 39.2789 20.7333 39.285L24.4491 35.0735C24.3767 34.5464 24.2116 34.2184 23.9892 34.0222C23.7668 33.8259 23.4209 33.7031 22.8889 33.697L22.889 33.6969ZM26.2724 35.7133L22.0761 40.4696C22.1484 40.9967 22.3136 41.3247 22.5359 41.5209C22.7586 41.717 23.1043 41.8399 23.6363 41.8459L27.8327 37.0898C27.7603 36.5626 27.5952 36.2348 27.3727 36.0385C27.1504 35.8422 26.8045 35.7193 26.2725 35.7132L26.2724 35.7133ZM28.5646 38.7044L24.849 42.9161C24.9214 43.4432 25.0865 43.7711 25.3089 43.9674C25.5314 44.1636 25.8773 44.2864 26.4092 44.2925L30.125 40.0813C30.0526 39.5539 29.8875 39.2261 29.6651 39.0297C29.4427 38.8335 29.0968 38.7107 28.5648 38.7046L28.5646 38.7044ZM30.4945 41.762L27.4637 45.2214C27.5359 45.7495 27.701 46.0778 27.9237 46.2742C28.1459 46.4703 28.4914 46.5931 29.0227 46.5994L32.0536 43.14C31.9813 42.6121 31.8161 42.2838 31.5934 42.0872C31.3713 41.8911 31.0258 41.7685 30.4945 41.7621L30.4945 41.762ZM33.2555 42.1362C33.3879 42.4972 33.4644 42.8972 33.491 43.3231L33.5091 43.6125L32.8625 44.3506L34.9503 45.8379C35.4553 45.7133 35.7563 45.5195 35.9237 45.2843C36.0913 45.0491 36.1763 44.7011 36.1291 44.1832L33.2556 42.1364L33.2555 42.1362Z"
                            fill="#07B6BF" />
                    </svg>

                    <div class="flex flex-col gap-[18px] xs:w-[80%]">
                        <p class="text-[#505050]  font-[400] text-[16px] leading-[24px] ">
                            You can also set up an automatic replenishment system to top off your bandwidth when it
                            drops to
                            the desired minimum limit.
                            <span class="underline text-[#07B6BF] font-[700] underline-offset-4 ps-1">Set-up Now</span>
                        </p>
                        <p class="text-[#505050] dark:text-white font-[700] text-[18px] leading-[26px]">
                            Thank You For Choosing Us!
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </DashboardLayout>
</template>