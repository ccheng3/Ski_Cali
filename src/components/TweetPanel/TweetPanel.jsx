import React from 'react';

import Tweet from '../Tweet/Tweet';
import { Container } from '@mui/material';

export default function TweetPanel(props) {
   const tweets = props.resort.twitter.tweets.map(tweet => {
      const tweetDateStringArray = tweet.created_at.split(' ');

      // parse logic for Tweet published hour
      let tweetDateFormatTime = tweetDateStringArray[3].slice(0, 5);
      const tweetDateHour = parseInt(tweetDateFormatTime.slice(0, 2));
      tweetDateFormatTime = tweetDateHour > 12 ?
         (tweetDateHour - 12).toString() + tweetDateFormatTime.slice(2) + ' PM' :
         tweetDateHour + ' AM';
      const tweetDateClean = `${tweetDateStringArray[0]} ${tweetDateFormatTime} - ${tweetDateStringArray[1]} ${tweetDateStringArray[2]}, ${tweetDateStringArray[5]}`;

      // grab and render the tweet's image if present, otherwise render nothing.
      const tweetMediaObject = tweet.entities.media;
      const tweetMediaFile = tweetMediaObject === undefined ? null :
         <Container style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1.2rem',
         }}>
            <img width='350px' height='auto' src={tweetMediaObject[0].media_url_https} />
         </Container>

      const cleanTweetText = tweet.text.includes('https') ? tweet.text.substring(0, tweet.text.search('https')) :
         tweet.text;
      const tweetTextURL = tweet.text
         .substring(tweet.text.search('https'), tweet.text.search('https') + tweet.text.substring(tweet.text.search('https'))
            .search(' '))
         .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

      return (
         <Tweet tweetDateClean={tweetDateClean}
            tweetMediaFile={tweetMediaFile}
            resort={props.resort}
            tweetText={cleanTweetText}
            tweetTextURL={tweetTextURL}
            key={tweet.id_str}
         />
      );
   })

   return tweets;
}