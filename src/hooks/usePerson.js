import { computed } from "@vue/reactivity";
import usePeople from "./usePeople";

const usePerson = (id) => {
  const { data, fetchPerson } = usePeople();
  const person = computed(() => data[id]);

  if (!person.value) {
    fetchPerson(id);
  }

  return { person };
};

export default usePerson;
