import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="flex flex-row w-screen bg-slate-800 p-6">
      <div className="flex basis-1/4 justify-start gap-x-6">
        <Image
          src="/smile.png"
          alt="Not found"
          width={40}
          height={40}
        />
        <Link href="/">Do something!</Link>
      </div>
      <div className="flex basis-3/4 justify-end gap-x-6">
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  )
}