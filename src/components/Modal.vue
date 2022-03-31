<template>
    <div class="modal">
        <div class="content">
            <p class="title">
                {{title}}
            </p>
            <div class="form">
                <label>{{labelA}}</label>
                <input type="text" v-model="inputA">
                <label>{{labelB}}</label>
                <input :type="inputBType" v-model="inputB">
            </div>
            <p class="text-right">
                <button class="btn cancel" @click="handleCloseModal">
                    cancel
                </button>
                 <button class="btn submit" @click="submit">
                    submit
                </button>
            </p>
        </div>
    </div>  
</template>

<script>
    export default {
        props: ['title', 'labelA', 'labelB', 'inputBType'],
        data:()=>({
            inputA: '',
            inputB: ''
        }),
        methods:{
            handleCloseModal(){
                this.$emit('close')
            },
            submit(){
                this.$emit('submit', {
                    inputA: this.inputA,
                    inputB: this.inputB
                })
            }
        }
        
    }
</script>