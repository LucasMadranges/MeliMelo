<template>
    <section>
        <NuxtLink
            class="navigation-link"
            v-for="item in items"
            :to="item.path"
            :key="item.id"
        >
            <h3>{{ item.label }}</h3>
            <span>{{ item.icon }}</span>
        </NuxtLink>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        id: 1,
        label: 'Budget',
        icon: 'Icone',
        path: '/budgets',
    },
    {
        id: 2,
        label: 'Animaux',
        icon: 'Icone',
        path: '/animals',
    },
    {
        id: 3,
        label: 'Voitures',
        icon: 'Icone',
        path: '/cars',
    },
    {
        id: 4,
        label: 'Courses',
        icon: 'Icone',
        path: '/courses',
    },
    {
        id: 5,
        label: 'Frigo',
        icon: 'Icone',
        path: '/fridge',
    },
    {
        id: 6,
        label: 'Adresses',
        icon: 'Icone',
        path: '/address',
    },
]
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    background-color: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 12px;

    .navigation-link {
        display: flex;
        flex-direction: column;
        gap: 4px;

        background-color: var(--color-secondary);
        color: black;
        padding: 12px;
        text-decoration: none;
        border-radius: 8px;
        width: 100%;
        aspect-ratio: 1/1;
    }
}
</style>
