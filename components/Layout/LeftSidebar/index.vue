<template>
  <div class="sidebar-area">
    <div class="logo position-relative">
      <NuxtLink
        to="/dashboard"
        class="d-block text-decoration-none position-relative"
      >
        <img src="~/assets/images/logo-icon.png" alt="logo-icon" />
        <span class="logo-text fw-bold text-dark">Trezo</span>
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
        <!-- <li class="menu-item" :class="{ open: isOpen('dashboard') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('dashboard')"
          >
            <span class="material-symbols-outlined menu-icon">dashboard</span>
            <span class="title">Dashboard</span>
           
          </a>

          <ul class="menu-sub" v-show="isOpen('dashboard')">
            <li class="menu-item">
              <NuxtLink to="/dashboard" class="menu-link"> LMS </NuxtLink>
            </li>
          </ul>
        </li> -->

        <!-- <li class="menu-item" :class="{ open: isOpen('front-pages') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('front-pages')"
          >
            <span class="material-symbols-outlined menu-icon">note_stack</span>
            <span class="title">Front Pages</span>
          </a>
          <ul class="menu-sub" v-show="isOpen('front-pages')">
            <li class="menu-item">
              <NuxtLink to="/" class="menu-link"> Home </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/features" class="menu-link"> Features </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/our-team" class="menu-link"> Our Team </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/faq" class="menu-link"> FAQ’s </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/contact" class="menu-link"> Contact </NuxtLink>
            </li>
          </ul>
        </li> -->

        <!-- <li class="menu-title small text-uppercase">
          <span class="menu-title-text">APPS</span>
        </li>

        <li class="menu-item">
          <NuxtLink to="/apps/calendar" class="menu-link">
            <span class="material-symbols-outlined menu-icon">date_range</span>
            <span class="title">Calendar</span>
          </NuxtLink>
        </li>

        <li class="menu-item">
          <NuxtLink to="/apps/to-do-list" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              format_list_bulleted
            </span>
            <span class="title">To Do List</span>
          </NuxtLink>
        </li> -->

        <!-- <li class="menu-item">
          <NuxtLink to="/apps/contacts" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              contact_page
            </span>
            <span class="title">Contacts</span>
          </NuxtLink>
        </li> -->

        <!-- <li class="menu-item">
          <NuxtLink to="/apps/chat" class="menu-link">
            <span class="material-symbols-outlined menu-icon">chat</span>
            <span class="title">Chat</span>
          </NuxtLink>
        </li> -->

        <!-- <li class="menu-item" :class="{ open: isOpen('email') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('email')"
          >
            <span class="material-symbols-outlined menu-icon">mail</span>
            <span class="title">Email</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('email')">
            <li class="menu-item">
              <NuxtLink to="/apps/email/inbox" class="menu-link">
                Inbox
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/compose" class="menu-link">
                Compose
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/read-email" class="menu-link">
                Read Email
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/snoozed" class="menu-link">
                Snoozed
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/draft" class="menu-link">
                Draft
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/sent-mail" class="menu-link">
                Sent Mail
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/trash-email" class="menu-link">
                Trash
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/spam" class="menu-link">
                Spam
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/starred" class="menu-link">
                Starred
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/apps/email/important" class="menu-link">
                Important
              </NuxtLink>
            </li>
          </ul>
        </li> -->


        <!-- <li class="menu-title small text-uppercase">
          <span class="menu-title-text">PAGES</span>
        </li>

       

         <li class="menu-item" :class="{ open: isOpen('helpDesk') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('helpDesk')"
          >
            <span class="material-symbols-outlined menu-icon">support</span>
            <span class="title">Help Desk</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('helpDesk')">
            <li class="menu-item">
              <NuxtLink to="/help-desk/tickets" class="menu-link">
                Tickets
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/help-desk/ticket-details" class="menu-link">
                Ticket Details
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/help-desk/agents" class="menu-link">
                Agents
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/help-desk/reports" class="menu-link">
                Reports
              </NuxtLink>
            </li>
          </ul>
        </li> 

     
        <li class="menu-item" :class="{ open: isOpen('invoice') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('invoice')"
          >
            <span class="material-symbols-outlined menu-icon">
              content_paste
            </span>
            <span class="title">Invoice</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('invoice')">
            <li class="menu-item">
              <NuxtLink to="/invoices/invoice-list" class="menu-link">
                Invoice List
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/invoices/invoice-details" class="menu-link">
                Invoice Details
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/invoices/create-invoice" class="menu-link">
                Create Invoice
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/invoices/edit-invoice" class="menu-link">
                Edit Invoice
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('users') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('users')"
          >
            <span class="material-symbols-outlined menu-icon">group_add</span>
            <span class="title">Users</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('users')">
            <li class="menu-item">
              <NuxtLink to="/users/team-members" class="menu-link">
                Team Members
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/users/users-list" class="menu-link">
                Users List
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/users/add-user" class="menu-link">
                Add User
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('profile') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('profile')"
          >
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">Profile</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('profile')">
            <li class="menu-item">
              <NuxtLink to="/profile/user-profile" class="menu-link">
                User Profile
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/profile/teams" class="menu-link"> Teams </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/profile/my-projects" class="menu-link">
                Projects
              </NuxtLink>
            </li>
          </ul>
        </li> -->
