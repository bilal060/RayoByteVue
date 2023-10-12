<script>
import WhiteCard from '../../shared/WhiteCard.vue';

export default {

    components: {
        WhiteCard,
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
    <WhiteCard :customClass="'flex flex-col items-start mt-[21px]'">
        <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[18px] px-[24px] w-full">
            <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                Proxies Format Setting
            </p>
            <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">
                Choose the format of your IPs.
            </p>
        </div>
        <div class="p-[24px] w-full">
            <div class="flex sm:flex-row flex-col items-center gap-x-[48px] gap-y-[30px] mb-[31px] flex-wrap">
                <div class="md:max-w-[45%] lg:max-w-[185px] w-full">
                    <span class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Number of IPs
                    </span>
                    <Listbox v-model="selectedNoOfIP">
                        <div class="relative">
                            <ListboxButton
                                class="rounded-[4px] pe-[30px] border border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                <span class="block truncate">{{ selectedNoOfIP }}</span>
                                <img src="../../assets/icons/arrowDownIcon.svg" alt="arrowdown" />

                            </ListboxButton>
                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="hostname in noOfIp"
                                        :key="hostname.name" :value="hostname.name" as="template">
                                        <li :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate dark:text-[#B4B4B4] text-[12px]',
                                            ]">{{ hostname.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600 text-[12px] ">
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
                <div class="md:max-w-[45%] lg:max-w-[350px] xl:max-w-[394px] w-full">
                    <span class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Format
                    </span>
                    <Listbox v-model="selectedFormat">
                        <div class="relative">
                            <ListboxButton
                                class="rounded-[4px] pe-[30px] border border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                <span class="block truncate">{{ selectedFormat }}</span>
                                <img src="../../assets/icons/arrowDownIcon.svg" alt="arrowdown" />

                            </ListboxButton>
                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="hostname in format"
                                        :key="hostname.name" :value="hostname.name" as="template">
                                        <li :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate dark:text-[#B4B4B4] text-[12px]',
                                            ]">{{ hostname.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600 text-[12px] ">
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
            </div>
            <div
                class="rounded-0 shadow-header dark:shadow-headerDark mt-[31px] flex flex-col w-full items-center justify-between">
                <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[18px] px-[24px] w-full">
                    <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                        List of your IPs
                    </p>
                </div>
                <div class="p-[24px] w-full">
                    <div
                        class=" flex flex-col w-full gap-[4px] items-center justify-between divide-y divide-[#EBEFF2] dark:divide-[#343434]">
                        <div class="ps-2 flex items-center justify-between w-full gap-5 pt-[12px]">
                            <p class="text-[#808080] font-[400] text-[14px] leading-[20px] break-words w-[90%]">
                                lorem_Ipsum_com:lorem@la.residential.rayobyte.com:8000</p>
                            <img src="../../assets/icons/copyIcon.svg" alt="copy" class="cursor-pointer">
                        </div>
                        <div class="ps-2 flex items-center justify-between w-full gap-5 pt-[12px]">
                            <p class="text-[#808080] font-[400] text-[14px] leading-[20px] break-words w-[90%]">
                                lorem_Ipsum_com:lorem@la.residential.rayobyte.com:8000</p>
                            <img src="../../assets/icons/copyIcon.svg" alt="copy" class="cursor-pointer">
                        </div>
                        <div class="ps-2 flex items-center justify-between w-full gap-5 pt-[12px]">
                            <p class="text-[#808080] font-[400] text-[14px] leading-[20px] break-words w-[90%]">
                                lorem_Ipsum_com:lorem@la.residential.rayobyte.com:8000</p>
                            <img src="../../assets/icons/copyIcon.svg" alt="copy" class="cursor-pointer">
                        </div>
                        <div class="ps-2 flex items-center justify-between w-full gap-5 pt-[12px]">
                            <p class="text-[#808080] font-[400] text-[14px] leading-[20px] break-words w-[90%]">
                                lorem_Ipsum_com:lorem@la.residential.rayobyte.com:8000</p>
                            <img src="../../assets/icons/copyIcon.svg" alt="copy" class="cursor-pointer">
                        </div>
                        <div class="ps-2 flex items-center justify-between w-full gap-5 pt-[12px]">
                            <p class="text-[#808080] font-[400] text-[14px] leading-[20px] break-words w-[90%]">
                                lorem_Ipsum_com:lorem@la.residential.rayobyte.com:8000</p>
                            <img src="../../assets/icons/copyIcon.svg" alt="copy" class="cursor-pointer">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </WhiteCard>
</template>