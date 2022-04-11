//IMPORT MODULES
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile/Profile";
import AddProfile from "./components/Profile/AddProfile/AddProfile";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import Connect from "./components/Connect/Connect";
import Chat from "./components/Chat/Chat/Chat";
import Chatroom from "./components/Chat/Chatroom/Chatroom";
import AddChatroom from "./components/Chat/AddChatroom/AddChatroom";
import Event from "./components/Meet/Event/Event";
import AddEvent from "./components/Meet/AddEvent/AddEvent";
import EditEvent from "./components/Meet/EditEvent/EditEvent";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect from="/" exact to="/connect" />
        <Route
          path="/user/add"
          exact
          render={(routerProps) => <AddProfile {...routerProps} />}
        />
        <Route
          path="/user/:userid/edit"
          exact
          render={(routerProps) => <EditProfile {...routerProps} />}
        />
        <Route
          path="/user/:userid"
          exact
          render={(routerProps) => <Profile {...routerProps} />}
        />
        <Route
          path="/connect"
          exact
          render={(routerProps) => <Connect {...routerProps} />}
        />
        <Route
          path="/chat"
          exact
          render={(routerProps) => <Chat {...routerProps} />}
        />
        <Route
          path="/chat/:chatid"
          exact
          render={(routerProps) => <Chatroom {...routerProps} />}
        />
        <Route
          path="/chat/:chatid/add"
          render={(routerProps) => <AddChatroom {...routerProps} />}
        />
        <Route
          path="/events"
          exact
          render={(routerProps) => <Event {...routerProps} />}
        />
        <Route
          path="/events/:eventid/new"
          exact
          render={(routerProps) => <AddEvent {...routerProps} />}
        />
        <Route
          path="/events/:eventid/edit"
          exact
          render={(routerProps) => <EditEvent {...routerProps} />}
        />
      </Switch>
      <Footer />
    </>
  );
}
