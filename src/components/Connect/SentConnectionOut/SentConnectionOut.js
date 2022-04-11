import ConnectionCard from "../ConnectionCard/ConnectionCard";
import axios from "axios";
import {
  GET_CONNECTIONS_API_URL,
  GET_CONNECT_API_URL,
} from "../../../api/endpoints";
import "./SentConnectionOut.scss";
import { useEffect, useState } from "react";

//get list of connections
//for every connected person get their relevant profile and make
export default function SentConnectionOut({ routerProps }) {
  const [profiles, setProfiles] = useState(null);
  const [connections, setConnections] = useState(null);
  let id = 1;
  useEffect(async () => {
    let connectionsData = await axios.get(GET_CONNECTIONS_API_URL(id));
    console.log(connectionsData);
    let filteredData = connectionsData.data.filter((connection) => 
    connection.personID_2 == id
    );
    console.log(filteredData)
    setConnections(filteredData);
    let profileData = await axios.get(GET_CONNECT_API_URL(id));
    setProfiles(profileData.data);
    console.log(connections, profiles);
  }, connections)
  
  for (let i = 0; i < connections.length; i++) {
    let prof = profiles.find((profile) => 
      profile.personID == connections.personID
    );
    prof.map((data) => {
      return (
        <ConnectionCard
          key={data.personID}
          firstName={data.firstName}
          lastName={data.lastName}
          photo={data.photo}
          nationality={data.nationality}
          interests={data.interests}
        />
      );
    });
  }
};

