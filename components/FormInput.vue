<template>
  <div class="space-y-1.5">
    <label class="font-semibold" v-if="label">{{ label }} </label>
    <input
      class="w-full p-2 rounded-xl border border-gray-100 focus:border-gray-300 focus:outline-none transition ease-in placeholder-gray-500 text-sm"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="onInput"
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
const emit = defineEmits();

const onInput = function (e) {
  emit("update:modelValue", e.target.value);
};
</script>
