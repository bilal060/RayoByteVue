<script>
export default {
    props: {
        customClass: String
    }
}
</script>

<template>
    <div class="rounded-[8px] bg-white shadow-card dark:shadow-cardDark dark:bg-[#282828]" :class="customClass">
        <slot></slot>
    </div>
</template>