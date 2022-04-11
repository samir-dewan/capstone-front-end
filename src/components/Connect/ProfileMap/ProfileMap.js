import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import axios from 'axios';
import "./ProfileMap.scss";
import profilePic from "../../../assets/blankprofilepic.jpeg";

export default function ProfileMap() {
  const [viewport, setViewport] = useState({
    latitude: 51.349577,
    longitude: -0.138444,
    width: "100vw",
    height: "77vh",
    zoom: 10,
  });
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState([]);

  useEffect(async () => {
    console.log("in the Effect");
    const profilesGet = await axios.get("http://localhost:5050/home");
    console.log(profilesGet.data);
    setProfiles(profilesGet.data);
    const listener = e => {
      if (e.key === "Escape") {
        setProfiles([]);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic2FtaXJkZXdhbjE5OTUiLCJhIjoiY2wxcGdxMWZxMGNxdDNjbnF3cjZqMWZmaCJ9.cFYnvpgcD9VBALjXYyP-MA"
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {profiles.map((profile) => (
          <Marker
            key={profile.personID}
            latitude={profile.latitude}
            longitude={profile.longitude}
          >
            <button
              className="marker__button"
              onClick={(e) => {
                e.preventDefault();
                setSelectedProfile(profile);
              }}
            >
              <img src="/leaf.svg" alt="Profile Image" />
            </button>
          </Marker>
        ))}

        {selectedProfile ? (
          <Popup
            latitude={selectedProfile.latitude}
            longitude={selectedProfile.longitude}
            onClose={() => {
              setSelectedProfile(null);
            }}
          >
            <div className="popup__wrapper">
              <p>{`${selectedProfile.firstName} ${selectedProfile.lastName}`}</p>
              <p>{selectedProfile.townOfOrigin}</p>
              <img className="popup__image" src={profilePic} />
              <button>Profile</button>
              <button>Connect</button>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

