<template>
    <NuxtLink class="link" :to="href">
        <slot></slot>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    href: string
}>()
</script>

<style scoped>
.link {
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
