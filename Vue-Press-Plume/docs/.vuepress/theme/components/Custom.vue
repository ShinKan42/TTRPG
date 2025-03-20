<script setup lang="ts">
import { ref } from "vue";
import { Analytics } from "@vercel/analytics/vue";
const message = ref("Hello World!");
</script>

<template>
	<Analytics />
	<div class="my-custom-content">
		{{ message }}
	</div>
</template>
