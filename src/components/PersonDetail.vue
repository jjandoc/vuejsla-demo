<template>
  <dl class="grid grid-cols-3 gap-2 max-w-sm" v-if="person">
    <dt class="font-bold">Name:</dt>
    <dd class="col-span-2">{{ person.name }}</dd>
    <dt class="font-bold">Gender:</dt>
    <dd class="col-span-2">{{ person.gender }}</dd>
    <dt class="font-bold">Birth Year:</dt>
    <dd class="col-span-2">{{ person.birth_year }}</dd>
    <dt class="font-bold">Height:</dt>
    <dd class="col-span-2">
      {{ person.height }}{{ person.height !== "unknown" ? "cm" : "" }}
    </dd>
    <dt class="font-bold">Mass:</dt>
    <dd class="col-span-2">
      {{ person.mass }}{{ person.mass !== "unknown" ? "kg" : "" }}
    </dd>
    <dt class="font-bold">Eye Color:</dt>
    <dd class="col-span-2">{{ person.eye_color }}</dd>
    <dt class="font-bold">Hair Color:</dt>
    <dd class="col-span-2">{{ person.hair_color }}</dd>
    <dt class="font-bold">Skin Color:</dt>
    <dd class="col-span-2">{{ person.skin_color }}</dd>
  </dl>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>
