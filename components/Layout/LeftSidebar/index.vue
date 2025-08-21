<template>
  <div class="sidebar-area">
    <div class="logo position-relative">
      <NuxtLink
        to="/dashboard"
        class="d-block text-decoration-none position-relative"
      >
        <img src="~/assets/images/mono.png" alt="logo-icon" />
        <span class="logo-text fw-bold text-dark">AI GURUKL</span>
      </NuxtLink>
      <button
        class="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
        id="sidebar-burger-menu"
        @click="stateStoreInstance.onChange"
      >
        <XIcon class="x"></XIcon>
      </button>
    </div>

    <div class="layout-menu menu-vertical menu hover-scroll-bar">
      <ul class="menu-inner">
        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">MAIN</span>
        </li>
         <li class="menu-item">
          <NuxtLink to="/dashboard" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              dashboard
            </span>
            <span class="title">Dashboard</span>
          </NuxtLink>
        </li>
         <li class="menu-title small text-uppercase">
          <span class="menu-title-text">Education</span>
         </li>
         <li class="menu-item">
          <NuxtLink to="/lms/courses-list" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              dashboard
            </span>
            <span class="title">Courses</span>
          </NuxtLink>
        </li>
         <li class="menu-item">
          <NuxtLink to="/lms/courses-list" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              dashboard
            </span>
            <span class="title">Upcoming Courses</span>
          </NuxtLink>
        </li>


         <li class="menu-title small text-uppercase">
          <span class="menu-title-text">Evaluation</span>
         </li>
         <li class="menu-item">
          <NuxtLink to="#" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              dashboard
            </span>
            <span class="title">Certificates</span>
          </NuxtLink>
        </li>




         <li class="menu-title small text-uppercase">
          <span class="menu-title-text">Communication</span>
         </li>
         <li class="menu-item">
          <NuxtLink to="#" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              dashboard
            </span>
            <span class="title">Support</span>
          </NuxtLink>
        </li>



        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">System Settings</span>
        </li> 
         <li class="menu-item" :class="{ open: isOpen('lms') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('lms')"
          >
            <span class="material-symbols-outlined menu-icon">
              auto_stories
            </span>
            <span class="title">LMS</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('lms')">
            <li class="menu-item">
              <NuxtLink to="/lms/institute" class="menu-link">
                Institute
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/instituteType" class="menu-link">
                Institute type
              </NuxtLink>
            </li>
             <li class="menu-item">
              <NuxtLink to="/lms/affiliation-board" class="menu-link">
                Affiliation Board
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/training-mode" class="menu-link">
                Training Mode 
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/language" class="menu-link">
                Language
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/gender" class="menu-link">
                Gender
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/nationality" class="menu-link">
                Nationality
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/class" class="menu-link">
                Class
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/stream" class="menu-link">
                Stream 
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/section " class="menu-link">
                Section 
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/blood-group " class="menu-link">
                Blood Group 
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/category " class="menu-link">
                Category
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/courses-list" class="menu-link">
                Courses List
              </NuxtLink>
            </li>
          </ul>
        </li>


        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">SETTINGS</span>
        </li> 
        <li class="menu-item">
          <NuxtLink to="/my-profile" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">My Profile</span>
          </NuxtLink>
        </li>

        <li class="menu-item">
          <NuxtLink to="/settings/account-settings" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">Profile Settings</span>
          </NuxtLink>
        </li> 
        <li class="menu-item">
          <NuxtLink to="/settings/change-password" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">Update Password</span>
          </NuxtLink>
        </li> 

        <li class="menu-item" :class="{ open: isOpen('settings') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('settings')"
          >
            <span class="material-symbols-outlined menu-icon">settings</span>
            <span class="title">Settings</span>
          </a>
        </li>
        <li class="menu-item">
          <NuxtLink  @click="onLogout" class="menu-link">
            <span class="material-symbols-outlined menu-icon">logout</span>
            <span class="title">Logout</span>
          </NuxtLink>
        </li>
      </ul>
    </div>




  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import stateStore from "~/utils/store";
import { useLogout } from "@/composables/useLogout";

const { logout } = useLogout();

// Logout handler
const onLogout = () => logout();

// State store instance
const stateStoreInstance = stateStore;

// Reactive state to track which menu items are open
const openMenu = ref<string | null>(null);

// Method to toggle the menu items
const toggleMenu = (menu: string) => {
  openMenu.value = openMenu.value === menu ? null : menu;
};

// Method to check if a menu is open
const isOpen = (menu: string) => openMenu.value === menu;
</script>
