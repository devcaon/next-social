
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* left */}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href='/' className='flex gap-1'>
          <Image className='' src='/logo.png' width={32} height={32} alt='' />
          <span className='text-blue-700 text-2xl font-bold'>ChatterBox</span>
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex w-[50%] items-center justify-between">
        {/* LINKS */}
        <div className="flex items-center gap-6 text-gray-600 text-sm">
          <Link href='/' className='flex items-center gap-2'>
            <Image src='/home.png' width={16} height={16} alt='Homepage' className='w-4 h-4' />
            <span>Homepage</span>
          </Link>
          <Link href='/' className='flex items-center gap-2'>
            <Image src='/friends.png' width={16} height={16} alt='Friends' className='w-4 h-4' />
            <span>Friends</span>
          </Link>
          <Link href='/' className='flex items-center gap-2'>
            <Image src='/stories.png' width={20} height={20} alt='Stories' className='w-4 h-4' />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input type='text' placeholder='search...' className='outline-none bg-transparent' />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>
      {/* right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src='/people.png' width={24} height={24} alt='' />
            </div>
            <div className="cursor-pointer">
              <Image src='/messages.png' width={24} height={24} alt='' />
            </div>
            <div className="cursor-pointer">
              <Image src='/notifications.png' width={24} height={24} alt='' />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src='/login.png' width={24} height={24} alt='' />
              <Link href='/sign-in'>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar