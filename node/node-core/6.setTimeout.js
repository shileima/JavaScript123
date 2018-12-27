setTimeout(()=>{
    console.log(3);
},2000)

setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
    },1000)
},1000)