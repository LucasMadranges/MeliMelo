<template>
    <component :is="type" :href="href">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
defineProps<{
    type: string
    href: string
}>()
</script>

<style scoped>
button {
    border: none;
    background-color: white;
    color: black;
    border-radius: 100px;
    padding: 6px 12px;
    font-size: 16px;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 4px;
}
</style>
