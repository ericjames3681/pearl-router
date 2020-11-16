import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phone: null,
  address: null,
  dob: null,
  role: null,
  profileImgUrl: null,
  socialMedia: null,
  admin: null,
  createdAt: "",
  updatedAt: "",
  UserAssociations: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await client.get("users");
  return response.users;
});

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userId, data) => {
    const response = await client.get(`users/${userId}`, data);
    return response;
  }
);

export const createUser = createAsyncThunk("users/createUser", async (data) => {
  console.log("data" + data);
  const response = await client.post("users", data);
  return response;
});

export const updateUser = createAsyncThunk(
  "users/createUser",
  async (userId, data) => {
    const response = await client.put(`users/${userId}`, data);
    return response;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //reducers for email password?
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      return action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [createUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [createUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
