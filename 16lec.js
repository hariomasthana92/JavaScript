//  // singleton
  
//  //pbject literals
//  //declare object

//  const mysum = Symbol("key1")

//  const jsuser = {
//     name : "hariom",
//     age : 21,
//     "fullname": "hariom asthana",
//     email : "hatwuyehdue@.com",
//     isloggedin : false,
//     location : "kanpur",
//     loginindays : ["mon","tue"]
//  }
//  the way to accesds name and and other thing 
//  from object is to name the object and then dot
//  and then key but this is not correct make a symbol here
//  because some of the values like full name can not be accessable by 
//  dot thats why instead of this use square node
//  console.log(jsuser.name)//not a good syntax
//  console.log(jsuser.age)//not a good syntax
//  //console.log(jsuser."full name") wrong syntax
//  console.log(jsuser["fullname"]) //right syntax 
//  console.log(jsuser["location"]) //right syntax 


//  JsUser.email = "hbfurfbruyfbryf.mfjn"
//  Object.freeze(JsUser)
//  JsUser.email = "hbfurfbruyfbryf.mfjnsw"
//  console.log(JsUser);


// //  JsUser.greeting = function(){
// //    console.log("hello js user");
// //  }
// //  JsUser.greeting = function(){
// //    console.log(`hello js user,$(this.name)`);
// //  }