import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar(){
  const user = useSelector((state: any) => state.user);
  return(
    <nav className="flex flex-row w-screen bg-cyan-900/20 p-6 items-center ">
      <div className="flex basis-1/4 justify-start gap-x-6 items-center">
        <Image
          src="/smile.png"
          alt="Not found"
          width={30}
          height={30}
        />
        <Link href="/">Do something!</Link>
      </div>
      <div className="flex basis-3/4 justify-end gap-x-6">
        {user.name ? `${user.name} ${user.lastname}` : (
          <>
            <Link href="/signup">Sign up</Link>
            <Link href="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  )
}