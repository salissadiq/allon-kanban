<template>
    <span>
         <button class="btn" @click="showModal = true"> 
            <i class="fas fa-plus"></i> add item
        </button>
        <Modal 
            v-if="showModal"
            title="Add Item"
            labelA="Item title"
            labelB="Select Priority"
            inputBType="select"
            @close="showModal = false"
            @submit="handleSubmit"
        
        />
    </span>
</template>

<script>
    import Modal from '@/components/Modal'
    import EventBus from '@/utils/EventBus'
    export default {
        props:['boardIndex'],
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
                EventBus.$emit('addItem', {
                    ...data,
                    boardIndex: this.boardIndex
                })
                this.showModal = false
            }
        }
    }
</script>