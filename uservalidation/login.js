 var userCollection = require('../views/config/collection')
 const bcrypt = require('bcrypt');
const { response } = require('../app');


var data = userCollection.userid
 
module.exports={

   doLogin:(userData)=>{
      return new Promise((resolve, reject) => {
         // userCollection.userid.password = await bcrypt.hash(userCollection.userid.password,10)
         // console.log(userCollection.userid.password);
         if(data.email == userData.email){
            bcrypt.compare(userData.password, userCollection.userid.password).then((loginTrue)=>{
               let response={}
               if(loginTrue){
                  console.log('login successful');
                  response.user=data;
                  response.status=true;
                  resolve(response);
               }else{
                  console.log("login failed");
                  resolve({status:false});
               }
            })
         }else{
            console.log('Login failed email');
             resolve({status:false});
         }
         
      })
}
}

 