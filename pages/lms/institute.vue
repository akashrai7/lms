<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useToast } from 'vue-toastification'
import { computed } from 'vue'

const toast = useToast()

const showForm = ref(false)
const mode = ref<'add' | 'edit'>('add')
const institutes = ref<any[]>([])
const selectedId = ref<string | null>(null)

const form = reactive({
  instituteName: '',
  instituteId: '',
  typeOfInstitute: '',
  affiliationBoard: '',
  principalName: '',
  officialMobile: '',
  alternateMobile: '',
  officialEmail: '',
  landline: '',
  website: '',
  address: '',
  city: '',
  state: '',
  district: '',
  pincode: '',
  trainingMode: '',
  trainingLanguage: '',
  computerLabAvailable: 'No',
})

// Pagination state
const currentPage = ref(1)
const pageSize = ref(5); // or whatever value you prefer

// Computed paginated data
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return institutes.value.slice(start, end)
})

// Total pages for pagination
const totalPages = computed(() => {
  return Math.ceil(institutes.value.length / pageSize.value)
})




// Dropdown options
const typeOptions = ref<any[]>([])
const boardOptions = ref<any[]>([])
const stateOptions = ref<any[]>([])
const districtOptions = ref<any[]>([])
const trainingModeOptions = ref([
  { id: 'offline', name: 'Offline' },
  { id: 'online', name: 'Online' },
  { id: 'hybrid', name: 'Hybrid' }
])
const trainingLangOptions = ref([
  { id: 'english', name: 'English' },
  { id: 'hindi', name: 'Hindi' },
  { id: 'both', name: 'Both' }
])

// Dropdown fetching
const fetchDropdowns = async () => {
  try {
    type SettingResponse = {
      status: boolean
      data: { id: string; name: string }[]
    }

    const [types, boards, states] = await Promise.all([
      $fetch<SettingResponse>('/api/institute-type', { credentials: 'include' }),
      $fetch<SettingResponse>('/api/affiliation-board', { credentials: 'include' }),
      $fetch<SettingResponse>('/api/settings/state', { credentials: 'include' }),
    ])

    typeOptions.value = types.data
    boardOptions.value = boards.data
    stateOptions.value = states.data
  } catch (error) {
    toast.error('Failed to load dropdowns')
  }
}

type ApiResponse<T> = {
  status: boolean
  data: T
  message?: string
}

const fetchDistricts = async () => {
  if (!form.state) return
  try {
    const res = await $fetch<ApiResponse<any[]>>('/api/settings/district', {
      method: 'POST',
      body: { state: form.state },
      credentials: 'include',
    })
    districtOptions.value = res.data
  } catch {
    toast.error('Failed to load districts')
  }
}

watch(() => form.state, fetchDistricts)

// Institutes fetch
const fetchInstitutes = async () => {
  try {
    const res = await $fetch<ApiResponse<any[]>>('/api/institute/index.get.ts', { credentials: 'include' })
    institutes.value = res.data ?? []
  } catch {
    toast.error('Failed to load institutes')
  }
}

const resetForm = () => {
  Object.assign(form, {
    instituteName: '',
    instituteId: '',
    typeOfInstitute: '',
    affiliationBoard: '',
    principalName: '',
    officialMobile: '',
    alternateMobile: '',
    officialEmail: '',
    landline: '',
    website: '',
    address: '',
    city: '',
    state: '',
    district: '',
    pincode: '',
    trainingMode: '',
    trainingLanguage: '',
    computerLabAvailable: 'No',
  })
  selectedId.value = null
  showForm.value = false
}

const onEdit = (inst: any) => {
  Object.assign(form, { ...inst })
  selectedId.value = inst._id
  mode.value = 'edit'
  showForm.value = true
}

const onSubmit = async () => {
  try {
    const url = selectedId.value
      ? `/api/institute/${selectedId.value}`
      : '/api/institute'
    const method = selectedId.value ? 'PUT' : 'POST'

    await $fetch(url, {
      method,
      body: form,
      credentials: 'include'
    })

    toast.success(`Institute ${selectedId.value ? 'updated' : 'added'} successfully`)
    resetForm()
    fetchInstitutes()
  } catch (err) {
    console.error('Error in onSubmit:', err);
    toast.error('Something went wrong')
  }
}

