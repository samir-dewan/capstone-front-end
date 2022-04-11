import ConnectionCard from "../ConnectionCard/ConnectionCard";
import axios from "axios";
import {
  GET_CONNECTIONS_API_URL,
  GET_CONNECT_API_URL,
} from "../../../api/endpoints";
import "./BroughtConnectionIn.scss";
import { useEffect, useState } from "react";

//get list of connections
//for every connected person get their relevant profile and make
export default function BroughtConnectionIn({ routerProps }) {
  const [profiles, setProfiles] = useState(null);
  let id = 1;
  useEffect(async () => {
    let profilesData = await axios.get("http:")
  }, profiles);

  for (let i = 0; i < profiles.length; i++) {
    let prof = profiles.find(
      (profile) => profile.personID == id
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
}
