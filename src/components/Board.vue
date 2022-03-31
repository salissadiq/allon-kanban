<template>
    <div class="board" :style="{borderColor: board.color}">
                <div class="head">
                    <span class="title">
                        {{board.title}}
                    </span>
                    <span class="head-btn">
                        <AddItemBtn :boardIndex="id"/>
                        <i class="fas fa-trash" @click="handleDeleteBoard"></i>

                    </span>
                </div>
                <div>
                    <h2 class="msg" v-if="board.items.length == 0">No items Yet!!!</h2>
                    <div v-else>
                        <draggable v-model="board.items" group="items" handle=".handle" @sort="handleSort">
                        <transition-group name="list">
                        <Item v-for="(item, index) in board.items" :key="item.title" :item="item" :clr="board.color" :itemIndex="index" :boardIndex="id" />
                        </transition-group>
                        </draggable>
                    </div>
                </div>
            </div>
</template>

<script>
import draggable from 'vuedraggable'
import Item from '@/components/Item'
import AddItemBtn from '@/components/AddItemBtn'
import EventBus from '@/utils/EventBus'
    export default {
        props: {
            board:{
                required: true,
                type: Object
            },
            id:{
                required: true,
                type: Number
            }
        },
        components:{
            Item, 
            AddItemBtn,
            draggable
        },
        methods:{
            handleDeleteBoard(){
                EventBus.$emit('deleteBoard', {boardIndex:this.id})
            },
            handleSort(){
                EventBus.$emit('sortItem', this.id)
            }
        }
    }
</script>