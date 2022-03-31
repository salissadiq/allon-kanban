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
            @submit="handleSubmit"
        
        />
    </span>
</template>

<script>
    import Modal from '@/components/Modal'
    import EventBus from '@/utils/EventBus'
    export default {
        components:{
            Modal
        },
        data: ()=> {
            return {
                showModal : false,
            }
        },
        
        methods: {
            handleSubmit(data){
                EventBus.$emit('addBoard', data)
                this.showModal = false
            }
        }
    }
</script>