<!-- 
        

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">MODULES</span>
        </li>

        <li class="menu-item" :class="{ open: isOpen('icons') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('icons')"
          >
            <span class="material-symbols-outlined menu-icon">
              add_reaction
            </span>
            <span class="title">Icons</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('icons')">
            <li class="menu-item">
              <NuxtLink to="/icons/material-icons" class="menu-link">
                Material Icons
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/icons/feathericon" class="menu-link">
                Feathericon
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/icons/remixicon" class="menu-link">
                Remixicon
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('uiElements') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('uiElements')"
          >
            <span class="material-symbols-outlined menu-icon">
              gallery_thumbnail
            </span>
            <span class="title">UI Elements</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('uiElements')">
            <li class="menu-item">
              <NuxtLink to="/ui-elements/alerts" class="menu-link">
                Alerts
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/avatar" class="menu-link">
                Avatar
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/buttons" class="menu-link">
                Buttons
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/badges" class="menu-link">
                Badges
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/cards" class="menu-link">
                Cards
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/carousels" class="menu-link">
                Carousels
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/dropdowns" class="menu-link">
                Dropdowns
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/grids" class="menu-link">
                Grids
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/images" class="menu-link">
                Images
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/list" class="menu-link">
                List
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/modals" class="menu-link">
                Modals
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/navs" class="menu-link">
                Navs
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/paginations" class="menu-link">
                Paginations
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/popover-tooltips" class="menu-link">
                Popover Tooltips
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/progress" class="menu-link">
                Progress
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/spinners" class="menu-link">
                Spinners
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/tabs" class="menu-link">
                Tabs
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/accordions" class="menu-link">
                Accordions
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/date-time-picker" class="menu-link">
                Date/Time Picker
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ui-elements/videos" class="menu-link">
                Videos
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('tables') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('tables')"
          >
            <span class="material-symbols-outlined menu-icon">table</span>
            <span class="title">Tables</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('tables')">
            <li class="menu-item">
              <NuxtLink to="/tables/basic-table" class="menu-link">
                Basic Table
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/tables/data-tables" class="menu-link">
                Data Table
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('forms') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('forms')"
          >
            <span class="material-symbols-outlined menu-icon">clarify</span>
            <span class="title">Forms</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('forms')">
            <li class="menu-item">
              <NuxtLink to="/forms/basic-elements" class="menu-link">
                Basic Elements
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/forms/advanced-elements" class="menu-link">
                Advanced Elements
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/forms/validation" class="menu-link">
                Validation
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/forms/wizard" class="menu-link"> Wizard </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/forms/editors" class="menu-link">
                Editors
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/forms/file-upload" class="menu-link">
                File Upload
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <NuxtLink to="/apex-charts" class="menu-link">
            <span class="material-symbols-outlined menu-icon">donut_large</span>
            <span class="title">Apex Charts</span>
          </NuxtLink>
        </li>

        <li class="menu-item" :class="{ open: isOpen('authentication') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('authentication')"
          >
            <span class="material-symbols-outlined menu-icon">lock</span>
            <span class="title">Authentication</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('authentication')">
            <li class="menu-item">
              <NuxtLink to="/authentication/login" class="menu-link">
                Login
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/register" class="menu-link">
                Register
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/reset-password" class="menu-link">
                Reset Password
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/forget-password" class="menu-link">
                Forget Password
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/lock-screen" class="menu-link">
                Lock Screen
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/logout" class="menu-link">
                Log Out
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/confirm-mail" class="menu-link">
                Confirm Mail
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('extraPages') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('extraPages')"
          >
            <span class="material-symbols-outlined menu-icon">
              featured_video
            </span>
            <span class="title">Extra Pages</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('extraPages')">
            <li class="menu-item">
              <NuxtLink to="/extra-pages/pricing-plan" class="menu-link">
                Pricing Plan
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/faq" class="menu-link"> FAQ </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/timeline" class="menu-link">
                Timeline
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/animation" class="menu-link">
                Animation
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/clip-board" class="menu-link">
                Clip Board
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/drag-drop" class="menu-link">
                Drag & Drop
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/range-slider" class="menu-link">
                Range Slider
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/ratings" class="menu-link">
                Ratings
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/toasts" class="menu-link">
                Toasts
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/check-radio" class="menu-link">
                Check & Radio
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/select" class="menu-link">
                Select
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/scrollbar" class="menu-link">
                Scrollbar
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/typography" class="menu-link">
                Typography
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/gallery" class="menu-link">
                Gallery
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/search" class="menu-link">
                Search
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/extra-pages/blank-page" class="menu-link">
                Blank Page
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('errors') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('errors')"
          >
            <span class="material-symbols-outlined menu-icon">chat_error</span>
            <span class="title">Errors</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('errors')">
            <li class="menu-item">
              <NuxtLink to="/error/internal-error" class="menu-link">
                Internal Error
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <NuxtLink to="/widgets" class="menu-link">
            <span class="material-symbols-outlined menu-icon">widgets</span>
            <span class="title">Widgets</span>
          </NuxtLink>
        </li>

        <li class="menu-item">
          <NuxtLink to="/google-map" class="menu-link">
            <span class="material-symbols-outlined menu-icon">map</span>
            <span class="title">Google Map</span>
          </NuxtLink>
        </li>

        <li class="menu-item">
          <NuxtLink to="/notification" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              notifications
            </span>
            <span class="title">Notification</span>
          </NuxtLink>
        </li>

        <li class="menu-item">
          <NuxtLink to="/members" class="menu-link">
            <span class="material-symbols-outlined menu-icon">group</span>
            <span class="title">Members</span>
          </NuxtLink>
        </li>-->
        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">SETTINGS</span>
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
            <li class="menu-item">
              <NuxtLink to="/lms/course-details" class="menu-link">
                Course Details
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/lesson-preview" class="menu-link">
                Lesson Preview
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/create-course" class="menu-link">
                Create Course
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/edit-course" class="menu-link">
                Edit Course
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/lms/instructors" class="menu-link">
                Instructors
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">OTHERS</span>
        </li> 
        <li class="menu-item">
          <NuxtLink to="/my-profile" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">My Profile</span>
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

          <ul class="menu-sub" v-show="isOpen('settings')">
            <li class="menu-item">
              <NuxtLink to="/settings/account-settings" class="menu-link">
                Account Settings
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/settings/change-password" class="menu-link">
                Change Password
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/settings/connections" class="menu-link">
                Connections
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/settings/privacy-policy" class="menu-link">
                Privacy Policy
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/settings/terms-conditions" class="menu-link">
                Terms & Conditions
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <NuxtLink  @click="onLogout" class="menu-link">
            <span class="material-symbols-outlined menu-icon">logout</span>
            <span class="title">Logout</span>
          </NuxtLink>
          
        </li>

        <!-- <li class="menu-item" :class="{ open: isOpen('multiLevelMenu') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('multiLevelMenu')"
          >
            <span class="material-symbols-outlined menu-icon">
              keyboard_arrow_down
            </span>
            <span class="title">Multi Level Menu</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('multiLevelMenu')">
            <li
              class="menu-item after-sub-menu menu-level"
              :class="{ open: isOpen('levelOne') }"
            >
              <a
                href="javascript:void(0);"
                class="menu-link menu-toggle"
                @click="toggleMenu('levelOne')"
              >
                <span class="title">Level One</span>
              </a>
              <ul class="menu-sub" v-show="isOpen('levelOne')">
                <li class="menu-item">
                  <NuxtLink to="/#" class="menu-link"> Level Three </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </li> -->
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
