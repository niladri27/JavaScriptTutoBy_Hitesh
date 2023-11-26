const accountId = 2001      // can not be changed
let accountEmail = "niladri@gmail.com"
var accountPassword = "222"
accountCity="kolkata"
let accountState;

// accountId=2                  //change is not allowed
// console.log(accountId);      
accountEmail="hc@hc.com"        //changed
accountPassword="111"           //changed
accountCity="chennai"           //changed

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



