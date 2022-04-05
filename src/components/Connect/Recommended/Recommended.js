import ConnectionCard from "../ConnectionCard/ConnectionCard";
import axios from "axios";
import {
  GET_CONNECTIONS_API_URL,
  GET_CONNECT_API_URL,
} from "../../../api/endpoints";
import "./Recommended.scss";

//get list of connections
//for every connected person get their relevant profile and make
const Recommended = async ({ routerProps }) => {
  let connectionsData = await axios.get(GET_CONNECTIONS_API_URL);
  let filteredData = connectionsData.filter((connection) => {
    connection.personID_2 == params.id;
  });
  let profileData = await axios.get(GET_CONNECT_API_URL);
  for (let i = 0; i < filteredData.length; i++) {
    let prof = profileData.find((profile) => {
      profile.personID == filteredData[i];
    });
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

export default SentConnectionOut;
