<script>
export default {
    props: {
        heading: String,
    },
};
</script>

<template>
    <h1 class="text-[#505050] dark:text-white font-[800] text-[22px] leading-[36px]">
        {{ heading }}
    </h1>
</template>
