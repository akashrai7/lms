<template>
  <div class="m-auto m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img src="~/assets/images/login.jpg" class="rounded-3" alt="login" />
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
          <h3 class="fs-28 mb-2">Welcome back to user dashboard!</h3>
          <p class="fw-medium fs-16 mb-4">
            Sign In with social account or enter your details
          </p>
        
           <form @submit.prevent="handleLogin">
            <div class="form-group mb-4">
              <label class="label text-secondary">Email Address</label>
              <input
                v-model="email" 
                type="email"
                class="form-control h-55"
                placeholder="Enter Your Email Id"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label text-secondary">Password</label>
              <input
                v-model="password" 
                type="password"
                class="form-control h-55"
                placeholder="Enter Your Password"
              />
            </div>
            <div class="form-group mb-4">
             
            </div>
            <div class="form-group mb-4">
              <p>{{ message }}</p>
              <p>{{ error }}</p>
              <button type="submit" :disabled="loading"  class="btn btn-primary fw-medium py-2 px-3 w-100">
                 <i class="material-symbols-outlined text-white fs-20 me-2">login</i>
        {{'Login'}}
      </button>
            </div>

            <div class="form-group">
              <p>
                Reset Password?
              <NuxtLink to="/authentication/reset-password" class="text-blue-600 hover:underline">Click here</NuxtLink>
              </p>
              <p>
                Don’t have an account..
                <NuxtLink to="/authentication/register" class="text-blue-600 hover:underline">Sign in</NuxtLink>
             
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = reactive({
  email: '',
  password: ''
})

function getDeviceId(): string {
  let id = localStorage.getItem('device_id')
  if (!id) {
    id = 'dev-' + Math.random().toString(36).substring(2, 10)
    localStorage.setItem('device_id', id)
  }
  return id
}

type LoginResponse = {
  status: number;
  message: string;
  token: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    role: 'admin' | 'teacher' | 'student';
    registrationId: string;
  };
}


const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');
const message = ref('');
const loading = ref(false);
const token = localStorage.getItem('token');
const handleLogin = async () => {

    console.log('Login started');

  error.value = '';
  message.value = '';
  loading.value = true;

// if (!token) {
//     error.value = 'Token missing. Please login again modules/authentication/login/index.vue.';
//     return;
//   }

  try {
    const res = await $fetch<LoginResponse>('/api/auth/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
        deviceId: getDeviceId(),
      },
      headers: {
      Authorization: `Bearer ${token}`,
      },
    });

console.log('Login response:', res);

    if (res.status === 200 && 'token' in res) {
      localStorage.setItem('token', res.token);
      message.value = 'Login successful';

      const role = res.user.role;

      if (role === 'admin') {
        router.push('/admin/dashboard');
      } else if (role === 'teacher') {
        router.push('/dashboard');
      //  router.push('/teacher/dashboard');
      } else {
        router.push('/dashboard');
        // router.push('/student/dashboard');
      }
      
    } else {
      console.log('Invalid response format:', res); 
      error.value = res?.message || 'Login failed.';
    }
  } catch (err: any) {
     console.error('Login error:', err);
    error.value = err?.data?.statusMessage || 'Login failed';
  } finally {
    loading.value = false;
  }
};

</script>