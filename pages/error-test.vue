<script setup>
import { createError } from '#app';

throw createError({
  statusCode: 404,
  statusMessage: 'This page was intentionally errored for demonstration purposes.',
  fatal: true,
});
</script>

<template>
  <div>
    <h1>This content will not be displayed.</h1>
    <p>An error is thrown in the script setup.</p>
  </div>
</template>
