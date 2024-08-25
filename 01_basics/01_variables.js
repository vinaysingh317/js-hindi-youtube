const accountId = 144553
let accountEmail = "vinay@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "hc@hhc.com"
accountPassword = "21212121"
accountCity = "aligarh"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])