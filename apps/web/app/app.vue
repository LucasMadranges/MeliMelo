<template>
    <NuxtPage />
</template>

<style>
:root {
    --font-montserrat: 'Montserrat', sans-serif;
    --font-family: 'Roboto', sans-serif;

    --color-primary: #e3ca9e;
    --color-black: #111;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: var(--font-family);
    background-color: var(--color-primary);
}

h1 {
    font-family: var(--font-montserrat);
    font-size: 28px;
}

h2 {
    font-family: var(--font-montserrat);
    font-size: 24px;
}
</style>
