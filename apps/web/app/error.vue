<script setup lang="ts">
import { Undo2 } from '@lucide/vue'
</script>

<template>
    <section>
        <h1>C'est pour bientôt...</h1>
        <span>Mais il n'y a rien à voir pour l'instant :)</span>
        <UiLink href="/">
            <Undo2 />
            Accueil
        </UiLink>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    text-align: center;
    height: 100dvh;

    span {
        margin-bottom: 12px;
    }
}
</style>
