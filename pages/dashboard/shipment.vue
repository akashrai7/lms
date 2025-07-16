<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-sm-6">
            <DashboardShipmentTotalIncome />
          </div>
          <div class="col-sm-6">
            <DashboardShipmentTotalShipment />
          </div>
          <div class="col-sm-6">
            <DashboardShipmentTotalCustomer />
          </div>
          <div class="col-sm-6">
            <DashboardShipmentTotalOrder />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <DashboardShipmentDeliveredChart />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-8">
        <div class="row">
          <div class="col-md-6">
            <DashboardShipmentAverageDeliveryTimeChart />
          </div>
          <div class="col-md-6">
            <DashboardShipmentLiveShipmentStatusChart />
          </div>
        </div>

        <DashboardShipmentTrackingOrder />
      </div>
      <div class="col-xxl-4">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <DashboardShipmentToTopCountries />
          </div>
          <div class="col-md-6 col-xxl-12">
            <DashboardShipmentChatContent />
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6 col-xxl-4">
        <DashboardShipmentTopShippingMethodsChart />
      </div>
      <div class="col-md-6 col-xxl-4">
        <DashboardShipmentTodaysShipmentsChart />
      </div>
      <div class="col-md-12 col-xxl-4">
        <DashboardShipmentOnTimeDeliveryChart />
      </div>
    </div>

    <DashboardShipmentList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShipmentPage",
});
</script>
