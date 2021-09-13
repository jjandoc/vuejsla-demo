<template>
  <div>
    <div class="h-72 mb-8 mx-auto rounded-full overflow-hidden w-72">
      <img
        alt="Grogu"
        src="../assets/grogu.png"
        class="h-72 object-cover w-72"
      />
    </div>
    <h1 class="font-bold mb-4 text-2xl text-center">
      Characters from Star Wars
    </h1>
    <ul class="pl-8 list-disc">
      <li><RouterLink to="/a">Example A - with Vuex</RouterLink></li>
      <li>
        <RouterLink to="/b"
          >Example B - with Vuex & Renderless Components</RouterLink
        >
      </li>
      <li><RouterLink to="/c">Example C - with Composition API</RouterLink></li>
    </ul>
  </div>
</template>
