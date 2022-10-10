import app from "./app/app";

const port = process.env.PORT || 6003
app.listen(port, () => {
    console.log("Server running on port " + port);
});