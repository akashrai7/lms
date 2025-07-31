<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useOptions } from '~/composables/useOptions'
import { useToast } from 'vue-toastification'

const toast = useToast()

// Options Composables
const {
  genderOptions,
  bloodGroupOptions,
  nationalityOptions,
  categoryOptions,
  stateOptions,
  districtOptions,
  fetchOptions
} = useOptions()

onMounted(fetchOptions)

// Reactive form object
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  nationality: '',
  aadhaar: '',
  fatherName: '',
  motherName: '',
  guardianName: '',
  guardianContact: '',
  bloodGroup: '',
  category: '',
  disability: '',
  address: '',
  country: 'India',
  state: '',
  district: '',
  pinCode: '',
  dob: '',
  gender: '',
  schoolName: '',
  bio: '',
  photo: null as File | null,
})

// Handle file input change
const handleFileUpload = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files?.length) {
    form.photo = target.files?.[0] ?? null

  } else {
    form.photo = null
  }
}

// Fetch profile from API
const fetchProfile = async () => {
  try {
    const res = await $fetch('/api/user/profile')
    if (res?.statusCode === 200 && res?.data) {
      Object.assign(form, res.data) // form भर दो existing data से
    } else {
      toast.error(res?.message || 'Failed to load profile')
    }
  } catch (err) {
    toast.error('Error loading profile')
  }
}

// Update profile to API
const updateProfile = async () => {
  try {
    const res = await $fetch('/api/user/profile', {
      method: 'PATCH',
      body: form
    })

    if (res?.statusCode === 200) {
      toast.success('Profile updated successfully')
    } else {
      toast.error(res?.message || 'Update failed')
    }
  } catch (err) {
    toast.error('Error updating profile')
  }
}

// On page mount, fetch user profile
onMounted(fetchProfile)

</script>


<template>
   <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
  <form class="row g-4">

    <!-- First Name -->
    <div class="col-md-6">
      <label class="form-label">First Name <span class="text-danger">*</span></label>
      <input type="text" class="form-control" v-model="form.firstName" required />
    </div>

    <!-- Last Name -->
    <div class="col-md-6">
      <label class="form-label">Last Name</label>
      <input type="text" class="form-control" v-model="form.lastName" />
    </div>

    <!-- Father Name -->
    <div class="col-md-6">
      <label class="form-label">Father's Name</label>
      <input type="text" class="form-control" v-model="form.fatherName" />
    </div>

    <!-- Mother Name -->
    <div class="col-md-6">
      <label class="form-label">Mother's Name</label>
      <input type="text" class="form-control" v-model="form.motherName" />
    </div>

    <div class="col-md-6">
      <label class="form-label">Guardian's Name</label>
      <input type="text" class="form-control" v-model="form.guardianName" />
    </div>

    <div class="col-md-6">
      <label class="form-label">Guardian's Contact</label>
      <input type="text" class="form-control" v-model="form.guardianContact" />
    </div>

    <!-- Gender -->
       <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Gender</label>
              <div class="form-group position-relative">
                <select class="form-select form-control ps-5 h-55" v-model="form.gender">
                  <option value="" disabled selected>Select Gender</option>
                  <option v-for="item in genderOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
                </select>

                <i
                  class="ri-men-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>

    <!-- Blood Group -->
    <div class="col-md-6">
      <label class="form-label">Blood Group</label>
      <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select Blood Group</option>
  <option v-for="item in bloodGroupOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>

                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
    </div>
