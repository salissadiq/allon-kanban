<template>
    <div>
        <h2 class="msg" v-if="boards.length == 0">You Don't Have Any Board</h2>
        <div v-else class="boards-container">
            <Board v-for="(board, index) in boards" :key="index" :board="board"/>
        </div>
    </div>
</template>

<script>
import Board from '@/components/Board'
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
        }
        
    }
</script>