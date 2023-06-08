const {PORT,DATA_BASE,app,mongoose} = require('./app');


// connect mongoose....
const mongooseConnect = async ()=>{
    try {
        await mongoose.connect(DATA_BASE);
        console.log("mongoose connect done..");
    } catch (error) {
        console.log(error);
    };
};


// server run ...

app.listen(PORT,async()=>{
    console.log(`server run successfuly done http://127.0.0.1:${PORT}`);
    await mongooseConnect();
});