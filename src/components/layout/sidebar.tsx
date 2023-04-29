import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/20/solid';
import {
  HashtagIcon, BellIcon,
  BookmarkIcon,
  ClipboardIcon, EllipsisHorizontalCircleIcon, InboxIcon,
  UserIcon, EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';


import SideBarMenuItem from '@/components/layout/sidebar-menu-item';


export default function SideBar() {
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
      <div className='hover-effect p-0 hover:bg-blue-100 xl:px-1'>
        <Image src={'https://help.twitter.com/content/dam/help-twitter/brand/logo.png'} alt={'twitter logo'} width={50}
               height={50} />
      </div>

      <div className='mt-4 mb-2.5 xl:items-start'>
        <SideBarMenuItem text='Home' Icon={HomeIcon} isActive={true} />
        <SideBarMenuItem text='Explore' Icon={HashtagIcon} />
        <SideBarMenuItem text='Notifications' Icon={BellIcon} />
        <SideBarMenuItem text='Messages' Icon={InboxIcon} />
        <SideBarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
        <SideBarMenuItem text='Lists' Icon={ClipboardIcon} />
        <SideBarMenuItem text='Profile' Icon={UserIcon} />
        <SideBarMenuItem text='More' Icon={EllipsisHorizontalCircleIcon} />
      </div>

      <button
        className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet
      </button>

      <div className='hover-effect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
        <img src={'https://pbs.twimg.com/profile_images/3405877816/6a6aaac47f46afd1b6833b5fc96e2cb4_400x400.jpeg'} alt={'profile'}
             className='h-10 w-10 rounded-full xl:mr-2' />
        <div className='leading-5 hidden xl:inline'>
          <h4 className='font-bold'>Adolphous Navaratnam</h4>
          <p className='text-gray-500'>@nshathish</p>
        </div>
        <EllipsisHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
      </div>
    </div>
  );
}