<div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Disability (Yes / No — if Yes, specify) </label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  v-model="form.disability"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>

    <!-- Date of Birth -->
    <div class="col-md-6">
      <label class="form-label">Date of Birth</label>
      <input type="date" class="form-control" v-model="form.dob" />
    </div>

    <!-- Aadhaar -->
    <div class="col-md-6">
      <label class="form-label">Aadhaar Number</label>
      <input type="text" class="form-control" v-model="form.aadhaar" placeholder="xxxx-xxxx-xxxx" />
    </div>

    <!-- Mobile -->
    <div class="col-md-6">
      <label class="form-label">Mobile <span class="text-danger">*</span></label>
      <input type="tel" class="form-control" v-model="form.mobile" required />
    </div>

    <!-- Email -->
    <div class="col-md-6">
      <label class="form-label">Email <span class="text-danger">*</span></label>
      <input type="email" class="form-control" v-model="form.email" required />
    </div>

    <!-- Nationality -->
    <div class="col-md-6">
      <label class="form-label">Nationality</label>
     <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select Nationality</option>
  <option v-for="item in nationalityOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>

                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
    </div>

    <!-- Category -->
    <div class="col-md-6">
      <label class="form-label">Category</label>
      <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select Category</option>
  <option v-for="item in categoryOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>
<i class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"></i>
    </div>
 <!-- Address -->
    <div class="col-12">
      <label class="form-label">Address</label>
      <textarea class="form-control" v-model="form.address" rows="3"></textarea>
    </div>

<div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Country</label>
              <div class="form-group position-relative">
                <select
                  class="form-select form-control ps-5 h-55"
                  aria-label="Default select example" 
                  v-model="form.country"
                >
                  <option selected value="India"  class="text-dark">India</option>
                </select>
                <i
                  class="ri-map-2-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>

    <!-- State -->
    <div class="col-md-6">
      <label class="form-label">State</label>
       <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select State</option>
  <option v-for="item in stateOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>
<i class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"></i>
  
    </div>

    <!-- District -->
    <div class="col-md-6">
      <label class="form-label">District</label>
       <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select District</option>
  <option v-for="item in districtOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>
<i class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"></i>
  
    </div>

     <!-- pincode -->
    <div class="col-md-6">
      <label class="form-label">Pin Code <span class="text-danger">*</span></label>
      <input type="email" class="form-control" v-model="form.pinCode" />
    </div>
   
    <!-- Photo Upload -->
    <div class="col-md-6">
      <label class="form-label">Profile Photo</label>
      <input type="file" class="form-control" @change="handleFileUpload" />
    </div>

    <!-- Submit Button -->
    <div class="col-12 text-end">
      <button type="submit" class="btn btn-primary">Save Profile</button>
    </div>

  </form>
    </div>
   </div>
</template>


<!-- <template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
       <OthersSettingsMenu /> 

      <div class="mb-4">
        <h4 class="fs-20 mb-1">Profile</h4>
        <p class="fs-15">Update your photo and personal details here.</p>
      </div>

      <form>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">First Name</label>
              <div class="form-group position-relative">
                <input
                    type="text"
                    class="form-control text-dark ps-5 h-55"
                    v-model="form.firstName"
                />
                <i
                  class="ri-user-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Last Name</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  v-model="form.lastName"
                />
                <i
                  class="ri-user-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Student's Email Address</label>
              <div class="form-group position-relative">
                <input
                  type="email"
                  class="form-control text-dark ps-5 h-55"
                  v-model="form.email"
                />
                <i
                  class="ri-mail-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Student's Mobile Number</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  v-model="form.mobile"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Nationality</label>
              <div class="form-group position-relative">
                 <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select Nationality</option>
  <option v-for="item in nationalityOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>

                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Aadhaar Number</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="+1 444 555 6699"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
           <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Father's Name</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
           <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Mother's Name</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"/>
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
           <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Guardian's Name (if different)</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="+1 444 555 6699"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
           <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Parent/Guardian Contact Number</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="+1 444 555 6699"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Blood Group</label>
              <div class="form-group position-relative">
               <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select Blood Group</option>
  <option v-for="item in bloodGroupOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>

                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Category</label>
              <div class="form-group position-relative">
               <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select Category</option>
  <option v-for="item in categoryOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>

                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Disability (Yes / No — if Yes, specify) </label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="+1 444 555 6699"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Address</label>
              <div class="form-group position-relative">
                <input
                  type="text"
                  class="form-control text-dark ps-5 h-55"
                  value="E.g. 84 S. Arrowhead Court Branford"
                />
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Country</label>
              <div class="form-group position-relative">
                <select
                  class="form-select form-control ps-5 h-55"
                  aria-label="Default select example"
                >
                  <option selected value="India"  class="text-dark">India</option>
                </select>
                <i
                  class="ri-map-2-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
           <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">State</label>
              <div class="form-group position-relative">
                <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select State</option>
 <option v-for="item in stateOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
