const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { language } = req.query;
    const messages = {
        English: "Hello world",
    French: "Bonjour le monde",
    Hindi: "Namastey sansar",
    Spanish: "Hola mundo",
    German: "Hallo Welt",
    Italian: "Ciao mondo",
    Japanese: "こんにちは世界",
    Chinese: "你好，世界",
    };

    const message = messages[language] || "Language not supported";
    res.send(message);
});

module.exports = router;
