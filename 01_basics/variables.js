const accountId = 144553
let accountEmail = "mritunjaypandey0789@gmail.com"
var accountPassword = "Jaipur"
accountCity = "jaipur"
let accountState;

// accountId = 2
accountEmail = "abc@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
b'coz of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])