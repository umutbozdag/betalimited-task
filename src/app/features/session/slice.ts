import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionActionTypes } from "app/features/session/actionTypes";
import initialState from "app/features/session/initialState";

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    [sessionActionTypes.CREATE_SESSION_START]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [sessionActionTypes.CREATE_SESSION_SUCCESS]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.sessionId = action.payload;
      state.loading = false;
      state.error = null;
      sessionStorage.setItem("Session-ID", action.payload);
    },
    [sessionActionTypes.CREATE_SESSION_FAILURE]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.sessionId = null;
      state.loading = false;
      state.error = action.payload;
      sessionStorage.removeItem("Session-ID");
    },
  },
});

export const {
  createSessionStart,
  createSessionSuccess,
  createSessionFailure,
} = sessionSlice.actions;

export default sessionSlice.reducer;
