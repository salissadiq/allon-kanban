<template>
    <div>
        <h2 class="msg" v-if="boards.length == 0">You Don't Have Any Board</h2>
        <div v-else class="boards-container">
            <Board v-for="(board, index) in boards" :key="index" :board="board" :id="index"/>
            {{index}}
        </div>
    </div>
</template>

<script>
import Board from '@/components/Board'
import EventBus from '@/utils/EventBus'
    export default {
        components:{
            Board
        },
        data: ()=>{
            return {
                boards:[
                    {
                        title: "Testboard", 
                        color:'green', 
                        items: [
                            {title: 'Item1', priority: 'high'},
                            {title: 'Item2', priority: 'medium'},
                            {title: 'Item3', priority: 'low'},
                        ]
                    },

                ]
            }
        },

        mounted(){
            EventBus.$on('addBoard', (data)=>{
                this.boards.push({
                    title: data.inputA,
                    color: data.inputB || '#000',
                    items:[]
                })
            })

            EventBus.$on('addItem', (data)=>{
                 this.boards[data.boardIndex].items.push({
                    title: data.inputA,
                    priority: data.inputB || 'low'
                })
            })

            EventBus.$on('deleteBoard', (data)=>{
                this.boards.splice(data.boardIndex, 1)
            })
            EventBus.$on('deleteItem', (data)=>{
                this.boards[data.boardIndex].items.splice(data.itemIndex, 1)
            })
        }

        
    }
</script>