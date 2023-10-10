<script>
export default {
    props: {
        customClass: String,
        attributes: {
            type: Object,
        },
    }
}
</script>

<template>
    <input v-bind="attributes" class="input-style" :class="customClass" />
</template>