onMounted(() => {
  fetchDropdowns()
  fetchInstitutes()
})
</script>

<template>
  <div class="p-4">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Institute Management</h2>
      <button @click="() => { resetForm(); showForm = true }" class="bg-blue-600 text-white px-4 py-2 rounded">+ Add Institute</button>
    </div>

    <!-- Form -->
    <div v-if="showForm" class="bg-white p-4 shadow rounded mb-6">
      <h3 class="text-lg font-semibold mb-3">{{ mode === 'add' ? 'Add Institute' : 'Edit Institute' }}</h3>
      <form @submit.prevent="onSubmit" class="grid grid-cols-2 gap-4">
        <div><label>Institute Name</label><input v-model="form.instituteName" class="input" /></div>
        <div><label>Institute ID</label><input v-model="form.instituteId" class="input" /></div>
        <div>
          <label>Type of Institute</label>
          <select v-model="form.typeOfInstitute" class="input">
            <option v-for="type in typeOptions" :key="type.id" :value="type.id">{{ type.name }}</option>
          </select>
        </div>
        <div>
          <label>Affiliation Board</label>
          <select v-model="form.affiliationBoard" class="input">
            <option v-for="board in boardOptions" :key="board.id" :value="board.id">{{ board.name }}</option>
          </select>
        </div>
        <div><label>Principal Name</label><input v-model="form.principalName" class="input" /></div>
        <div><label>Official Mobile</label><input v-model="form.officialMobile" class="input" /></div>
        <div><label>Alternate Mobile</label><input v-model="form.alternateMobile" class="input" /></div>
        <div><label>Email</label><input v-model="form.officialEmail" class="input" /></div>
        <div><label>Landline</label><input v-model="form.landline" class="input" /></div>
        <div><label>Website</label><input v-model="form.website" class="input" /></div>
        <div><label>Address</label><input v-model="form.address" class="input" /></div>
        <div><label>City</label><input v-model="form.city" class="input" /></div>
        <div>
          <label>State</label>
          <select v-model="form.state" class="input">
            <option v-for="state in stateOptions" :key="state.id" :value="state.id">{{ state.name }}</option>
          </select>
        </div>
        <div>
          <label>District</label>
          <select v-model="form.district" class="input">
            <option v-for="dist in districtOptions" :key="dist.id" :value="dist.id">{{ dist.name }}</option>
          </select>
        </div>
        <div><label>Pincode</label><input v-model="form.pincode" class="input" /></div>
        <div>
          <label>Training Mode</label>
          <select v-model="form.trainingMode" class="input">
            <option v-for="mode in trainingModeOptions" :key="mode.id" :value="mode.id">{{ mode.name }}</option>
          </select>
        </div>
        <div>
          <label>Training Language</label>
          <select v-model="form.trainingLanguage" class="input">
            <option v-for="lang in trainingLangOptions" :key="lang.id" :value="lang.id">{{ lang.name }}</option>
          </select>
        </div>
        <div>
          <label>Computer Lab Available</label>
          <select v-model="form.computerLabAvailable" class="input">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </form>
      <div class="mt-4 flex gap-3">
        <button @click="onSubmit" class="bg-green-600 text-white px-4 py-2 rounded">Save</button>
        <button @click="() => showForm = false" class="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white shadow rounded p-4">
      <table class="w-full table-auto text-left">
        <thead class="bg-gray-100">
          <tr>
            <th class="p-2">#</th>
            <th class="p-2">Name</th>
            <th class="p-2">Type</th>
            <th class="p-2">Board</th>
            <th class="p-2">Email</th>
            <th class="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(inst, idx) in paginatedData" :key="inst._id">
            <td class="p-2">{{ idx + 1 + (currentPage - 1) * pageSize }}</td>
            <td class="p-2">{{ inst.instituteName }}</td>
            <td class="p-2">{{ inst.typeOfInstitute }}</td>
            <td class="p-2">{{ inst.affiliationBoard }}</td>
            <td class="p-2">{{ inst.officialEmail }}</td>
            <td class="p-2">
              <button @click="onEdit(inst)" class="text-blue-600">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4">
        <button :disabled="currentPage === 1" @click="currentPage--" class="px-3 py-1 border rounded">Prev</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-3 py-1 border rounded">Next</button>
      </div>
    </div>
  </div>
</template>
