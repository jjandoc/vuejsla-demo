import { computed, readonly, reactive, ref } from 'vue';
import api from '@/services/api';
import getEntityId from '@/util/getEntityId';

const data = reactive({});
const hasFetchedAll = ref(false);

const usePeople = () => {
  const fetchPeople = async () => {
    const response = await api.fetchPeople();
    response.forEach((person) => {
      const id = getEntityId(person);
      // Note: Assigning a property to a `reactive` object directly will not
      // work with Vue 2. You will need to use the `set` workaround:
      // https://github.com/vuejs/composition-api#reactive
      // or you can instead have `data` be a ref and then reassign the entire
      // ref, similar to what's happening in the vuex store.
      data[id] = person;
    });
    hasFetchedAll.value = true;
  };
  const fetchPerson = async (id) => {
    const response = await api.fetchPerson(id);
    data[id] = response;
  };

  if (!hasFetchedAll.value) {
    fetchPeople();
  }

  const people = computed(() =>
    Object.values(data).sort((a, b) => {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    })
  );

  return { data: readonly(data), fetchPerson, hasFetchedAll, people };
};

export default usePeople;
