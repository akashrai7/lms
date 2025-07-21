// plugins/auth.client.ts
export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('token') // Nuxt useCookie will get token from cookie (client-only)

  if (token.value) {
    nuxtApp.$fetch = $fetch.create({
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
  }
})
