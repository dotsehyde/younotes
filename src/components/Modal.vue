<template lang="">
    <div class="modal">
        <div class="modal-content">
            <p>{{this.modalMessage}}</p>
            <button  @click="closeModal">Close</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"app-modal",
    methods:{
        closeModal(){
            this.$emit("close-modal")
        }
    }
}
</script>
<style lang="scss" scoped>
    .modal{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 101;
        position: absolute;
        height: 100%;
        width: 100%;
        top:0;
        background: rgba(0,0,0,0.7);

        .modal-content{
           display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 8px;
        width:300px;
        padding:40px 30px;
        background:#fff;
        p{
            text-align: center;
        } 
        button{
            align-self: center;
        }
        }
    }
</style>