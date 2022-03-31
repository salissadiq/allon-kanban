<template>
    <div class="navbar container">
        <a href="" class="logo">Allon KanBan</a>
    <div class="nav-links">
        <router-link v-for="(link, index) in links" :key="index" :class="{active: link.path == $route.path }" :to="link.path">{{link.name}}</router-link>
        <AddBoardBtn />
    </div>
    </div>
</template>

<script>
import AddBoardBtn from '@/components/AddBoardBtn'
export default {
    components:{
        AddBoardBtn
    },
    data:()=> {
        return {
            links: [
                {name: 'home', path: '/'},
                {name: 'facts', path: '/facts/45'},
                {name: 'about', path: '/about'}
            ]
        }
    }
}
</script>
<style scoped>
</style>