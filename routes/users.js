var express = require('express');
var userLogin = require('../uservalidation/login')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
let user = req.session.user
  let products=[
    {
      name : "PS-1",
      category : "Action, Adventure, Drama",
      description :"Vandiyathevan, a brave and brilliant young man sets out to cross the Chola land to deliver a message from the Crown Prince Adithya Karikalan. The narrative deals with attempts by his sister Kundavai to bring back Arulmozhivarman to establish political peace in a land seemingly beset with unrest.",
      Image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA5MGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323897-zvgjhaqnxq-portrait.jpg"
    },
    {
      name : "Vikram Vedha",
      category : "Action, Crime, Thriller",
      description :"Vikram an encounter specialist raids a place killing all the gangsters who work for a dreaded gangster Vedha but fails to get any information on his hide out.Vedha has spread his fear over the region by killing around 16 people and is currently underground due to fear of being arrested.",
      Image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAzMmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00319143-egauxbljnf-portrait.jpg"
    },
    {
      name : "Pathonpatham Noottandu",
      category : "Action, Drama, Historical",
      description :"Arattupuzha Velayudha Panicker is a 19th century social reformer and warrior. He was born into an affluent and most influential Master arts Ezhava family of Travancore. Around the same time, Nangeli, who was from a poor Ezhava family, fought against the dominant caste oppressions by the upper classe",
      Image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337245-kqjxjaaqws-portrait.jpg"
    },
    {
      name : "Avatar",
      category : "Action,Adventure,Thriller",
      description :"Re-releasing in Indian cinemas on 23 September, 2022. A paraplegic marine, Jake, is sent on a corporate mission to the moon Pandora inhabited by the natives called Na`vi. During his mission, Jake is accepted by the natives but remains torn between his orders and protecting a place he calls home.",
      Image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAyOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00004000-qhqeymhugt-portrait.jpg"
    },
    
  ]
  res.render('index',{products,login:user});
});

router.get('/login',(req,res)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
  res.render('user/login',{loginErr:req.session.loginErr})
  req.session.loginErr=false;
  }
})

router.post('/login',(req,res)=>{
userLogin.doLogin(req.body).then((response)=>{
  if(response.status){
    req.session.loggedIn=true;
    req.session.user = response.user;
    res.redirect('/');
  }else{
    req.session.loginErr = true;
    res.redirect('/login');
  }
})
})



router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect("/login");
})
 
module.exports = router;



