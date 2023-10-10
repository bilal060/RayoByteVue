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
    <button v-bind="attributes" :class=customClass>
        <slot></slot>
    </button>
</template>
