<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashbpard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from "../shared/Button.vue";
import GetApproved from '../components/Dashbpard Components/GetApproved.vue';


export default {
    components: {
        DashboardLayout,
        DashboardHeading,
        WhiteCard,
        Button,
        GetApproved,
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
import { ref, computed } from 'vue'


const formatSelect = [
    'Last Minute',
    '15 Minute Ago',
    '30 Minute Ago',
    '1 Hour Ago',
]
const people = [
    { name: 'Last Minute' },
    { name: '15 Minute Ago' },
    { name: '30 Minute Ago' },
    { name: '1 Hour Ago' },

]
const selectedPerson = ref(people[0]);
const data = [
    { name: 'Domain', time: '1 Hour Ago' },
    { name: 'Domain', time: '1 Hour Ago' },
    { name: 'Domain', time: '1 Hour Ago' },

    { name: 'Domain', time: '15 Minute Ago' },
    { name: 'Domain', time: '15 Minute Ago' },
    { name: 'Domain', time: '15 Minute Ago' },

    { name: 'Domain', time: '30 Minute Ago' },
    { name: 'Domain', time: '30 Minute Ago' },
    { name: 'Domain', time: '30 Minute Ago' },
]

const filteredPeople = computed(() =>
    selectedPerson.value.name === ''
        ? formatSelect
        : data.filter((domain) => {
            return domain.time.toLowerCase().includes(selectedPerson.value.name.toLowerCase())
        })
)
</script>

<template>
    <DashboardLayout>
        <div>
            <DashboardHeading heading="Domains List" />
            <GetApproved />
            <WhiteCard :customClass="'mt-[20px]'">
                <div class="border-b border-[#EBEFF2] dark:border-[#343434] py-[17px] px-[24px] ">
                    <p class="text-[#505050] font-[700] text-[14px] leading-[20px] dark:text-white mb-[3px]">
                        Requested Domains List
                    </p>
                    <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] w-3/5">
                        Below you can see the list of domains you have requested. You can select different time intervals
                        for which the data will be displayed. The higher the entry is in the table, the more requests to the
                        domain were made.
                    </p>
                </div>
                <div class="py-[17px] px-[24px]">
                    <span class="text-[#505050] font-[700] text-[12px] leading-[16px] dark:text-white mb-[2px]">
                        Format
                    </span>

                    <Listbox v-model="selectedPerson" class="max-w-[394px]">
                        <div class="relative">
                            <ListboxButton
                                class="rounded-[4px] border border-[#E5E5E5] dark:border-[#343434] py-[10px] px-[12px] relative  cursor-default  text-[#07B6BF] bg-transparent font-[500] text-[12px] leading-[18px] flex items-center gap-2  w-full justify-between">
                                <span class="block truncate">{{ selectedPerson.name }}</span>
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
                                    <ListboxOption v-slot="{ active, selected }" v-for="person in people" :key="person.name"
                                        :value="person" as="template">
                                        <li :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate dark:text-[#B4B4B4] text-[12px]',
                                            ]">{{ person.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600 text-[12px] ">
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                    <div
                        class="py-[17px] px-[24px] shadow-header dark:shadow-headerDark mt-[28px] flex flex-col w-full gap-[22px] items-center justify-between">
                        <div v-for="person in filteredPeople" :key="person.id" :value="person"
                            class=" flex items-center justify-between w-full">
                            <p class="text-[#505050] font-[500] text-[14px] leading-[20px] dark:text-white">
                                {{ person.name }}</p>
                            <img src="../assets/icons/copyIcon.svg" alt="copy" class="cursor-pointer">
                        </div>
                        <div v-if="selectedPerson?.value?.name !== '' && filteredPeople.length === 0"
                            class=" flex items-center justify-between w-full">
                            <p class="text-[#505050] font-[500] text-[12px] leading-[18px] dark:text-white">
                                No results found
                            </p>
                            <img src="../assets/icons/copyIcon.svg" alt="copy" class="cursor-pointer">
                        </div>
                    </div>
                </div>
            </WhiteCard>
        </div>
    </DashboardLayout>
</template>