<template>
    <span>
        <button class="btn" @click="showModal = true">
          <i class="fas fa-plus"></i>  add board
        </button>
        <Modal 
            v-if="showModal"
            title="Add new Board"
            labelA="Board title"
            labelB="Board Color"
            inputBType="color"
            @close="showModal = false"
        
        />
    </span>
</template>

<script>
    import Modal from '@/components/Modal'
    export default {
        components:{
            Modal
        },
        data: ()=> {
            return {
                showModal : false,
            }
        }
    }
</script>