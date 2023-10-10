<template>
  <div
    class="hidden md:flex items-center gap-3 border border-[#B4B4B4] rounded-[8px] px-[15px] py-[5px] h-[30px] md:w-[35%] lg:w-auto">
    <img src="../../assets/icons/search.svg" alt="">
    <input type="text" name="search" id="search" placeholder="Search"
      class="border-none outline-none w-full text-[#B4B4B4] font-[400] text-[14px] bg-transparent">
  </div>
  <div class="block md:hidden">

    <button @click="paletteOpen = true" class="flex bg-transparent cursor-pointer items-center gap-x-2">
      <img src="../../assets/icons/search.svg" alt="">
      <p class="text-[#B4B4B4] font-[400] text-[14px]">Search...</p>
    </button>


    <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <TransitionRoot :show="paletteOpen" as="template" @after-leave="query = ''" appear>
        <Dialog as="div" class="relative z-50" @close="paletteOpen = false" @blur="paletteOpen = false">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
            leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </TransitionChild>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto px-4 sm:px-6 md:px-20 py-20">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="mx-auto max-w-xl transform divide-y divide-[#B4B4B4] overflow-hidden rounded-xl bg-white dark:bg-[#0D0D0D] shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox @update:modelValue="onSelect">
                  <div class="relative">
                    <ComboboxInput
                      class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-[#B4B4B4] placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Search..." @change="query = $event.target.value" />
                  </div>

                  <ComboboxOptions v-if="filteredItems.length > 0" static
                    class="max-h-96 scroll-py-3 overflow-y-auto p-3">
                    <ComboboxOption v-for="item in filteredItems" :key="item.id" :value="item" as="template"
                      v-slot="{ active }">
                      <li :class="[
                        'flex cursor-default select-none rounded-xl p-3',
                        active && 'bg-gray-100',
                      ]">
                        <div :class="[
                          'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                          item.color,
                        ]">
                          <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <div class="ml-4 flex-auto">
                          <p :class="[
                            'text-sm font-medium',
                            active ? 'text-gray-900' : 'text-gray-700',
                          ]">
                            {{ item.name }}
                          </p>
                          <p :class="[
                            'text-sm',
                            active ? 'text-gray-700' : 'text-gray-500',
                          ]">
                            {{ item.description }}
                          </p>
                        </div>
                      </li>
                    </ComboboxOption>
                  </ComboboxOptions>

                  <div v-if="query !== '' && filteredItems.length === 0" class="px-6 py-14 text-center text-sm sm:px-14">
                    <!-- <ExclamationCircleIcon type="outline" name="exclamation-circle"
                      class="mx-auto h-6 w-6 text-gray-400" /> -->
                    <p class="mt-4 font-semibold text-[#B4B4B4]">
                      No results found
                    </p>
                    <p class="mt-2 text-gray-500">
                      Nothing found for this search term. Please try
                      again.
                    </p>
                  </div>
                </Combobox>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";


import { computed, ref } from "vue";

import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/vue";

const items = [
  {
    id: 1,
    name: "Example 1",
    description: "Description",
    url: "#",
    color: "bg-[#07B6BF]",
  },
  {
    id: 2,
    name: "Example 2",
    description: "Description",
    url: "#",
    color: "bg-[#07B6BF]",
  },
  {
    id: 3,
    name: "Example 3",
    description: "Description",
    url: "#",
    color: "bg-[#07B6BF]",
  },
];

const paletteOpen = ref(false);
const query = ref("");
const filteredItems = computed(() =>
  query.value === ""
    ? []
    : items.filter((item) => {
      return item.name.toLowerCase().includes(query.value.toLowerCase());
    })
);

function onSelect(item) {
  window.location = item.url;
}

const sidebarOpen = ref(false);
</script>
