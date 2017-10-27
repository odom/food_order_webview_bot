var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
        res.send(req.query['hub.challenge'])
    } else {
        res.send('Error, wrong token')
    }
})

router.post('/', function (req, res) {
    var data = req.body;
    if (data.object === 'page') {
        if (typeof data.entry !== 'undefined')
            data.entry.forEach(function(entry) {
                var pageID = entry.id;
                var timeOfEvent = entry.time;
                // Iterate over each messaging event

                if (typeof entry.messaging !== 'undefined')
                    entry.messaging.forEach(function(event) {
                        if (event.message) {
                            console.log("###### -------- #######");
                            console.log(event.message);
                            console.log("###### -------- #######");
                        } else if (event.postback) {
                            receivedPostback(event);
                        } else {
                            console.log("Webhook received unknown event: ", event);
                        }
                    });
            });
        res.sendStatus(200);
    }
});

module.exports = router;