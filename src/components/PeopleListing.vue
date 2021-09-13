<template>
  <div>
    <ul class="grid gap-2 grid-cols-2 md:grid-cols-4">
      <li v-for="person in people" :key="person.name">
        <RouterLink :to="`${$route.path}/${getEntityId(person)}`">{{
          person.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import getEntityId from "@/util/getEntityId";

export default {
  props: {
    people: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getEntityId,
  },
};
</script>
