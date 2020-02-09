var fs = require('fs');
var fileToSave = 'security.json';
var userModel = {};
var userCollection = [];

function writeToFile(){
  var serializedJSON = JSON.stringify(userCollection);
  fs.writeFileSync(fileToSave, serializedJSON, { encoding: 'utf8' });
  return true;
}

function openFile(){
  try{
  var serializedJSON = fs.readFileSync(fileToSave,{encoding:'utf8'});
  userCollection = JSON.parse(serializedJSON);
  } catch(e){
    console.log(e);
  }
}

var userTemplate = {
    userEmail:"",
    userPswd:"",
    userCompletename:"",
    userID:'',
    userdateCreated: null
}

openFile();

userModel.getAll = ()=>{
    return userCollection;
}

userModel.getById = (id)=>{
    var filteredUsers = userCollection.filter(
        (o)=>{
            return o.userID === id;
        }
    );
    if(filteredUsers.length){
        return filteredUsers[0];
    }else{
        return null
    }
}

userModel.addNew = ( {useremail,userpswd,usernames} )=>{
    var newUser = Object.assign(
    {},
    userTemplate,
    {
        userEmail:useremail,
        userPswd:userpswd,
        userCompletename:usernames,
        userdateCreated: new Date().getTime()
    }
  );
    newUser.userID = userCollection.length + 1;

    userCollection.push(newUser);
    writeToFile();
    return newUser;
}

userModel.update = (id, { userpswd, usernames })=>{
    var updatingUser = userCollection.filter(
      (o, i)=>{
        return o.userID === id;
      }
    );
    if(updatingUser && updatingUser.length>0){
      updatingUser = updatingUser[0];
    } else {
      return null;
    }
    var updateUser = {};
    var newUpdatedCollection = userCollection.map(
      (o, i)=>{
        if(o.userID === id){
          updateUser = Object.assign({},
             o,
            { userPswd: userpswd, userCompletename:usernames}
          );
          return updateUser;
        }else{
          return o;
        }
      }
    );
    userCollection = newUpdatedCollection;
    writeToFile();
    return updateUser;
}

userModel.deleteByCode = (id)=>{
  var newCollection = [];
  newCollection = userCollection.filter(
    (o)=>{
      return o.userID !== id;
    }
  );
  userCollection = newCollection;
  writeToFile();
  return true;
}
/*
userCollection.push(
    Object.assign(
        {},
        userTemplate,
        {
            userEmail:"numero1@gmail.com",
            userPswd:"Operativos1",
            userCompletename:"Cuenta num 1",
            userID:1,
            userdateCreated: new Date().getTime()
        }
    )
);

userCollection.push(
    Object.assign(
        {},
        userTemplate,
        {
            userEmail:"numero2@gmail.com",
            userPswd:"Operativos2",
            userCompletename:"Cuenta num 2",
            userID:2,
            userdateCreated: new Date().getTime()
        }
    )
);
*/
// new Date(timestamp)

module.exports = userModel;


