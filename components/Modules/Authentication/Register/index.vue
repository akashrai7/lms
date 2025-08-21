<template>
  <div class="m-auto m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img
          src="~/assets/images/register.jpg"
          class="rounded-3"
          alt="register"
        />
      </div>
      <div class="col-lg-6">
        <div class="mw-480 ms-lg-auto">
          <div class="d-inline-block mb-4">
            <img
              src="~/assets/images/logo.png"
              class="rounded-3 for-light-logo"
              alt="login"
            />
            <img
              src="~/assets/images/logo.png"
              class="rounded-3 for-dark-logo"
              alt="login"
            />
          </div>
          <h3 class="fs-28 mb-2">Register to Student/Teacher</h3>
          <!-- <p class="fw-medium fs-16 mb-4">
            Register with social account or enter your details
          </p>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-4">
              <a
                href="https://www.google.com/"
                target="_blank"
                class="btn btn-outline-secondary bg-transparent w-100 py-2 hover-bg mb-4"
                style="border-color: #d6dae1"
              >
                <img src="~/assets/images/google.svg" alt="google" />
              </a>
            </div>
            <div class="col-lg-4 col-sm-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="btn btn-outline-secondary bg-transparent w-100 py-2 hover-bg mb-4"
                style="border-color: #d6dae1"
              >
                <img src="~/assets/images/facebook2.svg" alt="facebook2" />
              </a>
            </div>
            <div class="col-lg-4 col-sm-4">
              <a
                href="https://www.apple.com/"
                target="_blank"
                class="btn btn-outline-secondary bg-transparent w-100 py-2 hover-bg mb-4"
                style="border-color: #d6dae1"
              >
                <img src="~/assets/images/apple.svg" alt="apple" />
              </a>
            </div>
          </div> -->

    <div v-if="error" style="background: #fdd; color: #900; padding: 10px; margin-bottom: 10px; border-radius: 4px;">
  {{ error }}
</div>

<div v-if="message" style="background: #dfd; color: #060; padding: 10px; margin-bottom: 10px; border-radius: 4px;">
  {{ message }}
</div>



          <form @submit.prevent="handleRegister">
            <div class="form-group mb-3">
              <label class="label text-secondary">First Name</label>
              <input
              v-model="firstName"
              type="text"
                class="form-control"
                placeholder="Enter your first name"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Last Name</label>
              <input
              v-model="lastName"
              type="text"
                class="form-control"
                placeholder="Enter your last name"
                autocomplete="name"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Mobile Number</label>
              <input 
                v-model="mobile"
                type="text"
                class="form-control"
                placeholder="Enter your mobile number"
                autocomplete="tel"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Email Address</label>
              <input 
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Enter your email address"
                autocomplete="off"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Date of Birth</label>
              <input
                v-model="dob"
                type="date"
                class="form-control"
                placeholder="Enter your date of birth"
              />
            </div>
             <div class="form-group mb-3">
              <label class="label text-secondary">User Type</label>
               <select v-model="role" class="form-control">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
               </select>
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Type password"
                autocomplete="new-password"
              />
            </div>
            <div class="form-group mb-3">
              <label class="label text-secondary">Confirm Password</label>
              <input
              v-model="confirmPassword"
                type="text"
                class="form-control"
                placeholder="Confirm password"
              />
            </div>
            <div class="form-group mb-3">
               <button :disabled="loading" type="submit" class="btn btn-primary fw-medium py-2 px-3 w-100">
                  {{ loading ? 'Registering...' : 'Register' }}
                </button>
            </div>
            <div class="form-group">
              
              <p>
                Already have an account?
                <NuxtLink
                  to="/authentication/login"
                  class="fw-medium text-primary text-decoration-none"
                >
                  Log In
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFetch } from '#app';

const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const mobile = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const dob = ref('');
const role = ref('student');

const loading = ref(false);
const message = ref('');
const error = ref('');

const handleRegister = async () => {
  error.value = '';
  message.value = '';

  if (!firstName.value || !lastName.value || !mobile.value || !email.value || !password.value || !confirmPassword.value || !dob.value || !role.value) {
    error.value = 'Please fill in all fields';
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }

  loading.value = true;

  const { data, error: registerError } = await useFetch('/api/auth/register', {
    method: 'POST',
    body: {
      firstName: firstName.value,
      lastName: lastName.value,
      mobile: mobile.value,
      email: email.value,
      password: password.value,
      dob: dob.value,
      role: role.value
    }
  });

  loading.value = false;

  if (registerError.value) {
    error.value = registerError.value.data?.message || 'Something went wrong';
  } else {
    message.value = data.value?.message || 'Registration successful';
    // Optionally redirect after success
    setTimeout(() => {
      router.push('/authentication/login');
    }, 2000);
  }
};
</script>
