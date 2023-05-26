import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user/userContext";
import { PostsContextProvider } from "./context/posts/postsContext";
import { FriendsContextProvider } from "./context/friends/friendsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <PostsContextProvider>
          <FriendsContextProvider>
            <App />
          </FriendsContextProvider>
        </PostsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
