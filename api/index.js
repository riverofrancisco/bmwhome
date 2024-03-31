const { sq } = require ('./src/db.js')
const server = require('./src/app.js');




sq.sync({ force: true }).then(()=> {
    server.listen(process.env.PORT, () => {
        console.log(`--- listening at ${process.env.PORT}`); // eslint-disable-line no-console
      });
    console.log(sq.models)
    console.log("DB working OK!")
});
// Code here