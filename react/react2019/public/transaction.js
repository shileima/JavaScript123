class Transaction {
    constructor(wrapper){
        this.wrapper = wrapper;
    }
    perform(anyfunc){
        this.wrapper.forEach(wrapper => {
            wrapper.initialize()
        });
        anyfunc();
        this.wrapper.forEach(wrapper => {
            wrapper.close()
        });
    }
}

let transaction = new Transaction([
    {
        initialize(){
            console.log('start1')
        },
        close(){
            console.log('close1')
        }
    },
    {
        initialize(){
            console.log('start2')
        },
        close(){
            console.log('close2')
        }
    }
]);

transaction.perform(()=>{
    console.log('middle')
})