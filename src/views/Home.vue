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
                        color:'red', 
                        items: [
                            {title: 'Item1'},
                            {title: 'Item2'},
                            {title: 'Item3'}
                        ]
                    },
                     {
                        title: "Testboard", 
                        color:'green', 
                        items: [
                            // {title: 'Item1'},
                            // {title: 'Item2'},
                            // {title: 'Item3'}
                        ]
                    },
                     {
                        title: "Testboard", 
                        color:'blue', 
                        items: [
                            {title: 'Item1'},
                            {title: 'Item2'},
                            {title: 'Item3'}
                        ]
                    }
                ]
            }
        }
        
    }
</script>