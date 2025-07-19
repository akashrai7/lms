<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFetch } from '#app'; // Nuxt 3 composable

const message = ref('');
const error = ref('');

interface User {
  firstName: string;
  email: string;
  role: string;
}
const userData = ref<User | null>(null);

interface DashboardResponse {
  message: string;
  user: {
    firstName: string;
    email: string;
    role: string;
  };
}
onMounted(() => {
  fetchDashboardData();
});
// const token = useCookie('token').value;
const token = localStorage.getItem("token");
console.log('TOKEN:', token);

const fetchDashboardData = async () => {

const { data, error: fetchError } = await useFetch<DashboardResponse>('/api/dashboard', {
  headers: {
    Authorization: `Bearer ${token}`
  },
  server: false,
  
});
console.log("API Response:", data, error);
if (fetchError.value) {
    error.value = fetchError.value.message;
  } else if (data.value) {
    userData.value = data.value.user;
    message.value = data.value.message;
  }

};
</script>

<template>
  <div class="main-content-container overflow-hidden">
    <div class="row justify-content-center">
      <div class="col-xxl-6">
        <DashboardLMSWelcomeDashboard />
      </div>
      <div class="col-xxl-6">
        <div class="p-4">
    <div v-if="error" class="bg-red-100 text-red-700 p-3 rounded mb-4">{{ error }}</div>
    <div v-if="message" class="bg-green-100 text-green-700 p-3 rounded mb-4">{{ message }}</div>

    <div v-if="userData">
      <h2 class="text-xl font-bold mb-2">Welcome, {{ userData.firstName || userData.email }}</h2>
      <p><strong>Role:</strong> {{ userData.role }}</p>
      <p><strong>Email:</strong> {{ userData.email }}</p>
    </div>
  </div>
      </div>
      <div class="col-xxl-6">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-4">
            <DashboardLMSTotalCourses />
          </div>
          <div class="col-lg-4 col-sm-4">
            <DashboardLMSTotalEnrolled />
          </div>
          <div class="col-lg-4 col-sm-4">
            <DashboardLMSTotalMentors />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-7 col-lg-6">
        <DashboardLMSStudentsInterestedTopicsChart />
      </div>
      <div class="col-xxl-5 col-lg-6">
        <DashboardLMSTopInstructors />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-4">
        <DashboardLMSStudentsProgress />
      </div>
      <div class="col-xxl-4 col-md-6">
        <DashboardLMSGroupLessons />
      </div>
      <div class="col-xxl-4 col-md-6">
        <DashboardLMSEnrolledByCountries />
      </div>
    </div>
    <DashboardLMSCourses />
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <DashboardLMSCoursesSalesChart />
      </div>
      <div class="col-lg-4">
        <DashboardLMSTimeSpentChart />
      </div>
      <div class="col-lg-4">
        <DashboardLMSOurTopCourses />
      </div>
    </div>
  </div>
</template>


