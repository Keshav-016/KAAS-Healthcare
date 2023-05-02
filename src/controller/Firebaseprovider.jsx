import { createContext, useContext, useState } from "react";
import { getDatabase, ref,get,child,update} from "firebase/database";
import {app} from "./firebase"


const database = getDatabase(app);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const [userDetails,setuserDetails] = useState("");

      const fetchuserData = async  () => {
        
        const snapshot = await get(child(ref(database), "userDataRecord"));
        const data = snapshot.val();
        setuserDetails(data);
        console.log("Userdata is fetched", data);
        let keys = Object.keys(data);
        const snapshot2 = await get(child(ref(database), "userDataRecord"+"/"+keys[0]));
        const data2 = snapshot2.val();
        console.log(data2);
        return data;
      };
      const putData = (key,data) => {
        return update(ref(database, key),data);
      };
      
    return (
        <FirebaseContext.Provider value ={{userDetails,fetchuserData,putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}