import app from "./app/app";

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});