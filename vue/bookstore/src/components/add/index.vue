<template>
    <div class='add'>
        <myHeader>添加页</myHeader>
        <myInput v-model='name' text='书的名字'></myInput>
        <myInput v-model='info' text='书的信息'></myInput>
        <myInput v-model='price' text='书的价格' type='number'></myInput>
        <myInput v-model='cover' text='书的封面'></myInput>
        <button @click="add">添加</button>
    </div>
</template>
<script>
    import myHeader from '@/common/header'
    import myInput from './my-input.vue'
    export default {
        data() {
            return {
                name: '',info:'',price:'',cover:''
            }
        },
        components:{
            myHeader,
            myInput
        },
        methods: {
            add(){
                let obj = {
                    bookName:this.name,
                    bookInfo:this.info,
                    bookPrice:this.price,
                    bookCover:this.cover
                }
                obj.bookId = Math.random();
                this.$store.commit('addList',obj);
                console.log(obj)
                //debugger
                this.$router.push('/list');
            }
        },
    }
</script>

<style scoped>
    .add{
        padding: 1.5rem 0 2rem 0;
    }
    button{
        width:60%;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        background: #ccc;
        outline: none;
        font-size: 1rem;
        margin: 0.5rem auto;
        display: block;
    }
</style>