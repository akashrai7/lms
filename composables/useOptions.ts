// composables/useOptions.ts
import { ref } from 'vue'

type Option = { _id: string; name: string }

export const useOptions = () => {
  const genderOptions = ref<Option[]>([])
  const bloodGroupOptions = ref<Option[]>([])
  const nationalityOptions = ref<Option[]>([])
  const categoryOptions = ref<Option[]>([])
  const stateOptions = ref<Option[]>([])
  const districtOptions = ref<Option[]>([])

  const fetchOptions = async () => {
    const types = ['gender', 'bloodGroup', 'nationality', 'category', 'state', 'district']

    for (const type of types) {
      const { data, error } = await useFetch<{ data: Option[] }>(`/api/settings/options?type=${type}`)

      if (error.value) {
        console.error(`Failed to fetch ${type} options`, error.value)
        continue
      }

      const items = data.value?.data || []

      switch (type) {
        case 'gender': genderOptions.value = items; break
        case 'bloodGroup': bloodGroupOptions.value = items; break
        case 'nationality': nationalityOptions.value = items; break
        case 'category': categoryOptions.value = items; break
        case 'state': stateOptions.value = items; break
        case 'district': districtOptions.value = items; break
      }
    }
  }

  return {
    genderOptions,
    bloodGroupOptions,
    nationalityOptions,
    categoryOptions,
    stateOptions,
    districtOptions,
    fetchOptions
  }
}
