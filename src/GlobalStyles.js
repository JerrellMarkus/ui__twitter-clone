import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 

  
  
@media (prefers-color-scheme: light) {
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  
      color: var(--#1da1f2);
    }
  
  
  
    :root {
      /* Background color */
  
      --primary: #FFF;
   
   
      /*  Suggestions Color */
  
      --secondary: #F7F9FA;
      
      /*  Search Background */
  
      --search: #EBEEF0;
      
      /* */
  
      --white: #D9D9D9;
  
      /*@Name Colors */
      --gray: #5b7083;
      
      /* */
      --outline: #EBEEF0;
          
      /* */
      span.Icons {
        color: #000;
      }   
      span.username {
        color: #5b7083;
      }
      
      span.tweetbutton {
        color: #fff;
      }
      
      
  
      /* */
      --retweet: #17bf63;
      
      /* */
      --like: #e0245e;
   
      /* */
      --twitter: #1da1f2;    
      
      /* Hover over icons background */
  
  
      --twitter-dark-hover: rgba(29, 161, 242, 0.1);
  
      /* */
  
      --twitter-light-hover: #2C8ED6;
      /* Unknown */
      background: var(--primary);
    }
  p, h1, strong, .title {color: #000;}
    html, body, #root {
      max-height: 100vh;
      max-width: 100vw;
      width: 100%;
      height: 100%;
    }
  
    *, button, input {
      border: 0;
      background: none;
      font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,'Helvetica Neue', sans-serif;
    } 
  
    svg.home, svg.explore, svg.notifications, svg.bookmarks, svg.profile, svg.more, svg.messages, svg.lists  {
      cursor: pointer;
      display: inline-block;
      fill: #000;
      font-size: 15px;
      height: 1.75rem;
      list-style: none;
      list-style: none;
      max-width: 100%;
      position: relative;
      user-select: none;
      vertical-align: text-bottom;
    }
    
    svg.home-mobile, svg.explore-mobile, svg.notifications-mobile, svg.messages-mobile  {
    width: 31px;
    height: 31px;
    cursor: pointer;
    border-radius: 30px;
    background: transparent;
  
    fill: var(--gray);
  
    &:hover,
    &:active {
      fill: #1da1f2;
      border-radius: 30px;
  
    }
    }
    
    svg.comment {color: #5B7083; cursor: pointer; display: inline-block; fill: currentcolor; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 15px; height: 1.25em; line-height: 19.6875px; max-width: 100%; position: relative; user-select: none; vertical-align: text-bottom; white-space: nowrap; width: 1.25em; word-wrap: break-word;}
    
    
    svg.retweet {
      
      color: #17BF63; cursor: pointer; display: inline-block; fill: currentcolor; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 15px; height: 1.25em; line-height: 19.6875px; max-width: 100%; position: relative; user-select: none; vertical-align: text-bottom; white-space: nowrap; width: 1.25em; word-wrap: break-word;
    }
  
  
  

  
  div.tweetButton {
    width: max-content;
    height: max-content;
  }
  svg.search {
    color: #8899A6; display: inline-block; fill: currentcolor; font-size: 15px; height: 1.25em; max-width: 100%; min-width: 30px; padding-left: 10px; position: relative; user-select: none; vertical-align: text-bottom;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  div.css-1dbjc4n.r-1niwhzg.r-18bvks7.r-1867qdf.r-1phboty.r-1yadl64.r-ku1wi2.r-1udh08x {
    padding-left: 15px;
    -webkit-box-align: stretch;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    align-items: stretch;
    background-color: transparent;
    border: 0 solid #5b7083;
    border-radius: 16px;
    box-sizing: border-box;
    color: #000000;
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    font-size: 15px;
    margin: 0 0 15px;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  
  nav.css-1dbjc4n.r-18u37iz.r-1w6e6rj.r-1j3t67a {
    -webkit-box-align: stretch;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    align-items: stretch;
    border: 0 solid #000000;
    box-sizing: border-box;
    color: #000000;
    display: flex;
    flex-basis: auto;
    flex-direction: row;
    flex-shrink: 0;
    flex-wrap: wrap;
    font-size: 15px;
    margin: 0;
    min-height: 0;
    min-width: 0;
    padding: 0 15px;
    position: relative;
    z-index: 0;
  }
  
  a.css-4rbku5.css-18t94o4.css-901oao.r-111h2gw.r-1loqt21.r-1qd0xha.r-n6v787.r-16dba41.r-1sf4r6n.r-hrzydr.r-bcqeeo.r-1qfoi16.r-qvutc0 {
    background-color: transparent;
    border: 0 solid #000000;
    box-sizing: border-box;
    color: #5b7083;
    cursor: pointer;
    display: inline;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-stretch: inherit;
    font-style: inherit;
    font-variant-caps: inherit;
    font-variant-east-asian: inherit;
    font-variant-ligatures: inherit;
    font-variant-numeric: inherit;
    font-weight: 400;
    line-height: calc(19.6875px);
    list-style: none;
    list-style: none;
    margin: 2px 0;
    min-width: 0;
    overflow-wrap: break-word;
    padding: 0 10px 0 0;
    text-align: inherit;
    text-decoration: none;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  
  span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 {
    border: 0 solid #000000;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    display: inline;
    font-family: inherit;
    font-size: inherit;
    font-stretch: inherit;
    font-style: inherit;
    font-variant-caps: inherit;
    font-variant-east-asian: inherit;
    font-variant-ligatures: inherit;
    font-variant-numeric: inherit;
    font-weight: inherit;
    line-height: inherit;
    list-style: none;
    margin: 0;
    min-width: 0;
    overflow-wrap: break-word;
    padding: 0;
    white-space: inherit;
    word-wrap: break-word;
  }
  
  div.css-18t94o4.css-1dbjc4n.r-hrzydr.r-1qfoi16 {
    -webkit-box-align: stretch;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    align-items: stretch;
    border: 0 solid #000000;
    box-sizing: border-box;
    color: #000000;
    cursor: pointer;
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    font-size: 15px;
    margin: 2px 0;
    min-height: 0;
    min-width: 0;
    padding: 0 10px 0 0;
    position: relative;
    z-index: 0;
  }
  
  div.css-901oao.r-111h2gw.r-1qd0xha.r-n6v787.r-16dba41.r-1sf4r6n.r-bcqeeo.r-qvutc0 {
    border: 0 solid #000000;
    box-sizing: border-box;
    color: #5b7083;
    cursor: pointer;
    display: inline;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: calc(19.6875px);
    margin: 0;
    min-width: 0;
    overflow-wrap: break-word;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  
  svg.r-4qtqp9.r-yyyyoo.r-ip8ujx.r-dnmrzs.r-1p4rafz.r-bnwqim.r-1plcrui.r-lrvibr {
    color: #5b7083;
    cursor: pointer;
    display: inline-block;
    fill: currentcolor;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    height: 1em;
    line-height: 19.6875px;
    max-width: 100%;
    padding-left: 2px;
    padding-right: 2px;
    position: relative;
    user-select: none;
    vertical-align: text-bottom;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  
  circle {
    color: #5b7083;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 19.6875px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  
  div.css-901oao.r-111h2gw.r-1qd0xha.r-n6v787.r-16dba41.r-1sf4r6n.r-hrzydr.r-bcqeeo.r-1qfoi16.r-qvutc0 {
    border: 0 solid #000000;
    box-sizing: border-box;
    color: #5b7083;
    display: inline;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: calc(19.6875px);
    margin: 2px 0;
    min-width: 0;
    overflow-wrap: break-word;
    padding: 0 10px 0 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
    
button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined
  {
    
    color: #000;
    background-color: #1da1f2;
  
  }

}
  
  
  @media (prefers-color-scheme: dark) {
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--#1da1f2);
  }



  :root {
    /* Background color */

    --primary: #15202b;
 
 
    /*  Suggestions Color */

    --secondary: #192734;
    
    /*  Search Background */

    --search: #253341;
    
    /* */

    --white: #D9D9D9;

    /*@Name Colors */
    --gray: #8899a6;
    
    /* */
    --outline: #38444D;
        
    /* */
    span.Icons {
      color: #FFF;
    }   
     span.username {
      color: #8899a6;
    }

    span.tweetbutton {
      color: #fff;
    }
    	background: var(--twitter-dark-hover);
	padding-right: 20px;
	color: #1da1f2;

    span.Icons:hover {
      color: #1da1f2;
    }

    /* */
    --retweet: #17bf63;
    
    /* */
    --like: #e0245e;
 
    /* */
    --twitter: #1da1f2;    
    
    /* Hover over icons background */


    --twitter-dark-hover: rgba(29, 161, 242, 0.1);

    /* */

    --twitter-light-hover: #2C8ED6;
    /* Unknown */
    background: var(--primary);
  }
p, h1, strong, .title {color: #fff;}
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,'Helvetica Neue', sans-serif;
  } 

  svg.home, svg.explore, svg.notifications, svg.bookmarks, svg.profile, svg.more, svg.messages, svg.lists  {
    cursor: pointer;
    display: inline-block;
    fill: #fff;
    font-size: 15px;
    height: 1.75rem;
    list-style: none;
    list-style: none;
    max-width: 100%;
    position: relative;
    user-select: none;
    vertical-align: text-bottom;
  }
  
  svg.home-mobile, svg.explore-mobile, svg.notifications-mobile, svg.messages-mobile  {
  width: 31px;
  height: 31px;
  cursor: pointer;
  border-radius: 30px;
  background: transparent;

  fill: var(--gray);

  &:hover,
  &:active {
    fill: #1da1f2;
    border-radius: 30px;

  }
  }
  
  svg.comment {color: #5B7083; cursor: pointer; display: inline-block; fill: currentcolor; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 15px; height: 1.25em; line-height: 19.6875px; max-width: 100%; position: relative; user-select: none; vertical-align: text-bottom; white-space: nowrap; width: 1.25em; word-wrap: break-word;}
  
  
  svg.retweet {
    
    color: #17BF63; cursor: pointer; display: inline-block; fill: currentcolor; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 15px; height: 1.25em; line-height: 19.6875px; max-width: 100%; position: relative; user-select: none; vertical-align: text-bottom; white-space: nowrap; width: 1.25em; word-wrap: break-word;
  }




div.tweetButton {
  width: max-content;
  height: max-content;
}
svg.search {
  color: #8899A6; display: inline-block; fill: currentcolor; font-size: 15px; height: 1.25em; max-width: 100%; min-width: 30px; padding-left: 10px; position: relative; user-select: none; vertical-align: text-bottom;
}




















div.css-1dbjc4n.r-1niwhzg.r-18bvks7.r-1867qdf.r-1phboty.r-1yadl64.r-ku1wi2.r-1udh08x {
  padding-left: 15px;
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  background-color: transparent;
  border: 0 solid #38444D;
  border-radius: 16px;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 15px;
  margin: 0 0 15px;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
  position: relative;
  z-index: 0;
}

nav.css-1dbjc4n.r-18u37iz.r-1w6e6rj.r-1j3t67a {
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  align-items: stretch;
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-size: 15px;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0 15px;
  position: relative;
  z-index: 0;
}

a.css-4rbku5.css-18t94o4.css-901oao.r-111h2gw.r-1loqt21.r-1qd0xha.r-n6v787.r-16dba41.r-1sf4r6n.r-hrzydr.r-bcqeeo.r-1qfoi16.r-qvutc0 {
  background-color: transparent;
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #8899A6;
  cursor: pointer;
  display: inline;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-stretch: inherit;
  font-style: inherit;
  font-variant-caps: inherit;
  font-variant-east-asian: inherit;
  font-variant-ligatures: inherit;
  font-variant-numeric: inherit;
  font-weight: 400;
  line-height: calc(19.6875px);
  list-style: none;
  list-style: none;
  margin: 2px 0;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0 10px 0 0;
  text-align: inherit;
  text-decoration: none;
  white-space: pre-wrap;
  word-wrap: break-word;
}

span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 {
  border: 0 solid #000000;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  font-stretch: inherit;
  font-style: inherit;
  font-variant-caps: inherit;
  font-variant-east-asian: inherit;
  font-variant-ligatures: inherit;
  font-variant-numeric: inherit;
  font-weight: inherit;
  line-height: inherit;
  list-style: none;
  margin: 0;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0;
  white-space: inherit;
  word-wrap: break-word;
}

div.css-18t94o4.css-1dbjc4n.r-hrzydr.r-1qfoi16 {
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 15px;
  margin: 2px 0;
  min-height: 0;
  min-width: 0;
  padding: 0 10px 0 0;
  position: relative;
  z-index: 0;
}

div.css-901oao.r-111h2gw.r-1qd0xha.r-n6v787.r-16dba41.r-1sf4r6n.r-bcqeeo.r-qvutc0 {
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #8899A6;
  cursor: pointer;
  display: inline;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: calc(19.6875px);
  margin: 0;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

svg.r-4qtqp9.r-yyyyoo.r-ip8ujx.r-dnmrzs.r-1p4rafz.r-bnwqim.r-1plcrui.r-lrvibr {
  color: #8899A6;
  cursor: pointer;
  display: inline-block;
  fill: currentcolor;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: 1em;
  line-height: 19.6875px;
  max-width: 100%;
  padding-left: 2px;
  padding-right: 2px;
  position: relative;
  user-select: none;
  vertical-align: text-bottom;
  white-space: pre-wrap;
  word-wrap: break-word;
}

circle {
  color: #8899A6;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 19.6875px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

div.css-901oao.r-111h2gw.r-1qd0xha.r-n6v787.r-16dba41.r-1sf4r6n.r-hrzydr.r-bcqeeo.r-1qfoi16.r-qvutc0 {
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #8899A6;
  display: inline;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: calc(19.6875px);
  margin: 2px 0;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0 10px 0 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}}


  
  
@media (min-width: 500px) {
  svg.tweetbutton {
    display: block;
  margin-left: 19px;
  font-weight: bold;
  top: -3px;
  fill: #FFF;
  right: 30px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-weight: 700;
  height: 1.5em;
  list-style: none;
  list-style: none;
  max-width: 100%;
  overflow-wrap: break-word;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: pre-wrap;
  width: 46px;
  word-wrap: break-word;
  height: 25px;
  font-size: 25px;
  font-weight: bold;
}}




@media (min-width: 1280px) {
  svg.tweetbutton {
display: none !important;
margin-left: 19px;
font-size: 19px;
font-weight: bold;
}}




@media (min-width: 500px) {
  svg.tweetbutton {
  	display: block;
	margin-left: 19px;
  font-weight: bold;
  top: -3px;
  fill: #FFF;
	right: 30px;
	cursor: pointer;
	position: relative;
	display: inline-block;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
	font-weight: 700;
	height: 1.5em;
	list-style: none;
	list-style: none;
	max-width: 100%;
	overflow-wrap: break-word;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	white-space: pre-wrap;
	width: 46px;
	word-wrap: break-word;
	height: 25px;
	font-size: 25px;
	font-weight: bold;

  }
  .MuiButton{
    color: red !important;
  }
}
  
  span.Icons {
    padding-right: 10px;
  }
  button:hover > span.Icons {
    color: #1da1f2;
  }
  
  div.css-1dbjc4n.r-1777fci.r-ywje51.r-1ye8kvj.r-1qmwkkh.r-1oqcu8e.r-13qz1uu {
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -webkit-box-pack: center;
  align-items: stretch;
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 15px;
  justify-content: center;
  margin: auto;
  max-width: 600px;
  min-height: 0;
  min-width: 45vw;
  padding: 15px;
  position: relative;
  width: 100%;
  z-index: 0;
}

div.css-1dbjc4n.r-1pcd2l5.r-13qz1uu {
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 15px;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 20px;
  position: relative;
  width: 100%;
  z-index: 0;
}

svg.r-k200y.r-jwli3a.r-4qtqp9.r-yyyyoo.r-5sfk15.r-dnmrzs.r-1mi0q7o.r-bnwqim.r-1plcrui.r-lrvibr {
  align-self: flex-start;
  color: #FFFFFF;
  display: inline-block;
  fill: currentcolor;
  font-size: 15px;
  height: 3rem;
  max-width: 100%;
  padding-bottom: 10px;
  position: relative;
  user-select: none;
  vertical-align: text-bottom;
}

path {
  color: #FFFFFF;
  font-size: 15px;
}

div.css-901oao.r-jwli3a.r-o1rotj.r-1ocx9oo.r-b88u0q.r-nm9kes.r-1sdjc60.r-1d332fb.r-bcqeeo.r-qvutc0 {
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #FFFFFF;
  display: inline;
  font-family: Chirp, Verdana, System;
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 65px;
  margin: 49px 0;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 {
  border: 0 solid #000000;
  box-sizing: border-box;
  color: inherit;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  font-stretch: inherit;
  font-style: inherit;
  font-variant-caps: inherit;
  font-variant-east-asian: inherit;
  font-variant-ligatures: inherit;
  font-variant-numeric: inherit;
  font-weight: inherit;
  letter-spacing: -1.2px;
  line-height: inherit;
  margin: 0;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0;
  white-space: inherit;
  word-wrap: break-word;
}

div.css-901oao.r-jwli3a.r-o1rotj.r-1ra0lkn.r-b88u0q.r-ad9z0x.r-1yflyrw.r-bcqeeo.r-qvutc0 {
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #FFFFFF;
  display: inline;
  font-family: Chirp, Verdana, System;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.3125;
  margin: 0 0 30px;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

div.css-1dbjc4n.r-18u37iz {
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  align-items: stretch;
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-shrink: 0;
  font-size: 15px;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0;
  position: relative;
  z-index: 0;
}

a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1loqt21.r-13awgt0.r-1w2pmg.r-117bsoe.r-1mf7evn.r-17w48nw.r-1jayybb.r-17bavie.r-1ny4l3l.r-15bsvpr.r-o7ynqc.r-6416eg.r-lrvibr {
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  background-color: #1DA1F2;
  border: 1px solid transparent;
  border-radius: 9999px;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: inherit;
  font-size: inherit;
  font-stretch: inherit;
  font-style: inherit;
  font-variant-caps: inherit;
  font-variant-east-asian: inherit;
  font-variant-ligatures: inherit;
  font-variant-numeric: inherit;
  font-weight: inherit;
  height: 0;
  line-height: inherit;
  list-style: none;
  list-style: none;
  margin: 0 20px 20px 0;
  max-width: 380px;
  min-height: 49px;
  min-width: calc(78.89px);
  outline: none;
  padding: 0 30px;
  position: relative;
  text-align: inherit;
  text-decoration: none;
  transition-duration: .2s;
  transition-property: background-color, box-shadow;
  user-select: none;
  z-index: 0;
}

div.css-901oao.r-1awozwy.r-jwli3a.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-b88u0q.r-1777fci.r-ad9z0x.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0 {
  -webkit-box-align: center;
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  align-items: center;
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  justify-content: center;
  line-height: 1.3125;
  list-style: none;
  margin: 0;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0;
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
}

span.css-901oao.css-16my406.css-bfa6kz.r-poiln3.r-bcqeeo.r-qvutc0 {
  border: 0 solid #000000;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  font-stretch: inherit;
  font-style: inherit;
  font-variant-caps: inherit;
  font-variant-east-asian: inherit;
  font-variant-ligatures: inherit;
  font-variant-numeric: inherit;
  font-weight: inherit;
  line-height: inherit;
  list-style: none;
  margin: 0;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
}

a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-p1n3y5.r-sdzlij.r-1phboty.r-rs99b7.r-1loqt21.r-13awgt0.r-1w2pmg.r-117bsoe.r-17w48nw.r-1jayybb.r-17bavie.r-1ny4l3l.r-15bsvpr.r-o7ynqc.r-6416eg.r-lrvibr {
  -webkit-box-align: stretch;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  align-items: stretch;
  background-color: transparent;
  border: 1px solid #1DA1F2;
  border-radius: 9999px;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: inherit;
  font-size: inherit;
  font-stretch: inherit;
  font-style: inherit;
  font-variant-caps: inherit;
  font-variant-east-asian: inherit;
  font-variant-ligatures: inherit;
  font-variant-numeric: inherit;
  font-weight: inherit;
  height: 0;
  line-height: inherit;
  list-style: none;
  list-style: none;
  margin: 0 0 20px;
  max-width: 380px;
  min-height: 49px;
  min-width: calc(78.89px);
  outline: none;
  padding: 0 30px;
  position: relative;
  text-align: inherit;
  text-decoration: none;
  transition-duration: .2s;
  transition-property: background-color, box-shadow;
  user-select: none;
  z-index: 0;
}

div.css-901oao.r-1awozwy.r-13gxpu9.r-6koalj.r-18u37iz.r-16y2uox.r-1qd0xha.r-a023e6.r-b88u0q.r-1777fci.r-ad9z0x.r-dnmrzs.r-bcqeeo.r-q4m81j.r-qvutc0 {
  -webkit-box-align: center;
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  align-items: center;
  border: 0 solid #000000;
  box-sizing: border-box;
  color: #1DA1F2;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  justify-content: center;
  line-height: 1.3125;
  list-style: none;
  margin: 0;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: break-word;
  padding: 0;
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
}

  `

