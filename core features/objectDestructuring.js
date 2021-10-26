const obj = {
    userName:"Yash",
    profile:"Programmer",
    country:"India",
    race:"Asian",
    hair:"Black",
    favColor:"Blue"
}

const {userName,race} = obj          // This feature is called as object destructuring you can see how we are getting properties from this obj
console.log(userName)            // Yash

// Note : if we try to access those properties which are not available in object using object destructuring then program won't crash it will simply return undefined for such properties

//Accesing those properties which doesn't exist in object
const {rating} = obj
console.log(rating)     // undefined

// Renaming object properties using object destructuring
const {profile:personProfile,hair} = obj
console.log(personProfile) // Programmer
// console.log(profile) // it throw error 'profile is not defined' because now profile property has been changed to personProfile

// Using object destructuring in function
const func = (type,{country,userName})=>{
    console.log(country)            // India
    console.log(userName)           // Yash
}

func('human',obj)

//Note: in object destructuring we can externaly assign new values to only those properties which don't exist in object if we try to assign new values to those properties which already exist in object then they would only return previous assigned values for example see the below code
const {favouriteSubject = "Computer Science",favColor="Yellow"} = obj
console.log(favColor)       // Blue
console.log(favouriteSubject)  // Computer Science