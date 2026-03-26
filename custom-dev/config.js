// HARDCODED_SECRET
const password = "secret123";     

// INSECURE_FUNCTION
eval("console.log('danger')");    

// SQL_INJECTION 
db.query("SELECT * FROM users WHERE id = " + userId); 