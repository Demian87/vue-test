<template lang="pug">
.rm_overlay#fundraise
  .rm_overlay--modal
    .rm_modal--header
      h1 Let's Get Started
        p 1,231 человек уже планируют расходы с нами.
    .rm_modal--content
      .rm_input-group
          label Ваше имя
            span *
          input(type='text', placeholder='Имя', v-model='user.name')
      .rm_input-group.split
        .rm_input-group--col.w-50
          label Ваш логин
            span *
          input(type='text', placeholder='Логин', v-model='user.login')
        .rm_input-group--col.w-50
          label Ваш пароль
            span *
          input(type='password', placeholder='Пароль', v-model='user.password')
      .rm_input-group
        label Email
          span *
        input(type='text', placeholder='Ваш Email', v-model='user.email')
      a.rm_button--next(href='#/register' v-on:click='registerUser(user)') Зарегистрироваться
      .rm_modal--footer
        .rm_float--right
          | Already have an account? 
          a.rm_link(href='#/login') Sign In.
</template>

<script>
export default {
    name: "registerForm",
    data: function() {
        return {
        user: {}
        }
    },
    methods: {
      registerUser : function(userToReg) {
        if (userToReg) {
          // POST register
          //{"request":"register","registerdata":{"login":"Demian3","password":"kukareku","name":"Demian","mail":"volkov.a@volantsoft.ru"}}
          var req = {
            request: "register",
            registerdata: {
              login: userToReg.login,
              password: userToReg.password,
              name: userToReg.name,
              mail: userToReg.mail
            }
          };
          this.$http.post('http://moneycalendar.volantsoft.ru/request.php', JSON.stringify(req)).then(response => {
            // get body data
            alert(response.body);
            this.someData = JSON.parse(response.body);

          }, response => {
            // error callback
          });
        }
      }
    }
}
</script>

<!--<style lang="stylus" scoped>
@import 'nib'

*
  box-sizing border-box

html,
body
  min-height 100%
  margin 0
  padding 0
  
