<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950"
  >
    <div class="w-full max-w-md p-6 bg-gray-200 rounded-lg shadow-md">
      <h2
        class="py-3 text-4xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 inline-block text-transparent bg-clip-text font-semibold"
      >
        Login
      </h2>
      <form class="mt-6" @submit.prevent="login">
        <div>
          <AppInput
            inputId="email"
            label="Email"
            :value="email"
            :onChange="emailOnChange"
            type="email"
            required
          />
        </div>
        <div class="mt-4">
          <AppInput
            inputId="password"
            label="Password"
            :value="password"
            :onChange="passwordOnChange"
            type="password"
            required
          />
        </div>
        <div class="mt-6">
          <AppButton type="submit" buttonText="Sign in" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";

const { dispatch } = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const flag = ref(0);

const emailOnChange = (value) => (email.value = value);
const passwordOnChange = (value) => (password.value = value);

const login = () => {
  if (!email.value || !password.value) {
    console.log("Please enter email and password");
    return;
  }

  dispatch("auth/fetchUserToken", {
    email: email.value,
    password: password.value,
  }).then(() => {
    flag.value++;
  });

  dispatch("user/setUser", {
    email: email.value,
    password: password.value,
  }).then(() => {
    flag.value++;
  });

  watch(flag, () => {
    if (flag.value === 2) {
      router.push("/");
    }
  });
};
</script>
