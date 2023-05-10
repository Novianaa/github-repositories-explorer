import { combineReducers } from "redux";
import Users from "./UsersReducer";
import Repo from "./RepoReducer";

const rootReducer = combineReducers({
  users: Users,
  repo: Repo
})
export default rootReducer