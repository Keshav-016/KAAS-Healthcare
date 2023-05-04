import { useEffect, useState } from "react";
import { useFirebase } from "./Firebaseprovider";
import Appointment from "../Appointment/Appointment";

const DoctordataFetch = (props) => {
  const firebase = useFirebase();
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    if (firebase.userDetails) {
      firebase.fetchuserData().then(data => {
        const keys = Object.keys(data);
        const doctorArray = keys.map(key => {
          const doctor = data[key];
          return { 
            firstName : doctor.firstName, 
            lastName : doctor.lastName,
            Address : doctor.address, 
            Pincode : doctor.pincode,
            Speciality : doctor.speciality,
            Experience : doctor.exp,
            Fee : doctor.fee};
        });
        setDoctorData(doctorArray);
      });
    }
  }, [firebase]);

  return (
    <div>
      {doctorData.length > 0 && <Appointment doctorData={doctorData} />}
    </div>
  );
};

export default DoctordataFetch;
