<script setup lang="ts">
defineEmits(['update:modelValue']);
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  // size: {
  //   type: String,
  //   default: 'full',
  //   validator: (value: string) => ['sm', 'md', 'full'].includes(value)
  // }
});
</script>
<template>
  <div>
    <input
      class="w-full border rounded-lg text-base text-[#575757] font-normal text-[11.91px] leading-[0.44px] py-2 px-[10px] bg-[#F8F8F9] outline-none focus:border-[#C49E5E] placeholder:text-[#575757] placeholder:text-base placeholder:font-normal placeholder:leading-3"
      :type="props.type"
      :value="props.modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :placeholder="props.placeholder"
    />
  </div>
</template>
<style scoped></style>
