<template>
  <div>
    <Navbar />
    <div class="container main">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>