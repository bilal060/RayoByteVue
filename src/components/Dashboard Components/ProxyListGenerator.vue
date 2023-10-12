<script>
import WhiteCard from '../../shared/WhiteCard.vue';
import Button from "../../shared/Button.vue";

export default {
    components: {
        WhiteCard,
        Button,
    },
    data() {
        return {
            text: 'curl https://rayobyte.com/ -xleshackelford_outlook_com: laurenc124@la.residential.rayobyte.com: 8000'
        };
    },
    methods: {
        copy() {
            this.$refs.myinput.focus();
            document.execCommand('copy');
        }
    }
};
</script>
<script setup>
import { allCountries } from "country-region-data";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { ref, watch } from 'vue'
import { City } from 'country-state-city';
import Tooltip from 'primevue/tooltip';

const selectedCountry = ref("Random Country");
const selectedRegion = ref("Random Region");
const selectedCity = ref("Random City");

const selectedISP = ref("Proxy ISP");
const selectedIP = ref("Random IP");
const selectedConnection = ref("Hostname");



let selectedCountryIndex = allCountries.findIndex(country => country[0] === selectedCountry.value);
let selectedStateIndex = allCountries.findIndex(country => country[0] === selectedCountry.value);
let selectedCountryCode = ''
let selectedStateCode = ''

watch(selectedCountry, (newCountry) => {
    selectedCountryIndex = allCountries.findIndex(country => country[0] === newCountry);
    selectedCountryCode = allCountries[selectedCountryIndex][1];
});

watch(selectedRegion, (newRegion) => {
    selectedStateIndex = allCountries[selectedCountryIndex][2].findIndex(region => region[0] === newRegion);
    selectedStateCode = allCountries[selectedCountryIndex][2][selectedStateIndex][1];
});

const proxyISP = [
    { name: 'Proxy ISP 1' },
    { name: 'Proxy ISP 2' },
    { name: 'Proxy ISP 3' },
    { name: 'Proxy ISP 4' },
]
const proxyIP = [
    { name: 'Proxy IP 1' },
    { name: 'Proxy IP 2' },
    { name: 'Proxy IP 3' },
    { name: 'Proxy IP 4' },
]

const proxyConnection = [
    { name: 'Hostname 1' },
    { name: 'Hostname 2' },
    { name: 'Hostname 3' },
    { name: 'Hostname 4' },
]

</script>

