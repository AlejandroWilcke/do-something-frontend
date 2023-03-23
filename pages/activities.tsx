import { useSelector } from "react-redux";
import { Activity } from "@/components/activities";
import { removeActivity } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

export default function ActivitiesList(){
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const capitalizeFirstLetter = (text: string) => {
    return text?.charAt(0).toUpperCase() + text?.slice(1);
  }
  const totalParticipants = (participants: number) => {
    return new Array(participants).fill(0).map( (p, i) => <span key={i}>&#129485;</span>);
  }
  return(
    <div className="container mx-auto mt-4">
      <h1 className="text-center text-2xl">Activities!</h1>
      <div className="flex justify-center mx-12">
        <table className="border-2 border-white mt-8 rounded-lg bg-slate-800/10">
          <thead>
            <tr  className="border-2 border-white">
              <th className="border-r-2 border-white p-4">Type</th>
              <th className="border-r-2 border-white p-4">Participants</th>
              <th className="border-r-2 border-white p-4">Activity</th>
              <th className="p-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.activities.map( (activity: Activity, i: number) => {
              return(
                <tr key={i}>
                  <td className="text-center p-4 border-r-2 border-b-2 border-white">{capitalizeFirstLetter(activity.type)}</td>
                  <td className="text-center p-4 border-r-2 border-b-2 border-white cursor-default">{totalParticipants(activity.participants)}</td>
                  <td className="text-center p-4 border-r-2 border-b-2 border-white ">{activity.activity}</td>
                  <td onClick={() => dispatch(removeActivity({activity, user}))} className="text-center p-4 border-b-2 border-white cursor-pointer hover:text-red-400">&#128711;</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}