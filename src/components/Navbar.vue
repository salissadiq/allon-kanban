<template>
    <div class="navbar container">
        <a href="" class="logo">Allon KanBan</a>
    <div class="nav-links">
        <router-link v-for="(link, index) in links" :key="index" :class="{active: link.path == $route.path }" :to="link.path">{{link.name}}</router-link>
        <button class="btn">
          <i class="fas fa-plus"></i>  add board
        </button>
    </div>
    </div>
</template>

<script>
export default {
    data:()=> {
        return {
            links: [
                {name: 'home', path: '/'},
                {name: 'facts', path: '/facts'},
                {name: 'about', path: '/about'}
            ]
        }
    }
}
</script>
<style scoped>
</style>