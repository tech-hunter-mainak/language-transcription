app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});