</select>

                <i
                  class="ri-map-2-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
           <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">District</label>
              <div class="form-group position-relative">
                <select class="form-select form-control ps-5 h-55">
  <option value="" disabled selected>Select District</option>
  <option v-for="item in districtOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
                </select>
                <i
                  class="ri-map-2-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
           <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Pin Code</label>
              <div class="form-group position-relative">
                <input type="date"
                  class="form-control text-dark ps-5 h-55 text-gray-light" />
                <i
                  class="ri-map-2-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Date Of Birth</label>
              <div class="form-group position-relative">
                <input
                  type="date"
                  class="form-control text-dark ps-5 h-55 text-gray-light"
                />
                <i
                  class="ri-calendar-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Gender</label>
              <div class="form-group position-relative">
                <select class="form-select form-control ps-5 h-55" v-model="form.gender">
                  <option value="" disabled selected>Select Gender</option>
                  <option v-for="item in genderOptions" :key="item._id" :value="item._id">{{ item.name }}</option>
                </select>

                <i
                  class="ri-men-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">School Name</label>
              <div class="form-group position-relative">
                <input
                  type="text" class="form-control text-dark ps-5 h-55"/>
                <i
                  class="ri-phone-line position-absolute top-50 start-0 translate-middle-y fs-20 text-gray-light ps-20"
                ></i>
              </div>
            </div>
          </div>
          
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label class="label text-secondary">Bio Data :</label>
              <div class="form-group position-relative">
                <textarea
                  class="form-control ps-5 text-dark"
                  placeholder="Bio Data ... "
                  cols="30"
                  rows="5"
                ></textarea>
                <i
                  class="ri-information-line position-absolute top-3 start-0 fs-20 text-gray-light ps-20 pt-2"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div
              class="form-group mb-4 p-4 bg-body d-sm-flex justify-content-between align-items-center rounded-3"
            >
              <div class="d-sm-flex align-items-center mb-3 mb-sm-0 me-lg-3">
                <div class="me-md-5 pe-xxl-5 mb-3 mb-sm-0">
                  <h4 class="body-font fs-15 fw-semibold text-body">
                    Your photo
                  </h4>
                  <p>This will be displayed on your profile.</p>
                </div>
                <img
                  src="~/assets/images/user-70.png"
                  class="rounded-4 wh-75 ms-3 ms-lg-0 rounded-circle"
                  alt="user"
                />
              </div>

              <div class="d-flex ms-sm-3 ms-md-0">
                <button
                  class="btn bg-danger bg-opacity-10 text-danger fw-semibold"
                >
                  Delete
                </button>
                <button
                  class="btn bg-primary bg-opacity-10 text-primary fw-semibold ms-3"
                >
                  Update
                </button>
              </div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="form-group">
              <label class="label text-secondary"
                >File Upload - Product Gallery</label
              >
              <div
                class="form-control h-100 text-center position-relative p-4 p-lg-5"
              >
                <div class="product-upload">
                  <label for="file-upload" class="file-upload mb-0">
                    <i
                      class="ri-folder-image-line bg-primary bg-opacity-10 p-2 rounded-1 text-primary"
                    ></i>
                    <span class="d-block text-body fs-14"
                      >Drag and drop an image or
                      <span class="text-primary text-decoration-underline"
                        >Browse</span
                      ></span
                    >
                  </label>
                  <input id="file-upload" type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
<br></br>
       
        <div class="row">
         <div class="col-lg-12">
            <div class="d-flex flex-wrap gap-3">
              <button
                type="submit"
                class="btn btn-danger py-2 px-4 fw-medium fs-16 text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn-primary py-2 px-4 fw-medium fs-16"
              >
                <i class="ri-check-line text-white fw-medium"></i> Upload
                Profile
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template> -->

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountSettings",
});
</script>
