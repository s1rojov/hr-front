<script setup lang="ts">
import BaseInput from 'src/components/BaseInput/index.vue'
import { ref } from 'vue'
import { useAuthFn } from './composable';
const { enterToEmployee, hr, employee_code, enterToHr } = useAuthFn()
const selectRole = ref<any>('')
</script>
<template>
  <div class="absolute flex items-center top-0 left-0 bottom-0 right-0 justify-center m-auto">
    <div class="w-1/3">
      <div class="flex flex-col items-center">
        <BaseIcon name="logo" class="w-24 h-24 cursor-pointer" />
        <p class="text-2xl font-normal text-[#17181A] pt-5">{{ selectRole == '' ? "Rolni tanlang" : 'Tizimga kirish' }}
        </p>
      </div>
      <div class="mt-5" v-if="selectRole == ''">
        <BaseButton label="Hodim" class="w-full" @click="selectRole = 'employee'" />
        <BaseButton label="Hr manager" class="w-full mt-3" @click="selectRole = 'admin'" />
      </div>
      <div v-if="selectRole == 'employee'">
        <div>
          <p class="text-base text-zinc-950 pb-1">Login</p>
          <BaseInput type="text" placeholder="Your unique code" v-model="employee_code" />
        </div>
        <BaseButton label="Kirish" class="mt-3" @click="enterToEmployee" />
        <p class="underline mt-2 cursor-pointer" @click="selectRole = ''">Ortga</p>
      </div>
      <div class="flex flex-col gap-3" v-if="selectRole == 'admin'">
        <div>
          <p class="text-base text-zinc-950 pb-1">Login</p>
          <BaseInput type="text" placeholder="Your login" v-model="hr.login" />
        </div>
        <div>
          <p class="text-base text-zinc-950 pb-1">Password</p>
          <BaseInput type="text" placeholder="Your password" v-model="hr.password" />
        </div>
        <BaseButton label="Kirish" class="w-full" @click="enterToHr" />
        <p class="underline mt-2 cursor-pointer" @click="selectRole = ''">Ortga</p>
      </div>
    </div>
  </div>

</template>
<style scoped>
input[type='checkbox'] {
  @apply bg-[#C49E5E] border border-[#B8B4CC]/20 rounded-md;
}

.checkmark {
  @apply bg-white w-5 h-5 border border-[#B8B4CC]/20 rounded-md;
}

input:checked~.checkmark {
  @apply bg-[#C49E5E];
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

input:checked~.checkmark:after {
  display: block;
}

.checkmark:after {
  left: 7px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
