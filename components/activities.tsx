import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivity } from "@/pages/api/activity";
import { addActivity } from "@/redux/slices/userSlice";

export interface Activity {
  activity: string;
  participants: number;
  type: string;
  key: string;
}

export default function Activities(){
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [activity, setActivity] = useState<Activity>();
  return(
    <div className="flex justify-center">
      <div className="grid grid-cols-3 p-6 border-2 border-white w-96 h-96 text-center rounded-lg">
        <div className="col-span-3 border-b-2">
          {user.name} {user.lastname}, {user.age}
        </div>
        <div className="col-span-3 border-b-2">
          {activity?.type && (
            <>
              <p className="p-4">{activity?.activity}</p>
              <p className="p-4">
                This is a {activity?.type} activity
                <Image
                  className="rounded-full inline-block ml-2"
                  src={`/${activity.type}.png`}
                  alt={activity.type}
                  width={30}
                  height={30}
                />
                </p>
              <p className="p-4">It is recommended for {activity?.participants} {activity?.participants === 1 ? "person" : "people"}</p>
            </>
          )}
        </div>
        <div className="col-span-1">
          <button onClick={ async () => setActivity(await getActivity())}>Refresh</button>
        </div>
        <div className="col-span-1">
          <button onClick={() => activity && dispatch(addActivity({activity, user}))}>Add</button>
        </div>
        <div className="col-span-1">
          <Link href="/activities">List</Link>
        </div>
      </div>
    </div>
  )
}
