// Object Destructuring
// syntax {}=obj 

let obj = {
    name : "Zaid",
    age : 24,
    address : "Patna",
    company : "Shreyians"
}

let fn = ({name,company}) => {
    console.log(name, company)
}

fn(obj)