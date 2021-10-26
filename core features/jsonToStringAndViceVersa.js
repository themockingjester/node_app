const removeData = async function(name) {
    currentData = fs.readFileSync('data.json')
    currentData = JSON.parse(currentData)
    result = currentData.filter(function(value) {
        return value.name!=name
    })
    fs.writeFileSync('data.json', JSON.stringify(result))
}
const showData = function() {
        currentData = fs.readFileSync('data.json')
        currentData = JSON.parse(currentData)
        console.log(chalk.green.dim('---------------------------------------------------'))
        currentData.forEach(element => {
            console.log(chalk.yellow.bold("#########################################"))
            console.log(chalk.green.bold("name: "+element.name))
            console.log(chalk.green.bold("title: "+element.title))
            console.log(chalk.green.bold("body: "+element.body))
            console.log(chalk.green.bold("subjects: "+element.subjects))
            console.log(chalk.yellow.bold("#########################################"))
        });
        console.log(chalk.green.dim('---------------------------------------------------'))
}
const updateTitle = async function(name,title){
    currentData = fs.readFileSync('data.json')
    currentData = JSON.parse(currentData)
    currentData.forEach(element => {
        if(element.name===name){
            element.title = title
        }
        
    });
    fs.writeFileSync('data.json', JSON.stringify(currentData))

}
const searchData  = function(name){
    currentData = fs.readFileSync('data.json')
    currentData = JSON.parse(currentData)
    results = currentData.filter(function(element){
        return element.name === name

    })
    return results
}
    
const addData = async function (){
    const newData = {
        name:"Pranyanshu",
        title:"Hindi",
        body:"Hindi",
        subjects: ["Hindi"]
    }
    try{
        currentData = fs.readFileSync('data.json')
        currentData = JSON.parse(currentData)
        currentData.push(newData)
        fs.writeFileSync('data.json', JSON.stringify(currentData))
    }
    catch(FileNotFoundException){
        fs.writeFileSync('data.json', JSON.stringify(data))
        console.log(chalk.red.inverse('Opps we added the basic data this time because it was missing'))
    }
    
}

data = [
    {
        name:"Shyam",
        title:"Maths",
        body:"Physics",
        subjects: ["Physics","Maths"]
    },
    {
        name:"Mahesh",
        title:"Maths",
        body:"Physics",
        subjects: ["Physics","Maths"]
    }
]

const chalk = require('chalk')
const fs = require('fs');

//  ------------------------------------------------ adding data --------------------------
// const addDataCall = async function(){
//     await addData()
// }
// addDataCall()
// --------------------------- Searching data ---------------------------
// const nameToBeSearched = "Shyam"
// searchData(nameToBeSearched).forEach(element => {
//     console.log(chalk.green.inverse("name: ",element.name + "\ntitle: "+element.title))
// });

// ---------------------------------- Updating data --------------------------------
// const updateCall=async function(){
//     await updateTitle("Shyam","Sst")
// }
// updateCall()


// ----------------------------- Removing Data ----------------------
// const removeCall = async function(){
//     await removeData('Mahesh')
// }
// removeCall()

// ----------------------- Showing data ------------------------------
// showData()
