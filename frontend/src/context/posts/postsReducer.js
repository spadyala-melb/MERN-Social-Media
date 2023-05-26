import {
  SET_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SEARCHED_POSTS,
  CLEAR_SEARCHED_POSTS,
} from "./postsActions";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        posts: action.payload,
      };
    case ADD_POST:
      return {
        posts: [action.payload, ...state.posts],
      };
    case DELETE_POST:
      return {
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE_POST:
      let newPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return {
            ...post,
            likes: [...post.likes, post.likes.push(action.payload.userId)],
          };
        } else {
          return post;
        }
      });
      console.log("newposts: ", newPosts);
      return {
        posts: newPosts,
      };
    case SEARCHED_POSTS:
      return {
        posts: [...state.posts],
        isSearchActive: true,
        foundPosts: action.payload,
      };
    case CLEAR_SEARCHED_POSTS:
      return {
        posts: [...state.posts],
        isSearchActive: false,
        foundPosts: [],
      };
    default:
      return {
        state,
      };
  }
};
