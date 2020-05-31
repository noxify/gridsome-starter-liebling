<template>
  <div>
    <div class="flex justify-center">
      <div class="search-form w-full md:w-8/12 lg:w-6/12">
        <div class="relative">
          <div class="flex flex-wrap items-stretch w-full mb-4 relative">
            <div class="flex -mr-px">
              <span
                class="flex items-center leading-normal rounded rounded-r-none border border-r-0 border-gray-500 px-3 whitespace-no-wrap text-gray-400"
              >
                <font-awesome :icon="['fas', 'search']" size="lg"></font-awesome>
              </span>
            </div>
            <input
              type="text"
              class="flex-shrink flex-grow flex-auto text-gray-700 leading-normal w-px flex-1 border h-12 text-xl md:h-16 md:text-3xl border-l-0 focus:outline-none focus:shadow-none border-gray-500 rounded rounded-l-none px-3 relative"
              placeholder="Search..."
              id="search"
              v-model="searchTerm"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="search-results w-full">
        <div class="container px-5 py-12 md:py-12 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            <div 
              class="py-2 px-4 sm:w-2/4 md:w-1/3" 
              v-for="resultEntry in searchResults"
              :key="resultEntry.id">
              <g-link
                :to="resultEntry.path"
                
              >
                <div class="h-full flex items-start hover:bg-gray-200 rounded-lg">
                  <div class="flex-grow px-6">
                    <h2
                      class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"
                    >{{ resultEntry.node.category}}</h2>
                    <h1
                      class="title-font text-xl font-medium text-gray-900 mb-3"
                    >{{ resultEntry.title }}</h1>
                    <p class="leading-relaxed mb-5">{{ resultEntry.node.excerpt }}</p>
                  </div>
                </div>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ""
  }),
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return [];
      return this.$search.search({ query: searchTerm, limit: 5 });
    }
  }
};
</script>

<style>
</style>