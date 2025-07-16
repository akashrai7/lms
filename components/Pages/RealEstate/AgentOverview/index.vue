<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 rounded-3 bg-white mb-4">
        <div class="card-body p-4">
          <h3 class="mb-3">About Johnson</h3>
          <p>
            With over a decade of experience in the real estate market, John
            Smith has built a reputation for his in-depth knowledge of
            residential and commercial properties. His commitment to client
            satisfaction, combined with an extensive network, ensures a smooth
            and efficient process, whether buying or selling.
          </p>
          <p class="mb-md-5 mb-4">
            John’s approach focuses on understanding each client’s unique needs
            and goals, providing tailored advice and insights. His market
            expertise and negotiation skills consistently deliver the best
            outcomes, helping clients make informed real estate decisions.
          </p>

          <h3 class="mb-3">Property Status</h3>
          <PagesRealEstateAgentOverviewPropertyStatus />

          <h3 class="mb-3">Specialization</h3>
          <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Expert in City A and surrounding neighborhoods
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Proficient in handling first-time homebuyers, seasoned
                investors, and luxury clients
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Strong understanding of local market trends and pricing
                strategies
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Provides comprehensive property assessments and personalized
                marketing plans
              </span>
            </li>
          </ul>

          <h3 class="mb-3">Recent Achievements</h3>
          <ul class="ps-0 mb-md-5 mb-4 list-unstyled">
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">Closed over $10 million in sales in 2023</span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Top Agent Award at Prime Realty for 3 consecutive years
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">
                Successfully negotiated deals for 20+ residential and commercial
                properties in the past year
              </span>
            </li>
            <li class="mb-2">
              <span
                class="d-inline-block rounded-circle"
                style="width: 7px; height: 7px; background-color: #605dff"
              ></span>
              <span class="ms-1">5-star client satisfaction rating</span>
            </li>
          </ul>

          <PagesRealEstateAgentOverviewClientTestimonials />
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <PagesRealEstateAgentOverviewProfile />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgentOverview",
});
</script>
