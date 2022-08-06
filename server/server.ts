import "dotenv/config"
import express from "express";
import cors from "cors"

const app = express()
app.use(cors())

type auth_body = {
    access_token: string,
    token_type: string,
    scope: string,
    expires_in: number,
    refresh_token: string
}
var email: String | null = null

const client_id = process.env.CLIENT_ID! // unsafe
const client_secret = process.env.CLIENT_SECRET!
const port = process.env.PORT || 3001
const redirect_uri = `http://localhost:${port}/api/callback`

const login_params = new URLSearchParams({
    response_type: "code",
    client_id: client_id,
    scope: "user-read-email",
    redirect_uri: redirect_uri
})

app.get("/api", (req, res) => {
    res.send("pong")
})

app.get("/api/login", (req, res) => {
    res.redirect("https://accounts.spotify.com/authorize?" + login_params.toString())
})

app.get("/api/callback", (req, res) => {
    const callback_url = new URL(req.url, `http://${req.headers.host}`)
    const code = callback_url.searchParams.get("code")
    
    const auth_url = "https://accounts.spotify.com/api/token"
    const form = new URLSearchParams({
        "grant_type": "authorization_code",
        "code": code!, // unsafe
        "redirect_uri": redirect_uri
    })
    const headers = new Headers({
        "Authorization": "Basic " + (Buffer.from(client_id + ":" + client_secret).toString("base64")),
        "Content-Type": "application/x-www-form-urlencoded"
    })    

    const auth_req = fetch(auth_url, {
        method: "POST",
        body: form,
        headers: headers,
    }).then((auth_res) => {
        auth_res.json().then((data: auth_body) => {
            console.log(data.access_token)
        })
    })

    res.redirect("localhost:3000/profile")
})

// const test_req = fetch('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
//     headers: new Headers({"Authorization": "Bearer " + data.access_token})
// }).then((test_res) => {
//     test_res.json().then((data) => {
//         console.log(data)
//     })
// })

app.listen(port, () => { console.log(`Started spotify server | PORT ${port}`);})