body
  background linear-gradient(-45deg, #031634, #033649)
  background-repeat no-repeat
  background-size cover
  
/*
 * Variables
 */
$screenXS = 468px
$screenSM = 768px
$screenMD = 990px

$fn = "Avenir", "Helvetica Neue", "Helvetica", "Arial", sans-serif

$bl = #111
$gr = #E1E1E1

$green = #00B16A
$text = #22313F

.rm_overlay
  background rgba(#4F4F4F, 0.15)
  fixed top left
  height 100%
  overflow auto
  width 100%
  
.rm_overlay--modal
  absolute top 0 left 0 right 0 bottom 0
  font-family $fn
  margin 30px auto
  padding 0 30px 30px
  width 100%
  @media (min-width: $screenSM)
    max-width 560px

.rm_modal--header
  color white
  letter-spacing 0.025em
  text-align center
  & > h1
    font-size 36px
    font-weight 900
    text-transform uppercase
    & > p
      font-size 16px
      font-weight 100
      margin 0
      opacity 0.85
      text-transform initial
  .rm_header--navigation
    list-style none
    margin 0 0 15px
    padding 0
    text-align right
    clearfix()
    li
      display inline-block
      transition all 300ms ease
      span:first-of-type
        border 1px solid white
        border-radius 32px
        display inline-block
        height 32px
        line-height 32px
        text-align center
        width 32px
        & + span
          display none
      &.active span + span
        margin-left 10px
        display inline-block
      &:not(.rm_float--right)
        margin-right 5px
      &.rm_float--right
        margin-left 5px
.rm_modal--content
  background white
  box-shadow 0 0 20px 30px rgba(black, 0.25)
  border-radius 2px
  font-family $fn
  margin 0 auto 15px
  max-height 100%
  // min-height 200px
  overflow auto
  padding 30px
.rm_modal--footer
  color $text
  font-size 12px
  margin 15px 0 0
  clearfix()
/*
 * Form Control
 */
.rm_input-group
  border 1px solid $gr
  margin-bottom 15px
  padding 10px
  width 100%
  label
    color $bl
    display inline-block
    font-size 12px
    font-weight 600
    line-height 12px
    margin 0
    text-transform uppercase
    vertical-align top
    span
      color #CF000F
      display inline-block
      vertical-align top
  input[type="text"], 
  input[type="password"],
  select
    appearance none
    border 0
    border-radius 0
    color lighten($bl, 15%)
    font-size 16px
    font-weight 300
    height 24px
    padding 0
    width 100%
  &.split
    clearfix()
    .rm_input-group--col
      float left
      padding-right 10px
      input
        border-right 1px solid $gr
      &:nth-child(n+2)
        padding-left 10px
      &:last-of-type
        padding-right 0
        input
          border-right 0
      &.w-50
        width 50%
      &.w-33
        width 33.33333%
.rm_button--next
  appearance none
  background-color $green
  border-radius 2px
  color white
  display block
  font-size 20px
  font-weight 600
  letter-spacing 0.15em
  padding 15px 20px
  text-align center
  text-decoration none
  text-transform uppercase
  width 100%
.rm_link
  color $text
  font-size 12px
  font-weight 300
  
/*
 * Niche Styles
 * @gallery, @floats
 */
.rm_float--right
  float right
.rm_float--left
  float left
</style>-->
<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}
body {
  background: -webkit-linear-gradient(135deg, #031634, #033649);
  background: -moz-linear-gradient(135deg, #031634, #033649);
  background: -o-linear-gradient(135deg, #031634, #033649);
  background: -ms-linear-gradient(135deg, #031634, #033649);
  background: linear-gradient(-45deg, #031634, #033649);
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
/*
 * Variables
 */
.rm_overlay {
  background: rgba(79,79,79,0.15);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  overflow: auto;
  width: 100%;
}
.rm_overlay--modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: "Avenir", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 30px auto;
  padding: 0 30px 30px;
  width: 100%;
}
@media (min-width: 768px) {
  .rm_overlay--modal {
    max-width: 560px;
  }
}
.rm_modal--header {
  color: #fff;
  letter-spacing: 0.025em;
  text-align: center;
}
.rm_modal--header > h1 {
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
}
.rm_modal--header > h1 > p {
  font-size: 16px;
  font-weight: 100;
  margin: 0;
  opacity: 0.85;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";
  filter: alpha(opacity=85);
  text-transform: initial;
}
.rm_modal--header .rm_header--navigation {
  list-style: none;
  margin: 0 0 15px;
  padding: 0;
  text-align: right;
  zoom: 1;
}
.rm_modal--header .rm_header--navigation:before,
.rm_modal--header .rm_header--navigation:after {
  content: "";
  display: table;
}
.rm_modal--header .rm_header--navigation:after {
  clear: both;
}
.rm_modal--header .rm_header--navigation li {
  display: inline-block;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  transition: all 300ms ease;
}
.rm_modal--header .rm_header--navigation li span:first-of-type {
  border: 1px solid #fff;
  border-radius: 32px;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  text-align: center;
  width: 32px;
}
.rm_modal--header .rm_header--navigation li span:first-of-type + span {
  display: none;
}
.rm_modal--header .rm_header--navigation li.active span + span {
  margin-left: 10px;
  display: inline-block;
}
.rm_modal--header .rm_header--navigation li:not(.rm_float--right) {
  margin-right: 5px;
}
.rm_modal--header .rm_header--navigation li.rm_float--right {
  margin-left: 5px;
}
.rm_modal--content {
  background: #fff;
  -webkit-box-shadow: 0 0 20px 30px rgba(0,0,0,0.25);
  box-shadow: 0 0 20px 30px rgba(0,0,0,0.25);
  border-radius: 2px;
  font-family: "Avenir", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 0 auto 15px;
  max-height: 100%;
  overflow: auto;
  padding: 30px;
}
.rm_modal--footer {
  color: #22313f;
  font-size: 12px;
  margin: 15px 0 0;
  zoom: 1;
}
.rm_modal--footer:before,
.rm_modal--footer:after {
  content: "";
  display: table;
}
.rm_modal--footer:after {
  clear: both;
}
/*
 * Form Control
 */
.rm_input-group {
  border: 1px solid #e1e1e1;
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
}
.rm_input-group label {
  color: #111;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  margin: 0;
  text-transform: uppercase;
  vertical-align: top;
}
.rm_input-group label span {
  color: #cf000f;
  display: inline-block;
  vertical-align: top;
}
.rm_input-group input[type="text"],
.rm_input-group input[type="password"],
.rm_input-group select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  border-radius: 0;
  color: #353535;
  font-size: 16px;
  font-weight: 300;
  height: 24px;
  padding: 0;
  width: 100%;
}
.rm_input-group.split {
  zoom: 1;
}
.rm_input-group.split:before,
.rm_input-group.split:after {
  content: "";
  display: table;
}
.rm_input-group.split:after {
  clear: both;
}
.rm_input-group.split .rm_input-group--col {
  float: left;
  padding-right: 10px;
}
.rm_input-group.split .rm_input-group--col input {
  border-right: 1px solid #e1e1e1;
}
.rm_input-group.split .rm_input-group--col:nth-child(n+2) {
  padding-left: 10px;
}
.rm_input-group.split .rm_input-group--col:last-of-type {
  padding-right: 0;
}
.rm_input-group.split .rm_input-group--col:last-of-type input {
  border-right: 0;
}
.rm_input-group.split .rm_input-group--col.w-50 {
  width: 50%;
}
.rm_input-group.split .rm_input-group--col.w-33 {
  width: 33.33333%;
}
.rm_button--next {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #00b16a;
  border-radius: 2px;
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}
.rm_link {
  color: #22313f;
  font-size: 12px;
  font-weight: 300;
}
/*
 * Niche Styles
 * @gallery, @floats
 */
.rm_float--right {
  float: right;
}
.rm_float--left {
  float: left;
}
</style>
