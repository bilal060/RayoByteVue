<script setup>
import { ref, defineProps } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

const { customClass, option } = defineProps(['customClass', 'option']);
const selectedPerson = ref(option[0]);
</script>

<template>
    <Listbox v-model="selectedPerson">
        <div class="relative">
            <ListboxButton :class="customClass">
                <span class="block truncate">{{ selectedPerson.name }}</span>
                <svg width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 3L0.468911 -9.41288e-08L6.53109 4.35844e-07L3.5 3Z" fill="#B4B4B4" />
                </svg>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions
                    class="dark:bg-[#0D0D0D] absolute z-10 mt-1 max-h-60 w-full min-w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-cardDark sm:text-sm">
                    <ListboxOption v-slot="{ active, selected }" v-for="person in option" :key="person.name" :value="person"
                        as="template">
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
                                <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>