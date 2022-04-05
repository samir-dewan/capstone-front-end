import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { GET_CONNECT_API_URL } from "../../../api/endpoints";
import "./Profile.scss";

const Profile = (routerProps) => {
      const [data, setData] = useState([]);
      const id = routerProps.match.params.personID;
      console.log(id);

      useEffect(async () => {
          try {
                const res = await axios.get(GET_CONNECT_API_URL(id));
                setData(res.data);
          }
          catch {
              console.log("error connecting to server");
              return (
                  <>
                    <div className = "profile-error">
                        Sorry, there's been an error getting this profile.
                    </div>
                  </>
              )
          }
      }, []);

    console.log(data);

    return (
      <>
        <div className="profile__wrapper">
          <div className="profile__main-data">
            <img className="profile__info" src={data.photo} />
            <p className="profile__info">{data.firstName}</p>
            <p className="profile__info">{data.lastName}</p>
          </div>
          <div className="profile__secondary-data">
            <p className="profile__info">{data.description}</p>
            <p className="profile__info">{data.birthday}</p>
            <p className="profile__info">{data.interests}</p>
          </div>
          <div className="profile__tertiary-data">
            <label className="profile__label">Where are you from?</label>
            <p className="profile__info">{data.nationality}</p>
            <p className="profile__info">{data.townOfOrigin}</p>
            <p className="profile__info">{data.addressOfOrigin}</p>
          </div>
          <p className="profile__info">{data.address}</p>
        </div>
      </>
    );


}

export default Profile;