export function getActivity(){
  return fetch("https://www.boredapi.com/api/activity")
          .then(response => response.json())
}