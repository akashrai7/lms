<template>
  <form>
    <div
      class="trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
    >
      <div class="trezo-card-content">
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                ID
              </label>
              <input type="text" class="form-control" placeholder="Enter ID" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter First Name"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Email Address
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Phone Number
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Disease Description
              </label>

              <TextEditor />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Appointment Date
              </label>
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-group mb-0">
              <label class="main-label d-block fw-medium text-black">
                Add Avatar
              </label>
              <div
                class="form-control h-100 text-center position-relative p-4 p-lg-5"
              >
                <div class="product-upload">
                  <label for="file-upload" class="file-upload mb-0">
                    <i
                      class="ri-folder-image-line bg-primary bg-opacity-10 p-2 rounded-1 text-primary"
                    ></i>
                    <span class="d-block text-body fs-14">
                      Drag and drop an image or
                      <span class="text-primary text-decoration-underline">
                        Browse
                      </span>
                    </span>
                  </label>
                  <input id="file-upload" type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="trezo-card card mb-4 border-radius d-block bg-transparent p-0 border-0 shadow-none"
    >
      <div class="trezo-card-content">
        <div class="form-btn-box">
          <button
            type="button"
            class="warn d-inline-block fw-medium border-radius border-0 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            class="primary d-inline-block fw-medium border-radius border-0 transition"
          >
            <span class="d-inline-block position-relative">
              <i class="material-symbols-outlined"> add </i>
              Add Patient
            </span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";

export default defineComponent({
  name: "AddPatient",
  components: {
    TextEditor,
  },
});
</script>

<style lang="scss" scoped></style>
