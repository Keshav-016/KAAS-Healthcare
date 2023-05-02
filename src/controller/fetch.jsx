import { useEffect, useState } from "react";
import { useFirebase } from "./Firebaseprovider";
import Appointment from "../Appointment/Appointment";

const UserdataFetch = (props) => {
  const firebase = useFirebase();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (firebase.userDetails) {
      firebase.fetchuserData().then(data => {
        const keys = Object.keys(data);
        const userArray = keys.map(key => {
          const user = data[key];
          return { firstName: user.firstName, 
            lastName: user.lastName,
            Address: user.address, 
            Pincode : user.pincode,
            Speciality : user.speciality,
            Experience : user.exp,
            Fee : user.fee};
        });
        setUserData(userArray);
      });
    }
  }, [firebase]);

  return (
    <div>
      {userData.length > 0 && <Appointment userData={userData} />}
    </div>
  );
};

export default UserdataFetch;
