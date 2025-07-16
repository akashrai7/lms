<template>
  <div class="m-auto m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img src="~/assets/images/forgot.jpg" class="rounded-3" alt="forgot" />
      </div>
      <div class="col-lg-6">
        <div class="mw-480 ms-lg-auto">
          <div class="d-inline-block mb-4">
            <img
              src="~/assets/images/logo.svg"
              class="rounded-3 for-light-logo"
              alt="login"
            />
            <img
              src="~/assets/images/white-logo.svg"
              class="rounded-3 for-dark-logo"
              alt="login"
            />
          </div>
          <h3 class="fs-28 mb-2">Reset your password?</h3>
          <p class="fw-medium fs-16 mb-4">
            Enter your new password.
          </p> 
            <form @submit.prevent="reset">
            <div class="form-group mb-3">
              <label class="label text-secondary">New Password</label>
              <input
                v-model="password" 
                type="password"
                class="form-control"
                placeholder="Type your new password"
              />
            </div>
            <p>{{ message }}</p>
            <div class="form-group mb-3">
              <button
                type="submit"
                class="btn btn-primary fw-medium py-2 px-3 w-100"
              >
                <div
                  class="d-flex align-items-center justify-content-center py-1"
                >
                  <i class="material-symbols-outlined text-white fs-20 me-2">
                    autorenew
                  </i>
                  <span>Reset</span>
                </div>
              </button>
            </div>
            <div class="form-group">
              <p>
                Back to
                <NuxtLink
                  to="/authentication/login"
                  class="fw-medium text-primary text-decoration-none"
                >
                  Login
                </NuxtLink>
              </p>
            </div>
          </form> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const password = ref('')
const message = ref('')

async function reset() {
  const res = await $fetch('/api/auth/forget-password', {
    method: 'POST',
    body: {
      token: route.query.token,
      newPassword: password.value
    }
  })
  message.value = res.message
}
</script>