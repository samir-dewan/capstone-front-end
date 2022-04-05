import axios from "axios";
import React, { useState, useEffect } from "react";
import { GET_CONNECT_API_URL } from "../../../api/endpoints";
import { Route, Link, Redirect } from "react-router-dom";
import "./AddProfile.scss";

export default function AddProfile() {
  const [link, setLink] = useState("");

  const postData = async (event) => {
    event.preventDefault();
    const newPerson = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      photo: event.target.photo.value,
      nationality: event.target.nationality.value,
      townOfOrigin: event.target.townOfOrigin.value,
      addressOfOrigin: event.target.addressOfOrigin.value,
      email: event.target.email.value,
      interests: event.target.interests.value,
      birthday: event.target.birthday.value,
      description: event.target.description.value,
      address: event.target.address.value,
      createdAt: new Date()
    }
    const post = await axios.post(
      GET_CONNECT_API_URL,
      newPerson
    );
    setLink(`/home`);
  };
  console.log("return: ", link);
  return (
    <div className="item-details">
      <h1>Enter Profile</h1>
      <form onSubmit={postData} className="add-profile__form">
        <label>
          First Name
          <input name="firstName" className="add-profile__field" type="text" />
        </label>
        <label>
          Last Name
          <input name="lastName" className="add-profile__field" type="text" />
        </label>
        <label>
          Nationality
          <select name="Choose a Nationality" id="chooseNationality">
            <option value="blank"> </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Portugal">Portugal</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </label>
        <label>
          Town of Origin
          <input
            name="Town of Origin"
            className="add-profile__field"
            type="text"
          />
        </label>
        <label>
          Address of Origin
          <input
            name="Address of Origin"
            className="add-profile__field"
            type="text"
          />
        </label>
        <label>
          E-mail
          <input name="E-mail" className="add-profile__field" type="text" />
        </label>
        <div>
                        <input type="checkbox" id="archery" name="archery"></input>
        </div>
        {/* <options value="bowling">Bowling</options>
            <options value="pub">Pub</options>
            <options value="football">Football</options>
            <options value="hiking">Hiking</options>
            <options value="cricket">Cricket</options>
            <options value="music">Music</options>
            <options value="film">Film</options> */}
        <label>
          Birthday
          <input name="Birthday" className="add-profile__field" type="text" />
        </label>
        <label>
          Description
          <input
            name="Description"
            className="add-profile__field"
            type="text"
          />
        </label>
        <label>
          Address
          <input name="Address" className="add-profile__field" type="text" />
        </label>
        <button type="submit">CONFIRM</button>
      </form>
    </div>
  );
}
