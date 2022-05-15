import React from 'react';
import Link from 'next/link';
import { Paths } from '@/utils/paths';
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai';

export const Header: React.FC = () => {
  return (
    <div className='m-10 flex items-center justify-between'>
      <Link href={Paths.app}>
        <h2 className='font-cairo text-xl md:text-2xl font-medium text-app-light1 cursor-pointer hover:text-app-light2 hover:underline transition-all duration-200'>
          القرآن
        </h2>
      </Link>

      <div className='flex items-center'>
        <AiFillGithub className='text-2xl md:text-3xl cursor-pointer text-app-light1 hover:text-app-light2 transition-all duration-200' />
        <AiOutlineMenu className='ml-2 md:ml-5 text-2xl md:text-3xl cursor-pointer text-app-light1 hover:text-app-light2 transition-all duration-200' />
      </div>
    </div>
  );
};
