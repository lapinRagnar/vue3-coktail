<template>

  <router-view/>
</template>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,700;0,900;1,200;1,300;1,700;1,900&display=swap');

  * {
    background-color: grey ;
    font-family: 'Source Sans Pro', sans-serif;
  }


  input{
    background: none;
    background-color: none;
    color: white;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 320px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid yellowgreen;
  }

  input:focus{
    outline: none;
  }

  input::placeholder{
    color: white;
  }

  
  ul{

    li{
      list-style-type: none;
      a{
        text-decoration: none;
      }
    }
  }


  button {
    text-decoration: none;
    border: 3px solid yellow;
    color: transparent;
    padding: 15px 80px;
    font-size: 28px;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 0.5s;
    position: relative;
    cursor: pointer;
  }

  button:before {
    content: "valider";
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    background: rgb(34, 34, 34);
    font-size: 28px;
    top: 0;
    left: 100%;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(0) rotatey(0);
    opacity: 0;
  }

  button:hover:before {
    transform: scale(1) rotatey(360deg);
    left: 0;
    opacity: 1;
  }

  button:after {
    content: "ok";
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    background: rgb(34, 34, 34);
    font-size: 28px;
    top: 0;
    left: 0;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(1) rotatey(0);
    opacity: 1;
  }
  button:hover:after {
    transform: scale(0) rotatey(360deg);
    left: -100%;
    opacity: 0;
  }

 

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
  
    -webkit-box-shadow: 0 0 0 1000px rgba(86, 86, 103, 0.797) inset !important;
    -webkit-text-fill-color: white !important;
    
  }




  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }



</style>