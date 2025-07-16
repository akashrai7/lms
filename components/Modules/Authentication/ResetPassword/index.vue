<template>
  <div class="m-auto m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img src="~/assets/images/reset.jpg" class="rounded-3" alt="reset" />
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
          <h3 class="fs-28 mb-2">Reset Password?</h3>
        
           <p class="fw-medium fs-16 mb-4">
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
          <form @submit.prevent="submitEmail">
            <div class="form-group mb-3">
              <label class="label text-secondary">Email Address</label>
              <input
                v-model="email"
                 type="email"
                class="form-control"
                placeholder="Enter your email"
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
                  <span>Send Reset Link</span>
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
const email = ref('')
const message = ref('')

async function submitEmail() {
  const res = await $fetch('/api/auth/reset-password', {
    method: 'POST',
    body: { email: email.value }
  })
  message.value = res.message
}
</script>
