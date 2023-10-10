<script setup>
import { useDark, useToggle } from '@vueuse/core';
// import { onMounted, ref } from 'vue'

const isDark = useDark();

// let theme = ref()
// onMounted(() => {
//     console.log(`the component is now mounted.`)
//     theme = localStorage.getItem('vueuse-color-scheme')
//     if (theme === "dark") {
//         console.log(isDark)
//     }
//     else {
//         return
//     }
// })
const toggleDark = useToggle(isDark);
</script>
<template>
    <label class="h-20px">
        <input class='toggle-checkbox' type='checkbox' @change="toggleDark()" />
        <div class='toggle-slot'>
            <div class='sun-icon-wrapper'>
                <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clip-path="url(#clip0_16461_501)">
                            <path
                                d="M8.15623 2.67708C6.45831 10.5312 12.0625 15.6042 16.1354 17.0521C14.6875 18.1875 12.8854 18.8333 11 18.8333C6.40623 18.8333 2.66665 15.0937 2.66665 10.5C2.66665 6.90625 4.95831 3.83333 8.15623 2.67708ZM10.9896 0.09375C5.16665 0.09375 0.583313 4.8125 0.583313 10.5C0.583313 16.25 5.24998 20.9167 11 20.9167C14.8646 20.9167 18.2187 18.8125 20.0208 15.6875C12.1979 15.4271 7.42706 6.90625 11.3541 0.09375C11.2291 0.09375 11.1146 0.09375 10.9896 0.09375Z"
                                fill="white" />

                        </g>
                        <defs>
                            <clipPath id="clip0_16461_501">
                                <rect width="25" height="25" fill="white" transform="translate(0.5 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class='toggle-button'></div>
            <div class='moon-icon-wrapper'>
                <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clip-path="url(#clip0_16461_501)">
                            <path
                                d="M7.54163 5.5415L5.66663 3.67692L4.19788 5.14567L6.06246 7.01025L7.54163 5.5415ZM1.54163 11.4373H4.66663V13.5207H1.54163V11.4373ZM11.9583 1.07275H14.0416V4.14567H11.9583V1.07275ZM20.3333 3.67171L21.8 5.13734L19.9354 7.00192L18.4698 5.53525L20.3333 3.67171ZM18.4583 19.4165L20.3229 21.2915L21.7916 19.8228L19.9166 17.9582L18.4583 19.4165ZM21.3333 11.4373H24.4583V13.5207H21.3333V11.4373ZM13 6.229C9.55204 6.229 6.74996 9.03109 6.74996 12.479C6.74996 15.9269 9.55204 18.729 13 18.729C16.4479 18.729 19.25 15.9269 19.25 12.479C19.25 9.03109 16.4479 6.229 13 6.229ZM13 16.6457C10.6979 16.6457 8.83329 14.7811 8.83329 12.479C8.83329 10.1769 10.6979 8.31234 13 8.31234C15.302 8.31234 17.1666 10.1769 17.1666 12.479C17.1666 14.7811 15.302 16.6457 13 16.6457ZM11.9583 20.8123H14.0416V23.8853H11.9583V20.8123ZM4.19788 19.8123L5.66663 21.2811L7.53121 19.4061L6.06246 17.9373L4.19788 19.8123Z"
                                fill="#07B6BF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_16461_501">
                                <rect width="25" height="25" fill="white" transform="translate(0.5 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </label>
</template>