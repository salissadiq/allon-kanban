<template>
    <div class="modal">
        <div class="content">
            <p class="title">
                {{title}}
            </p>
            <div class="form">
                <label>{{labelA}}</label>
                <input type="text">
                <label>{{labelB}}</label>
                <input :type="inputBType">
            </div>
            <p class="text-right">
                <button class="btn cancel" @click="handleCloseModal">
                    cancel
                </button>
                 <button class="btn submit">
                    submit
                </button>
            </p>
        </div>
    </div>  
</template>

<script>
    export default {
        props: ['title', 'labelA', 'labelB', 'inputBType'],
        methods:{
            handleCloseModal(){
                this.$emit('close')
            }
        }
        
    }
</script>