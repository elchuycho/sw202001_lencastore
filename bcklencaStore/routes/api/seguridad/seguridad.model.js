var userModel = {};

var userCollection = [];

var userTemplate = {
    userEmail:"",
    userPswd:"",
    userCompletename:"",
    userID:'',
    userdateCreated: null
}

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

userCollection.push(
    Object.assign(
        {},
        userTemplate,
        {
            userEmail:"luischuy123@hotmail.com",
            userPswd:"Operativos2",
            userCompletename:"Luis Chuy Cho",
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
            userEmail:"lllll123@hotmail.com",
            userPswd:"Operatioiivos2",
            userCompletename:"lollll",
            userID:2,
            userdateCreated: new Date().getTime()
        }
    )
);

module.exports = userModel;


