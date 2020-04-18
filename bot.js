console.log("The bot is running");
var Twit = require('twit');
var config = require("./config");
var T = new Twit(config);

var stream1 = T.stream('statuses/filter', { track: '#🤔'});

stream.on('tweet', function (tweet) {
  T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
    if(err){
      console.err(err);
    }else{
      console.log("retweet is working!");
    }
  })
})