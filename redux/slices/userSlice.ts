import { createSlice } from '@reduxjs/toolkit'
import { deleteActivity, saveActivity } from '@/pages/api/user';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    name: '',
    lastname: '',
    age: 0,
    activities: [{}],
  },
  reducers: {
    login: (state, action) => {
      const { email, name, lastname, age, activities } = action.payload;
      state.email = email;
      state.name = name;
      state.lastname = lastname;
      state.age = age;
      state.activities = activities;
    },
    addActivity: (state, action) => {
      const { activity, user } = action.payload;
      let savedActivity = saveActivity(activity, user);
      if(savedActivity){
        state.activities = [...state.activities, activity];
      }
    },
    removeActivity: (state, action) => {
      const { activity, user } = action.payload;
      let totalActivities = deleteActivity(activity, user);
      if(totalActivities){
        state.activities = totalActivities;
      }
    }
  },
})

export const { login, addActivity, removeActivity } = userSlice.actions;

export default userSlice.reducer;