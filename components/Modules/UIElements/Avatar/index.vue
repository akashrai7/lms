<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-xxl-4">
      <ModulesUIElementsAvatarSingleUserExample />
    </div>
    <div class="col-lg-6 col-xxl-4">
      <ModulesUIElementsAvatarGroupUserExample />
    </div>
    <div class="col-lg-6 col-xxl-4">
      <ModulesUIElementsAvatarSingleUserWithBadgeExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <ModulesUIElementsAvatarSizeRoundedCircleExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <ModulesUIElementsAvatarSizeSimpleRoundedExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <ModulesUIElementsAvatarTextAvatarSizeRoundedCircleExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <ModulesUIElementsAvatarTextAvatarSizeSimpleRoundedExample />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Avatar",
});
</script>
