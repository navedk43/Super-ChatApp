const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res)=>{
    const { username } = req.body;
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret: username, first_name:username},
            {headers: {"private-key":"09b1cb50-5023-4a02-b100-1a86e7904a11"}}
        )
        return res.status(r.status).json(r.data);
    } catch (e) {
        if (e.response) {
            // If the error is from the Axios request
            return res.status(e.response.status).json(e.response.data);
        } else {
            // If the error is something else (like network error)
            console.error(e); // Log the error for debugging
            return res.status(500).json({ error: "Internal server error" });
        }
    }
});

app.listen(3001);