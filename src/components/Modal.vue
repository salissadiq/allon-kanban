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
                <input v-if="inputBType != 'select' " :type="inputBType" v-model="inputB">
                <select v-else v-model="inputB">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
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
        },
        mounted(){
            console.log(this.inputBType);
        }
        
    }
</script>