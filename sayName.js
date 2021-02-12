const sayName = ()=>{
  console.log("Hello there edd");
}

const sayAdress = ()=>{
  console.log('yesss')
}

// module.exports = sayName;
module.exports.sayName = sayName;
module.exports.sayAdress = sayAdress;