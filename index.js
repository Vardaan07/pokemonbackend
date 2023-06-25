import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

require("dotenv").config();
const path = require("path");


const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname + "/client/build/index.html"),
            function(err) {
                if (err) {
                    console.log(err);
                }
            }
        );
    });
}

app.listen(5000, () => {
    console.log('server has started');
})