import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user/userContext";
import { PostsContextProvider } from "./context/posts/postsContext";
import { FriendsContextProvider } from "./context/friends/friendsContext";
import { MessagesContextProvider } from "./context/messages/messagesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <PostsContextProvider>
          <FriendsContextProvider>
            <MessagesContextProvider>
              <App />
            </MessagesContextProvider>
          </FriendsContextProvider>
        </PostsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
