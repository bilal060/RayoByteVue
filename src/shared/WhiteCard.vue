<script>
export default {
    props: {
        customClass: String
    }
}
</script>

<template>
    <div class="rounded-[8px] bg-white shadow-card dark:shadow-cardDark dark:bg-[#0D0D0D]" :class="customClass">
        <slot></slot>
    </div>
</template>