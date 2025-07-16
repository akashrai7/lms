<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-25"
      >
        <form class="position-relative table-src-form me-0">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control border-0"
            placeholder="Search here...."
            @input="filterWallets"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y text-secondary"
          >
            search
          </i>
        </form>
        <button
          class="btn btn-outline-primary fw-medium rounded-3 hover-bg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          @click="resetForm"
        >
          <span class="d-flex align-items-center" style="gap: 5px">
            <i class="ri-add-line d-none d-sm-inline-block fs-20 lh-1"></i>
            <span>Add Wallet</span>
          </span>
        </button>
      </div>

      <div
        class="default-table-area style-two py-15 individual-asset-performance"
      >
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col" class="text-secondary">Name</th>
                <th scope="col" class="text-secondary">Address</th>
                <th scope="col" class="text-secondary">Crypto Asset</th>
                <th scope="col" class="text-secondary">Balance</th>
                <th scope="col" class="text-secondary">
                  Last Transaction Date
                </th>
                <th scope="col" class="text-secondary">Status</th>
                <th scope="col" class="text-secondary">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="wallet in paginatedWallets" :key="wallet.id">
                <td class="fw-medium text-primary">{{ wallet.name }}</td>
                <td class="text-secondary fw-medium">
                  {{ shortenAddress(wallet.address) }}
                </td>
                <td class="text-body">
                  <div class="d-flex align-items-center" style="gap: 8px">
                    <img
                      :src="getAssetImage(wallet.asset)"
                      style="max-width: 22px"
                      :alt="wallet.asset"
                    />
                    <span class="fw-medium text-secondary fs-13">
                      {{ getAssetName(wallet.asset) }}
                      <span class="fw-normal fs-12 text-body">
                        ({{ wallet.asset }})
                      </span>
                    </span>
                  </div>
                </td>
                <td class="text-secondary">
                  {{ wallet.balance }} {{ wallet.asset }}
                </td>
                <td class="text-secondary">
                  {{ formatDate(wallet.lastTransaction) }}
                </td>
                <td
                  :class="
                    wallet.status === 'Active'
                      ? 'text-success'
                      : 'text-danger-80'
                  "
                >
                  {{ wallet.status }}
                </td>
                <td>
                  <div class="d-flex gap-2">
                    <button
                      class="btn btn-sm btn-outline-secondary"
                      @click="editWallet(wallet)"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      <i class="ri-edit-line"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-outline-danger"
                      @click="confirmDelete(wallet.id)"
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="filteredWallets.length === 0">
                <td colspan="7" class="text-center py-4 text-secondary">
                  No wallets found
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap p-4"
          style="padding-top: 15px !important"
        >
          <span class="fs-13">
            Showing {{ showingStart }}-{{ showingEnd }} of
            {{ filteredWallets.length }} results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item">
                <button
                  class="page-link icon hover-bg"
                  aria-label="Previous"
                  @click="prevPage"
                  :disabled="currentPage === 1"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_left</i>
                </button>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page">
                <button
                  class="page-link"
                  :class="{ active: page === currentPage }"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </button>
              </li>
              <li class="page-item">
                <button
                  class="page-link icon hover-bg"
                  aria-label="Next"
                  @click="nextPage"
                  :disabled="currentPage === totalPages"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModal2Label"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style="max-width: 550px"
        >
          <div class="modal-content rounded-0">
            <div class="modal-header border-0 p-4 border-bottom">
              <h1 class="modal-title fs-18" id="exampleModal2Label">
                {{ isEditing ? "Edit Wallet" : "Add New Wallet" }}
              </h1>
              <button
                type="button"
                class="btn-close campaigns-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="resetForm"
              ></button>
            </div>
            <div class="modal-body p-4">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Wallet Name</label>
                      <input
                        v-model="form.name"
                        type="text"
                        class="form-control h-60 border-border-color"
                        placeholder="Enter Wallet Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Wallet Address</label>
                      <input
                        v-model="form.address"
                        type="text"
                        class="form-control h-60 border-border-color"
                        placeholder="Enter Wallet Address"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Crypto Asset</label>
                      <select
                        v-model="form.asset"
                        class="form-select form-control h-60 border-border-color"
                        required
                      >
                        <option value="">Select Asset</option>
                        <option
                          v-for="asset in cryptoAssets"
                          :key="asset.symbol"
                          :value="asset.symbol"
                        >
                          {{ asset.name }} ({{ asset.symbol }})
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Balance</label>
                      <input
                        v-model="form.balance"
                        type="number"
                        step="0.00000001"
                        class="form-control h-60 border-border-color"
                        placeholder="Enter Balance"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary"
                        >Last Transaction Date</label
                      >
                      <input
                        v-model="form.lastTransaction"
                        type="date"
                        class="form-control h-60 border-border-color"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Status</label>
                      <select
                        v-model="form.status"
                        class="form-select form-control h-60"
                        required
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex justify-content-end flex-wrap gap-3">
                      <button
                        type="button"
                        class="btn btn-danger py-2 px-4 fw-medium fs-16 text-white"
                        data-bs-dismiss="modal"
                        @click="resetForm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="btn btn-primary py-2 px-4 fw-medium fs-16"
                        data-bs-dismiss="modal"
                      >
                        <i class="ri-add-line text-white fw-medium"></i>
                        {{ isEditing ? "Update" : "Create" }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/bitcoin.png";
import image2 from "@/assets/images/ethereum-2.png";
import image3 from "@/assets/images/binance-2.png";
import image4 from "@/assets/images/tether.png";
import image5 from "@/assets/images/xrp.png";
import image6 from "@/assets/images/solana-2.png";
import image7 from "@/assets/images/usdc.png";
import image8 from "@/assets/images/tron.png";
import image9 from "@/assets/images/avalanche.png";
import image10 from "@/assets/images/chainlink.png";

type WalletStatus = "Active" | "Inactive";

interface Wallet {
  id: number;
  name: string;
  address: string;
  asset: string;
  balance: number;
  lastTransaction: string;
  status: WalletStatus;
}

interface CryptoAsset {
  symbol: string;
  name: string;
  image: string;
}

export default defineComponent({
  name: "CTWallet",
  setup() {
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(8);
    const isEditing = ref(false);
    const currentWalletId = ref<number | null>(null);

    const form = ref({
      name: "",
      address: "",
      asset: "",
      balance: 0,
      lastTransaction: new Date().toISOString().split("T")[0],
      status: "Active" as WalletStatus,
    });

    const wallets = ref<Wallet[]>([
      {
        id: 1,
        name: "BTC Wallet",
        address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
        asset: "BTC",
        balance: 0.25,
        lastTransaction: "2025-10-01",
        status: "Active",
      },
      {
        id: 2,
        name: "ETH Wallet",
        address: "0x32Be343pjq2LkjuV5qJHunfnkLtktZc4",
        asset: "ETH",
        balance: 5.2,
        lastTransaction: "2025-10-02",
        status: "Active",
      },
      {
        id: 3,
        name: "BNB Wallet",
        address: "DdzFFzCqrh3cpjq2LkjuV5qJHunfnkLtktZc4",
        asset: "BNB",
        balance: 1000,
        lastTransaction: "2025-10-03",
        status: "Inactive",
      },
      {
        id: 4,
        name: "USDT Wallet",
        address: "Dsbeompjq2LkjuV5qJHunfnkLtktZc4",
        asset: "USDT",
        balance: 2500,
        lastTransaction: "2025-10-04",
        status: "Active",
      },
      {
        id: 5,
        name: "XRP Wallet",
        address: "4pN1bycd93cpjq2LkjuV5qJHunfnkLtktZc4",
        asset: "XRP",
        balance: 15,
        lastTransaction: "2025-10-05",
        status: "Active",
      },
      {
        id: 6,
        name: "SOL Wallet",
        address: "LZjTAtMjq2LkjuV5qJHunfnkLtktZc4",
        asset: "SOL",
        balance: 12,
        lastTransaction: "2025-10-06",
        status: "Active",
      },
      {
        id: 7,
        name: "USDC Wallet",
        address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
        asset: "USDC",
        balance: 0.5,
        lastTransaction: "2025-10-07",
        status: "Active",
      },
      {
        id: 8,
        name: "TRX Wallet",
        address: "3FZbc3cpjq2LkjuV5qJHunfnkLtktZc4",
        asset: "TRX",
        balance: 1500,
        lastTransaction: "2025-10-08",
        status: "Inactive",
      },
      {
        id: 9,
        name: "AVAX Wallet",
        address: "1FZbt93cpjq2LkjuV5qJHunfnkLtktZc4",
        asset: "AVAX",
        balance: 100,
        lastTransaction: "2025-10-09",
        status: "Active",
      },
      {
        id: 10,
        name: "LINK Wallet",
        address: "16cbfe2pjq2LkjuV5qJHunfnkLtktZc4",
        asset: "LINK",
        balance: 5000,
        lastTransaction: "2025-10-10",
        status: "Active",
      },
    ]);

    const cryptoAssets = ref<CryptoAsset[]>([
      { symbol: "BTC", name: "Bitcoin", image: image1 },
      { symbol: "ETH", name: "Ethereum", image: image2 },
      { symbol: "BNB", name: "Binance", image: image3 },
      { symbol: "USDT", name: "Tether", image: image4 },
      { symbol: "XRP", name: "XRP", image: image5 },
      { symbol: "SOL", name: "Solana", image: image6 },
      { symbol: "USDC", name: "USDC", image: image7 },
      { symbol: "TRX", name: "Tron", image: image8 },
      { symbol: "AVAX", name: "Avalanche", image: image9 },
      { symbol: "LINK", name: "Chainlink", image: image10 },
    ]);

    const filteredWallets = computed(() => {
      if (!searchQuery.value) return wallets.value;
      const query = searchQuery.value.toLowerCase();
      return wallets.value.filter(
        (wallet: {
          name: string;
          address: string;
          asset: string;
          status: string;
        }) =>
          wallet.name.toLowerCase().includes(query) ||
          wallet.address.toLowerCase().includes(query) ||
          wallet.asset.toLowerCase().includes(query) ||
          wallet.status.toLowerCase().includes(query)
      );
    });

    const paginatedWallets = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredWallets.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredWallets.value.length / itemsPerPage.value);
    });

    const showingStart = computed(() => {
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });

    const showingEnd = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > filteredWallets.value.length
        ? filteredWallets.value.length
        : end;
    });

    const filterWallets = () => {
      currentPage.value = 1;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const shortenAddress = (address: string): string => {
      return `${address.substring(0, 6)}...${address.substring(
        address.length - 4
      )}`;
    };

    const getAssetImage = (asset: string): string => {
      const found = cryptoAssets.value.find(
        (a: { symbol: string }) => a.symbol === asset
      );
      return found ? found.image : "";
    };

    const getAssetName = (asset: string): string => {
      const found = cryptoAssets.value.find(
        (a: { symbol: string }) => a.symbol === asset
      );
      return found ? found.name : asset;
    };

    const formatDate = (date: string): string => {
      return new Date(date).toLocaleDateString();
    };

    const resetForm = () => {
      form.value = {
        name: "",
        address: "",
        asset: "",
        balance: 0,
        lastTransaction: new Date().toISOString().split("T")[0],
        status: "Active",
      };
      isEditing.value = false;
      currentWalletId.value = null;
    };

    const editWallet = (wallet: Wallet) => {
      form.value = {
        name: wallet.name,
        address: wallet.address,
        asset: wallet.asset,
        balance: wallet.balance,
        lastTransaction: wallet.lastTransaction,
        status: wallet.status,
      };
      isEditing.value = true;
      currentWalletId.value = wallet.id;
    };

    const submitForm = () => {
      if (isEditing.value && currentWalletId.value) {
        // Update existing wallet
        const index = wallets.value.findIndex(
          (w: { id: any }) => w.id === currentWalletId.value
        );
        if (index !== -1) {
          wallets.value[index] = {
            id: currentWalletId.value,
            ...form.value,
          };
          // Trigger reactivity by creating new array
          wallets.value = [...wallets.value];
        }
      } else {
        // Add new wallet
        const newId =
          Math.max(...wallets.value.map((w: { id: any }) => w.id), 0) + 1;
        wallets.value.push({
          id: newId,
          ...form.value,
        });
      }

      resetForm();
    };

    const confirmDelete = (id: number) => {
      if (confirm("Are you sure you want to delete this wallet?")) {
        wallets.value = wallets.value.filter(
          (wallet: { id: number }) => wallet.id !== id
        );
        if (paginatedWallets.value.length === 0 && currentPage.value > 1) {
          currentPage.value--;
        }
      }
    };

    return {
      searchQuery,
      currentPage,
      itemsPerPage,
      isEditing,
      currentWalletId,
      form,
      wallets,
      cryptoAssets,
      filteredWallets,
      paginatedWallets,
      totalPages,
      showingStart,
      showingEnd,
      filterWallets,
      prevPage,
      nextPage,
      goToPage,
      shortenAddress,
      getAssetImage,
      getAssetName,
      formatDate,
      resetForm,
      editWallet,
      submitForm,
      confirmDelete,
    };
  },
});
</script>
