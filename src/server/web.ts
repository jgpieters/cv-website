import express from "express";
import http from "http";
import path from "path";
import log from "./util/Logger"
import bodyParser from "body-parser"
import config, { IS_PROD } from "./util/Config"

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.set("views", "public");

if (IS_PROD) {
    app.use((req: any, res: any, next: any) => {
        const host = req.get("host");
        const fullUrl = req.protocol + "://" + host + req.originalUrl;
        const forwardedProto = req.get("X-Forwarded-Proto") || req.protocol;
        if (host.includes(config.domain) === false) {
            log.verbose("server.js - status check - send 200");
            res.status(404).send("404");
            return
        } else if (forwardedProto !== "https") {
            const destinationUrl = config.protocol + req.get("host").replace(/^www\./, "") + req.url;
            log.verbose("server.js - https redirect - X-Forwarded-Proto: " + forwardedProto + " req.protocol: " + req.protocol + " | request -> " + fullUrl + " - forwarding to: " + destinationUrl);
            res.redirect(destinationUrl);
            return;
        }
        next();
    });
}

app.use("/assets", express.static(path.join(__dirname, "..", "client")));

app.get("/", (req: any, res: any) => {
    log.verbose("server.js - /: config %o", config);
    res.render("index", { config: config });
});

app.post("/mail", (req: any, res: any) => {
    log.verbose("web.ts - /mail - req.body: %o", req.body)
    let nodemailer = require('nodemailer');

    let { name, email, message } = req.body

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: config.mailconfig.auth
    });

    let mailOptions = {
        ...config.mailconfig.adresses,
        replyTo: email,
        subject: name + ' (' + email + ') from your website',
        text: message
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.send("email send")
})

export const start = (port: number): Promise<void> => {
    const server = http.createServer(app);

    return new Promise<void>((resolve, reject) => {
        server.listen(port, resolve);
    });
};