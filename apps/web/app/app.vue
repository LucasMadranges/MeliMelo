<template>
    <NuxtPage />
</template>

<style>
:root {
    --font-montserrat: 'Montserrat', sans-serif;
    --font-family: 'Roboto', sans-serif;

    --color-primary: #2b7bff;
    --color-primary-rgb: 43, 123, 255;
    --color-primary-dark: #235ecc;
    --color-secondary: #619dff;
    --color-black: #111;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: var(--font-family);
    background-color: rgba(var(--color-primary-rgb), 0.5);
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
