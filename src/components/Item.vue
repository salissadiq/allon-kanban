<template>
    <div class="items">
       <div class="head">
          <span class="priority">
               <span>Priority:</span>
           <span class="badge" :style="{backgroundColor: priorityClr}">{{item.priority}}</span>
          </span>
          <i class="fas fa-sort handle" :style="{color: clr, cursor:'pointer'}"></i>
       </div>
          <p class="title">{{item.title}}</p>
          <p class="text-right">
              <button class="btn delete" @click="handleDeleteItem">
                  delete
              </button>

          </p>
    </div>
</template>

<script>
import EventBus from '@/utils/EventBus'
    export default {
        props:['item', 'clr', 'boardIndex', 'itemIndex'],
        computed:{
            priorityClr(){
                if(this.item.priority == 'high'){
                    return '#d13667'
                } else if(this.item.priority == 'medium'){
                    return '#80d5db'
                } else if(this.item.priority == 'low'){
                    return '#d0c6fc'
                }
            }
        },
        methods: {
            handleDeleteItem(){
                EventBus.$emit('deleteItem', 
                {
                    boardIndex: this.boardIndex,
                    itemIndex: this.itemIndex
                })
            }
        }
    }
</script>