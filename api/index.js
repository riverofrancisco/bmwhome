const { sq } = require ('./src/db.js')


sq.sync({ alter: true }).then(()=> {
    console.log("DB working OK!")
});
    // Code here