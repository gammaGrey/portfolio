import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./app/features/projects/projectsSlice";
import navigationReducer from "./app/features/navigation/navigationSlice";
import certificateReducer from "./app/features/certificate/certificateSlice";

const logAction = storeAPI => next => action => {
  console.log("State prior to action dispatch:");
  console.log(storeAPI.getState());
  console.log(action);

  return next(action);
};

const store = configureStore({
  reducer: {
    projects: projectReducer,
    navigation: navigationReducer,
    certificate: certificateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(logAction)
});

export default store;