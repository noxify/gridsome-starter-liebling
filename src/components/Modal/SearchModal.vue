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
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>