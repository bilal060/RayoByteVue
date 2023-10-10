<script>
import WhiteCard from '../../shared/WhiteCard.vue';
import Button from "../../shared/Button.vue";

export default {
    components: {
        WhiteCard,
        Button,
    },
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
import { ref } from 'vue'

const selectedCountry = ref(allCountries[0][0]);
</script>

<template>
    <div>
        <form action="">
            <p class="font-[400] text-[14px] leading-[20px] capitalize mb-[4px] text-[#505050] dark:text-white">
                Account Information</p>
            <div class="flex sm:flex-row flex-col items-center gap-x-[24px] gap-y-[12px] mb-[12px] flex-wrap">
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="FirstName"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        First Name
                    </label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="FirstName" id="FirstName">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="LastName"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Last Name</label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Last Name" id="LastName">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="Email"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Email</label>
                    <input type="email"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Email" id="Email">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="PhoneNumber"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Phone Number</label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="PhoneNumber" id="PhoneNumber">
                </div>
            </div>


            <p class="font-[400] text-[14px] leading-[20px] capitalize mb-[4px] mt-[30px] text-[#505050] dark:text-white">
                ADDRESS</p>

            <div class="flex sm:flex-row flex-col items-center gap-x-[24px] gap-y-[12px] mb-[32px] flex-wrap">
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="CompanyName"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Company Name
                    </label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Company Name" id="CompanyName">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="JobTitle"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">Job
                        Title</label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Proxy Username" id="JobTitle">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="StreetAddress"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Street Address</label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Street Address" id="StreetAddress">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="StreetAddress2"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Street Address 2</label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Street Address 2" id="StreetAddress2">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="Postcode"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Postcode</label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Postcode" id="Postcode">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="City"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">City</label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="City" id="City">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="StateTerritory"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        State/Territory</label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="State/Territory" id="StateTerritory">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <span class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Country
                    </span>
                    <Listbox v-model="selectedCountry">
                        <div class="relative">
                            <ListboxButton
                                class="rounded-[4px] border border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#B4B4B4] bg-transparent font-[400] text-[14px] leading-[20px] flex items-center gap-2  w-full justify-between">
                                <span class="block truncate">{{ selectedCountry }}</span>
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.61741 0.75L6.88259 6.00371L12.1478 0.75L13.7652 2.36741L6.88259 9.25L0 2.36741L1.61741 0.75Z"
                                        fill="#505050" fill-opacity="0.7" />
                                </svg>
                            </ListboxButton>
                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
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
            </div>
            <Button
                :customClass="' flex py-[12px] px-[20px] rounded-[4px] items-center justify-center text-white border-2 border-[#07B6BF] bg-black text-[15px] font-[600] h-[48px] md:max-w-[148px] w-full'">
                Save Changes
            </Button>
        </form>
        <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] mt-[10px]">
            Need to change your profile settings? <span class="text-[#07B6BF]">Click here.</span>
        </p>
    </div>
</template>