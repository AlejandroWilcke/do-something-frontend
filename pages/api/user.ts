import { Activity } from "@/components/activities";

interface User{
  email: string;
  password: string;
  name: string;
  lastname: string;
  age: number;
  activities: Activity[];
}

const getUsersArray = () => {
  let usersItem = localStorage.getItem('users')!;
  if(usersItem){
    let users = JSON.parse(usersItem);
    return users;
  }
  return false;
}

const getUser = (email: string) => {
  let users = getUsersArray();
  return users.find( (user: User) => user.email === email);
}

const passwordMatches = (email: string, password: string) => {
  let users = getUsersArray();
  return users.find( (user: User) => user.email === email && user.password === password);
}

const activityAlreadyExists = (email: string, activity: Activity) => {
  let user = getUser(email);
  return user.activities.find( (existingActivity: Activity, i: number) => existingActivity.key === activity.key);
}

export const saveActivity = (activity: Activity, user: User) => {
  let users = getUsersArray();
  if(users){
    let existingUser = users.find( (existingUser: User) => existingUser.email === user.email);
    if(existingUser && !activityAlreadyExists(user.email, activity)){
      existingUser.activities.push(activity);
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
  }
  return false;
}

export const deleteActivity = (activity: Activity, user: User) => {
  let users = getUsersArray();
  if(users){
    let existingUser = users.find( (existingUser: User) => existingUser.email === user.email);
    let activityIndex = existingUser.activities.findIndex( (existingActivity: Activity) => existingActivity.key === activity.key);
    existingUser.activities.splice(activityIndex, 1);
    localStorage.setItem('users', JSON.stringify(users));
    return existingUser.activities;
  }
  return false;
}

export const registerNewUser = (user: User) => {
  user.activities = [];
  let users = getUsersArray();
  if(!users){
    localStorage.setItem('users', JSON.stringify([user]));
    return true;
  }
  if(!getUser(user.email)){
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
}

export const loginUser = (email: string, password: string) => {
  let usersItem = localStorage.getItem('users');
  if(usersItem){
    let user = getUser(email);
    if(user && passwordMatches(email, password)){
      return user;
    }
  }
  return false;
}