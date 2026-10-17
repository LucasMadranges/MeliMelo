<template>
    <section>
        <NuxtLink
            class="navigation-link"
            v-for="(item, index) in items"
            :to="item.path"
            :key="index"
            :style="[
                `background: linear-gradient(${item.gradient.join(', ')})`,
            ]"
        >
            <h3>{{ item.label }}</h3>
            <component class="navigation-icon" :is="item.icon" />
        </NuxtLink>
    </section>
</template>

<script setup lang="ts">
import { items } from './items.type'
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;

    background-color: white;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    padding: 18px;

    .navigation-link {
        display: flex;
        flex-direction: column;
        gap: 4px;

        color: black;
        padding: 18px;
        text-decoration: none;
        border-radius: 20px;
        width: 100%;
        aspect-ratio: 1/1;

        position: relative;

        .navigation-icon {
            height: 80px;
            width: 80px;

            position: absolute;
            bottom: 18px;
            right: 18px;
        }
    }
}
</style>
