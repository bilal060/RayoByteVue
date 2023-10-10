<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton :class="customClass">
                <slot name="dropbutton"></slot>
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute right-0 xs:-right-[25px] top-14 z-10 w-max origin-top-right rounded-[8px] bg-white shadow-card dark:shadow-cardDark ring-1 ring-[#0000001f] dark:ring-[#343434] focus:outline-none">
                <div class="rounded-[8px] dark:bg-[#0D0D0D] menulist">
                    <slot name="dropmenu"></slot>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
const props = defineProps({
    customClass: String
})
</script>