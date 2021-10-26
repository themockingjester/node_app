const obj = {
    userName:"Yash",
    profile:"Programmer"
}

const {userName,profile} = obj          // This feature is called as object destructuring you can see how we are getting properties from this obj
console.log(userName)

// Note : if we try to access those properties which are not available in object using object destructuring then program won't crash it will simply return undefined for such properties