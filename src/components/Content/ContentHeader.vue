<template>
  <div class="bg-gray-200 py-20 text-center">
      <h2 v-if="title!=null" class="text-5xl font-extrabold">{{ title }}</h2>
      <p v-if="sub!=null" class="text-gray-600 text-light font-sans">{{ sub }}</p>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type:String,
            default:null
        },
        sub: {
            type:String,
            default:null
        }
    }
}
</script>

<style>

</style>