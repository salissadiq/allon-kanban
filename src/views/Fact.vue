<template>
    <div>
        <h2>
            Hello , Page {{$route.params.id}} is {{isEven| toCap}} page
        </h2>
    </div>
</template>

<script>
    export default {
        data: ()=>{
            return {
                msg: 'Hello'
            }
        },
        computed: {
            isEven(){
                return this.$route.params.id % 2 == 0 ? 'even' : 'odd'
            }
        },

        filters: {
            toCap(value){
                return value.toUpperCase()
            }
        }
    }
</script>