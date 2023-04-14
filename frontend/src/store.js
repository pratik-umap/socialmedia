import { configureStore } from "@reduxjs/toolkit";
import {
  allUserReducer,
  postofFollowingReducer,
  userReducer,
} from "./Reducers/User";
import {
  likeReducer,
  myPostsReducer,
  userPostsReducer,
  userProfileReducer,
} from "./Reducers/Post";
const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postofFollowingReducer,
    allUsers: allUserReducer,
    like: likeReducer,
    myPosts: myPostsReducer,
    userProfile: userProfileReducer,
    userPosts: userPostsReducer,
  },
});

export default store;
