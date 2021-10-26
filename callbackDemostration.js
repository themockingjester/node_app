// Given below is the basic callback function demonstration in js

const demo =  (address,callback) => {
    setTimeout(() => {          // This function is called after 2 seconds
        const data = {
            latitude:0,
            longitude:0
        }
        callback(data)
    },2000)
}

demo("Mathura",(firstArg)=>{
    console.log(firstArg)
})