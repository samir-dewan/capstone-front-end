import axios from "axios";
import React, { useState, useEffect } from "react";
import { GET_CONNECT_API_URL } from "../../../api/endpoints";
import { Route, Link, Redirect } from "react-router-dom";
import "./AddProfile.scss";

export default function AddProfile() {
  const [link, setLink] = useState("");
  const interestLister = (e) => {
    let array = [];
    for (let i in e.interests) {
      if (e.interests[i].checked) {
        array.push(e.interests[i].id)
      }
    }
    console.log(array)
    return array;
  }
  const postData = async (event) => {
    event.preventDefault();
    const newPerson = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      nationality: event.target.nationality.value,
      townOfOrigin: event.target.townOfOrigin.value,
      addressOfOrigin: event.target.addressOfOrigin.value,
      photo: event.target.photo.value,
      email: event.target.email.value,
      interests: interestLister(event.target),
      birthday: event.target.birthday.value,
      description: event.target.description.value,
      address: event.target.address.value,
      postcode: event.target.postcode.value,
      createdAt: new Date(),
    };
    const post = await axios.post(
      GET_CONNECT_API_URL,
      newPerson
    );
    setLink(`/home`);
  };

  return (
    <div className="add-profile__wrapper">
      <form onSubmit={postData} className="add-profile__form">
        <h1>Enter Profile</h1>
        <label className="add-profile__field">
          First Name:
          <input name="firstName" type="text" />
        </label>
        <label className="add-profile__field">
          Last Name:
          <input name="lastName" type="text" />
        </label>
        <label className="add-profile__field">
          Nationality:
          <select name="nationality" id="chooseNationality">
            <option value="blank"> </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Portugal">Portugal</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </label>
        <label className="add-profile__field">
          Town of Origin:
          <input
            name="townOfOrigin"
            className="add-profile__field"
            type="text"
          />
        </label>
        <label className="add-profile__field">
          Address of Origin:
          <input
            name="addressOfOrigin"
            className="add-profile__field"
            type="text"
          />
        </label>
        <label className="add-profile__field">
          E-mail:
          <input name="email" type="text" />
        </label>
        <fieldset>
          <legend>Interests:</legend>
          <input type="checkbox" name="interests" value="music" id="music" />
          <label for="music">Music</label>
          <br></br>
          <input type="checkbox" name="interests" value="books" id="books" />
          <label for="books">Books</label>
          <br></br>
          <input type="checkbox" name="interests" value="sport" id="sport" />
          <label for="sport">Sport</label>
          <br></br>
          <input type="checkbox" name="interests" value="pub" id="pub" />
          <label for="pub">Pub</label>
          <br></br>
          <input
            type="checkbox"
            name="interests"
            value="travelling"
            id="travelling"
          />
          <label for="travelling">Travelling</label>
          <br></br>
          <input type="checkbox" name="interests" value="film" id="film" />
          <label for="film">Film</label>
          <br></br>
          <input type="checkbox" name="interests" value="games" id="games" />
          <label for="games">Games</label>
          <br></br>
        </fieldset>
        <label>
          Birthday:
          <input name="birthday" className="add-profile__field" type="text" />
        </label>
        <label>
          Description:
          <input
            name="description"
            className="add-profile__field"
            type="text"
          />
        </label>
        <label>
          Address:
          <input name="address" className="add-profile__field" type="text" />
        </label>
        <label>
          Postcode:
          <input name="postcode" className="add-profile__field" type="text" />
        </label>
        <button type="submit">CONFIRM</button>
      </form>
    </div>
  );
}
