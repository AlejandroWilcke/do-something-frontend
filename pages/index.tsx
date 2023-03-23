import Head from 'next/head'
import { useSelector } from 'react-redux'
import Activities from '@/components/activities';

export default function Home() {
  const user = useSelector((state: any) => state.user);
  return (
    <>
      <Head>
        <title>Do something!</title>
      </Head>
      <div className='container mx-auto mt-4'>
        {user.name ? (
          <>
            <h1 className='text-center text-2xl mb-6'>Welcome {user.name}</h1>
            <Activities />
          </>
          ) : 
          (
          <>
          <h1 className='text-center text-2xl'>
            Hello there! please register in our platform or login <br />
              to use our application!
          </h1>
          </>
        )}
      </div>
    </>
  )
}
