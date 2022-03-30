<template>
    <div class="board" :style="{borderColor: board.color}">
                <div class="head">
                    <span class="title">
                        {{board.title}}
                    </span>
                    <span class="head-btn">
                        <button class="btn"> <i class="fas fa-plus"></i> add item</button>
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
                <div>
                    <h2 class="msg" v-if="board.items.length == 0">No items Yet!!!</h2>
                    <div v-else>
                        <p v-for="(item, index) in board.items" :key="index">
                            {{item.title}}
                        </p>
                    </div>
                </div>
            </div>
</template>

<script>
    export default {
        props: {
            board:{
                required: true,
                type: Object
            }
        }
    }
</script>