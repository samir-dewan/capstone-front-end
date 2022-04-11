import ConnectionCard from "../ConnectionCard/ConnectionCard";
import BroughtConnectionIn from "../BroughtConnectionIn/BroughtConnectionIn";
import SentConnectionOut from "../SentConnectionOut/SentConnectionOut";
import axios from 'axios';
import {GET_CONNECTIONS_API_URL, GET_CONNECT_API_URL} from "../../../api/endpoints";
import "./ConnectionList.scss";
import React from "react";


const ConnectionList = () => {
  return (
    <>
    <h2>Pending Requests</h2>
    <SentConnectionOut />
    <h2></h2>
    <BroughtConnectionIn />
    </>
  );
};

export default ConnectionList;
//get list of connections
//for every connected person get their relevant profile and make 
  //get all connections from the API
  //let connectionsData = await axios.get(GET_CONNECTIONS_API_URL);
  //let profileData = await axios.get(GET_CONNECT_API_URL);
  //for i in filteredDataA:
  //let foundProfile = profileData.find((profile) => {profile.personID == i.personID_1});
  //foundProfile.map((data) => {})
  //let filteredDataA = connectionsData.filter((connection) => {connection.personID_1 == params.id});
  //let filteredDataB = connectionsData.filter((connection) => {connection.personID_2 == params.id});
  //filter down to all connections that have personID_1 and are pending
  //map each connection
  //map their profile with their personID as their key, first name, last name, nationality, photo, and interests
  //filter down to all connections that have personID_2 and are pending
  //for each connection
  //map their profile with their personID as their key, first name, last name, nationality, photo, and interests
  //create list of received requests
  //for every connection get their profile
  //map their profile with their personID as their key, first name, last name, nationality, photo, and interests