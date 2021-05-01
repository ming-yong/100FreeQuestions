# (archived)Twitter Bot

A twitter bot that retweets #saveToBot based on ["15: Twitter Bot Tutorial - Node.js and Processing" video series by theCodingTrain](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV).

## Built with

- [Twitter API "twit"](https://github.com/ttezel/twit)
- NodeJS
- Heroku

## Notes

### Step 1: set up a Twit object

```js
//in my config.js file:
module.exports = {
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:   process.env.ACCESS_TOKEN_SECRET
}

//in my bot.js file
console.log("The bot is running");
var Twit = require('twit');
var config = require("./config");//config is used here
var T = new Twit(config);
```

### Step 2: Retweet #hashtag

```js
//in my bot.js file
var stream = T.stream('statuses/filter', { track: '#hashtag'});

stream.on('tweet', function (tweet) {
  T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
    if(err){
      console.err(err);
    }else{
      console.log("retweet is working!");
    }
  })
})
```

### Step 3: Deploy on Heroku

- Create an App(Click the "New" and "Create new app").
- Push code to my GitHub repo(variables are hidden in a .env file and is being gitignore).
- Connect my GitHub repository to Heroku.
- Click "Deploy"
- In the "Settings" tab, set up "config vars"(all the variables I hid).
