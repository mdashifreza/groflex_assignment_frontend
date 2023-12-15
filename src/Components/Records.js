import React, { useEffect, useState } from "react";
import axios from "axios";
import RegistrationCard from "./RegistrationCard";

export default function Records() {
    const [record, setRecords]= useState([]);
    const url = 'http://localhost:8080/api/registrations';

    useEffect(()=>{
        const recordsDetails = async () => {
            try{
                const response = await axios.get(url);
                console.log("record:", response.data)
                setRecords(response.data);
            }
            catch(error){
                console.log("error encounter:::--- ", error);
            }
        };
    recordsDetails();
    },[])

    return <div>
        {
            record?.map((registration) => (
                    <RegistrationCard
                        key={registration._id}
                        registration={registration}
                        // onDelete={handleDelete}
                    />
                ))
        }
    </div>;
}
