<script>
import { ref, watch } from "vue";

export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    onChangePage: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const currentPage = ref(1);
    const pages = ref([]);

    const handleNext = () => {
      if (currentPage.value < props.totalPages) {
        currentPage.value++;
      }
      props.onChangePage(currentPage.value);
    };

    const handlePrev = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
      props.onChangePage(currentPage.value);
    };

    const handlePageChange = (page) => {
      currentPage.value = page;
      props.onChangePage(currentPage.value);
    };

    const createPages = () => {
      const pagesClone = [];
      for (let i = 1; i <= props.totalPages; i++) {
        pagesClone.push(i);
      }
      pages.value = pagesClone;
    };

    watch(
      () => props.totalPages,
      () => {
        createPages();
        if (props.totalPages < 2) currentPage.value = 1;
      },
      { immediate: true }
    );

    return {
      currentPage,
      pages,
      handleNext,
      handlePrev,
      handlePageChange,
    };
  },
};
</script>

<template>
  <div
    class="flex items-center justify-between border-t border-white px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 justify-between sm:hidden">
      <a
        href="#"
        class="relative inline-flex items-center rounded-md border border-white px-4 py-2 text-sm font-medium text-white"
        @click="handlePrev"
        >Previous</a
      >
      <a
        href="#"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-50"
        @click="handleNext"
        >Next</a
      >
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-white">
          Showing
          <span class="font-medium">{{ currentPage }}</span>
          to
          <span class="font-medium">{{ currentPage * 10 }}</span>
          of
          <span class="font-medium">{{ totalPages * 10 }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            @click="handlePrev"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-current="page"
            class="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            v-for="page in pages"
            :key="page"
            @click="handlePageChange(page)"
            :class="{
              'bg-white text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600':
                currentPage === page,
              'text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:outline-offset-0':
                currentPage !== page,
            }"
            >{{ page }}</a
          >

          <a
            href="#"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            @click="handleNext"
          >
            <span class="sr-only">Next</span>
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
