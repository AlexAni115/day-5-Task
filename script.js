//For the given JSON iterate over all for loop(for,for in, for of)

var personDetails = [
{
    "name":"john",
    "age":"20",
    "emailid": "123@gmail.com" ,
    "address":{
        "street": "123 sample street",
        "city"  : "chennai",
        "state": "Tamilnadu"


    }

},
{
    "name":"Doe",
    "age":"30",
    "emailid": "456@gmail.com" ,
    "address":{
        "street": "456 sample street",
        "city"  : "chennai",
        "state": "Tamilnadu"


    }
},
{
    "name":"Wick",
    "age":"40",
    "emailid": "789@gmail.com" ,
    "address":{
        "street": "789 sample street",
        "city"  : "chennai",
        "state": "Tamilnadu"


    }
}
]

//1. for loop;

for (let i=0;i<personDetails.length;i++){
    console.log(personDetails[i].name,personDetails[i].age)
}

//2. for in;

for (let key in personDetails){
    console.log(personDetails[key].emailid);
}

//3. for of;

for (let val of personDetails){
    console.log(val.address.street,val.address.city,val.address.state);
}

// Create you own reume date in JSON format
{
    
}