<template>
    <WhiteCard :customClass="'flex flex-col items-start mt-[21px] pt-[32px] pb-[31px] px-[25px]'">
        <div class="flex items-center justify-center w-full mb-[37px]">
            <p class="text-[#505050] dark:text-white font-[700] text-[16px] leading-[27px]">
                Welcome to our Proxy List Generator
            </p>
        </div>

        <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
            Basic cURL example
        </p>
        <div
            class="py-[10px] px-[26px] sm:pe-[60px] shadow-header dark:shadow-headerDark mt-[28px] flex flex-col w-full gap-[22px] items-center justify-between">
            <div class=" flex items-center justify-between w-full gap-5">
                <input ref="myinput" readonly :value="text"
                    class="text-[#808080] font-[400] text-[14px] leading-[20px] break-words w-[90%] bg-transparent" />
                <img src="../../assets/icons/copyIcon.svg" alt="copy" class="cursor-pointer" @click="copy" />
            </div>
        </div>
    </WhiteCard>
    <WhiteCard :customClass="'flex flex-col items-start mt-[21px]'">
        <div class="border-b border-[#EBEFF2] dark:border-[#343434] pt-[17px] pb-[18px] px-[24px] w-full">
            <p class="text-[#505050] dark:text-white font-[700] text-[14px] leading-[20px]">
                Proxy List Generator
            </p>
            <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">
                Set up your proxies here.
            </p>
        </div>
        <div class="p-[24px] w-full">
            <form action="">
                <div class="flex sm:flex-row flex-col items-center gap-x-[48px] gap-y-[30px] mb-[12px] flex-wrap">
                    <div class="md:max-w-[45%] lg:max-w-[46%] xl:max-w-[29%] w-full">

                        <span
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px] flex gap-2">
                            Proxy Country
                            <img src="../../assets/icons/infoIcon.svg" alt=""
                                v-tooltip.bottom="{ value: `<h4 class='text-[#505050] dark:text-white text-[10px] font-[500] leading-[18px]'>Select the country from which proxies will be provided to you</h4>`, escape: true, class: 'custom-tooltip' }"
                                placeholder="Bottom" />
                        </span>
                        <Listbox v-model="selectedCountry">
                            <div class="relative">
                                <ListboxButton
                                    class="rounded-[4px] border pe-[30px] border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                    <span class="block truncate">{{ selectedCountry }}</span>
                                    <img src="../../assets/icons/arrowDownIcon.svg" alt="arrowdown" />
                                </ListboxButton>
                                <transition leave-active-class="transition duration-100 ease-in"
                                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                                    <ListboxOptions
                                        class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                                        <ListboxOption v-slot="{ active, selected }" v-for="country in allCountries"
                                            :key="country[0]" :value="country[0]" as="template">
                                            <li :class="[
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-4',
                                            ]">
                                                <span :class="[
                                                    selected ? 'font-medium' : 'font-normal',
                                                    'block truncate dark:text-[#B4B4B4] text-[12px]',
                                                ]">{{ country[0] }}</span>
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
                    <div class="md:max-w-[45%] lg:max-w-[46%] xl:max-w-[29%] w-full">
                        <span
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px] flex gap-2">
                            Proxy Region
                            <img src="../../assets/icons/infoIcon.svg" alt="" />
                        </span>
                        <Listbox v-model="selectedRegion">
                            <div class="relative">
                                <ListboxButton
                                    class="rounded-[4px] border pe-[30px] border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                    <span class="block truncate">{{ selectedRegion }}</span>
                                    <img src="../../assets/icons/arrowDownIcon.svg" alt="arrowdown" />
                                </ListboxButton>
                                <transition leave-active-class="transition duration-100 ease-in"
                                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                                    <ListboxOptions
                                        class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                                        <ListboxOption v-slot="{ active, selected }"
                                            v-for="region in  allCountries[selectedCountryIndex][2]" :key="region[0]"
                                            :value="region[0]" as="template">
                                            <li :class="[
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-4',
                                            ]">
                                                <span :class="[
                                                    selected ? 'font-medium' : 'font-normal',
                                                    'block truncate dark:text-[#B4B4B4] text-[12px]',
                                                ]">{{ region[0] }}</span>
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
                    <div class="md:max-w-[45%] lg:max-w-[46%] xl:max-w-[29%] w-full">
                        <span
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px] flex gap-2">
                            Proxy City
                            <img src="../../assets/icons/infoIcon.svg" alt="" />

                        </span>
                        <Listbox v-model="selectedCity">
                            <div class="relative">
                                <ListboxButton
                                    class="rounded-[4px] border pe-[30px] border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                    <span class="block truncate">{{ selectedCity }}</span>
                                    <img src="../../assets/icons/arrowDownIcon.svg" alt="arrowdown" />
                                </ListboxButton>
                                <transition leave-active-class="transition duration-100 ease-in"
                                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                                    <ListboxOptions
                                        class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                                        <ListboxOption v-slot="{ active, selected }"
                                            v-for="country in City.getCitiesOfState(selectedCountryCode, selectedStateCode)"
                                            :key="country.id" :value="country.name" as="template">
                                            <li :class="[
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-4',
                                            ]">
                                                <span :class="[
                                                    selected ? 'font-medium' : 'font-normal',
                                                    'block truncate dark:text-[#B4B4B4] text-[12px]',
                                                ]">{{ country.name }}</span>
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


                    <div class="md:max-w-[45%] lg:max-w-[46%] xl:max-w-[29%] w-full">
                        <span
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px] flex gap-2">
                            Proxy ISP
                            <img src="../../assets/icons/infoIcon.svg" alt="" />
                        </span>
                        <Listbox v-model="selectedISP">
                            <div class="relative">
                                <ListboxButton
                                    class="rounded-[4px] pe-[30px] border border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                    <span class="block truncate">{{ selectedISP }}</span>
                                    <img src="../../assets/icons/arrowDownIcon.svg" alt="arrowdown" />
                                </ListboxButton>
                                <transition leave-active-class="transition duration-100 ease-in"
                                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                                    <ListboxOptions
                                        class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                                        <ListboxOption v-slot="{ active, selected }" v-for="proxy in proxyISP"
                                            :key="proxy.name" :value="proxy.name" as="template">
                                            <li :class="[
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-4',
                                            ]">
                                                <span :class="[
                                                    selected ? 'font-medium' : 'font-normal',
                                                    'block truncate dark:text-[#B4B4B4] text-[12px]',
                                                ]">{{ proxy.name }}</span>
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
                    <div class="md:max-w-[45%] lg:max-w-[46%] xl:max-w-[29%] w-full">
                        <span
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px] flex gap-2">
                            IP session
                            <img src="../../assets/icons/infoIcon.svg" alt="" />

                        </span>
                        <Listbox v-model="selectedIP">
                            <div class="relative">
                                <ListboxButton
                                    class="rounded-[4px] pe-[30px] border border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                    <span class="block truncate">{{ selectedIP }}</span>
                                    <img src="../../assets/icons/arrowDownIcon.svg" alt="arrowdown" />
                                </ListboxButton>
                                <transition leave-active-class="transition duration-100 ease-in"
                                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                                    <ListboxOptions
                                        class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                                        <ListboxOption v-slot="{ active, selected }" v-for="proxy in  proxyIP"
                                            :key="proxy.name" :value="proxy.name" as="template">
                                            <li :class="[
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-4',
                                            ]">
                                                <span :class="[
                                                    selected ? 'font-medium' : 'font-normal',
                                                    'block truncate dark:text-[#B4B4B4] text-[12px]',
                                                ]">{{ proxy.name }}</span>
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
                    <div class="md:max-w-[45%] lg:max-w-[46%] xl:max-w-[29%] w-full">
                        <span
                            class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px] flex gap-2">
                            Connection Type
                            <img src="../../assets/icons/infoIcon.svg" alt="" />

                        </span>
                        <Listbox v-model="selectedConnection">
                            <div class="relative">
                                <ListboxButton
                                    class="rounded-[4px] pe-[30px] border border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                    <span class="block truncate">{{ selectedConnection }}</span>
                                    <img src="../../assets/icons/arrowDownIcon.svg" alt="arrowdown" />
                                </ListboxButton>
                                <transition leave-active-class="transition duration-100 ease-in"
                                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                                    <ListboxOptions
                                        class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                                        <ListboxOption v-slot="{ active, selected }" v-for="hostname in proxyConnection"
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
            </form>
        </div>
    </WhiteCard>
</template>