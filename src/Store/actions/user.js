import * as actionType from './actionTypes';
import {    //articlesRef_3P, 
            dbRef,
            //usersRef,
            pushRef//, 
            // usrTodoRef 
} from '../config/fb';


// let artStored = [
//     {"ver": contentUpdateVer, 
//     "id": 31, 
//     "title": "How We Decided To Split Equity As Co-Founders", 
//     "url": "https://entrepreneurshandbook.co/how-we-decided-to-split-equity-as-co-founders-of-digital-press-cffd464232dd",
//     "image": "https://cdn-images-1.medium.com/max/2000/1*9yqQX9xPZ95KisyOlHkWGQ.jpeg", 
//     "category": "Best Practices", 
//     "length": "4 Mins", 
//     "read": 0, 
//     "author": "Nicolas Cole", 
//     "publisher": "Medium/Entrepreneur's Handbook"},
// ];

export const setupAnal = () => {
    console.log('[Act/User] [setupAnal] -> ');
    return {
        type: actionType.DASH_FETCH_DAILY_COUNT
    }
}

export const writeUserPersonalInfo = (uID, uGname, uFname, uEmail, uPic, uPhone) => {
    console.log('[Act/User] [writeUserPersonalInfo]');
    const usersRef=dbRef.child('users/' + uID);

    usersRef.set({
        name: uGname+" "+uFname,
        email: uEmail,
        dp: uPic,
        mobile: uPhone
      });
    // usersRef.push({[uID]: {
    //     'Given_Name': uName
    // }});
    return{
        type: null
    }
}

export const setupPushNotifications = () =>{
    pushRef.requestPermission()//Returns a Promise
    .then(()=>{
        console.log('[Act/User] [setupPushNotifications] [Promise Lvl1] User Gave Permission');
        return pushRef.getToken();
    })
    .then((token)=>{
        console.log("[Act/User] [setupPushNotifications] [Promise Lvl2] User's Token is:", token);
    })
    .catch(() => {
        console.log("[Act/User] [setupPushNotifications] [Promise Lvl1] User Didn't Give Permission");
        //Add Logic to prompt again. Add snackbar to ask not now or never. Add trigger in settings to toggle permission if user chooses to.
    })
}

export const readUserHistory = (uID) =>{
    let hist = {};
    return async dispatch => {
        try {
            const readArts=dbRef.child('users/' + uID + '/readHistory');
            readArts.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    let childKey = childSnapshot.key;
                    let childData = childSnapshot.val();
                    console.log('[Act/Content] [readFromFB] -> Data Key: ',childKey, 'Data Value: ', childData);
                    hist[childKey]=childData;
                });
            }).then(() => dispatch(readSuccess(hist)));
        } catch(err){
            dispatch(readFailure(err));
        }
}};

export const readSuccess = (hist) => {
    console.log('User history read succesfuly! :): ', hist );
    return { 
            type: actionType.PROF_SET_USERDATA, 
            val: hist
        };
};

const readFailure = (error) => {
    console.log('User history read failure :(: ', error);
    return{type: null};
}

export const updateUserReadHistory = (found, uID, id, art, Readart) =>{
    const readArts=dbRef.child('users/' + uID + '/readHistory');
    const updates = {};
    if(found){
        let read = art["b1008"+id];
        read.count++;
        read[read.count] = new Date();
        updates['/'+'b1008'+id] = read;
        readArts.update(updates);
        //let newState = {};
        //newState["b1008"+id]=read;
        art["b1008"+id]=read;
        return {type: actionType.PROF_UPDATE_PROGRESS,
                val: art};
    }
    else{
        let i=1;
        let read={
            id: id,
            count: i,
        }
        read[i] = new Date();
        updates['/'+'b1008'+id] = read;
        readArts.update(updates);
        let newState = {};
        newState=read;
        art["b1008"+id] = {...art["b1008"+id], ...newState};
        return {type: actionType.PROF_WRITE_PROGRESS,
                val: art};
    }
    /* const readArts=dbRef.child('users/' + uID + '/readHistory');
    const updates = {};
    let i=1;
    let arts={id: read.id,
          count: i,
        }
    arts[i] = new Date();
    let hasID;
    
    readArts.once("value")
    .then(function(snapshot) {
      hasID = snapshot.hasChild("b1008"+read.id);
      if(hasID){
        let art2=[];  
        snapshot.forEach(function(childSnapshot) {
            let childData = childSnapshot.val();
            art2.push(...childData);
        });
        art2.count++;
        art2[i] = new Date();
        updates['/'+'b1008'+id] = art2;
        console.log('match found' + art2);    
        //updates['/'+'b1008'+id+'/count'] = arts.count++;    //updates['/'+'b1008'+id+arts["i"]] = new Date();
        }
      else{
        updates['/'+'b1008'+id] = arts;
        console.log('match note found'+updates.arts);    
      }
    });

    
    readArts.update(updates);
    console.log(updates);
    return { type: actionType.PROF_UPDATE_PROGRESS,
             val: arts  
            } */
}
/* export const writeReadProgressfb = (readID, readCver, category, uID) => {
    
    try{
        const readArts=dbRef.child('users/' + uID + '/readHistory');
        let todayTime = new Date();
        let date = new String(todayTime.getFullYear()) + '/' + new String(todayTime.getDate()) + '-' + new String(todayTime.getMonth()+1);
        let read = {
            id: readID,
            ver: readCver,
            category: category,
        }
        readArts.child('2018').on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              if(childKey==readID)
              return {type: null}
            });
        });
        readArts.child(date).child(readID).set(read);
        console.log('[Act/Content] [writeToFB] -> Articles Written to FB:\n', ...readID);
        return{type: actionType.CONT_READ_ARTICLES,
               val: read};
    }catch(err){
        console.log('[Act/Content] [writeToFB] -> Write to FB Failed with Error:', err);
        return{type: null};
    }
}

 */