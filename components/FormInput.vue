<template>
  <div class="space-y-1.5">
    <label v-if="label">{{ label }} </label>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="w-full p-2 rounded-xl border border-gray-100 focus:border-gray-300 focus:outline-none transition ease-in placeholder-gray-500 text-sm"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: [String, Number, Object],
    default: "text",
  },
  modelValue: {
    require: true,
    type: [String, Number, Object],
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});

// const onInput = function (e) {
//   emit("update:modelValue", e.target.value);
// };
</script>
