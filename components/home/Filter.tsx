import React, { useState } from 'react';
import { SetState } from '@/utils/reactTypes';
import { BiSearch } from 'react-icons/bi';
import { PageState } from '.';

interface Props {
  pageState: PageState;
  setPageState: SetState<PageState>;
}

export const Filter: React.FC<Props> = ({ pageState, setPageState }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='m-5 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-medium text-app-light1'>Quran App</h1>
      <div className='mt-10 mb-10 p-4 w-full md:w-1/2 lg:w-1/3 rounded-md bg-app-dark2 text-xl text-app-light2 flex items-center'>
        <input
          type='text'
          placeholder='Search . . .'
          className='outline-none bg-app-dark2 flex-1'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <BiSearch className='ml-1' />
      </div>
      {/* <div className='mt-5'>
        <button
          onClick={() => setPageState(PageState.Surah)}
          className={`filter-btn ${
            pageState === PageState.Surah && 'bg-app-accent'
          }`}
        >
          Surah
        </button>
        <button
          onClick={() => setPageState(PageState.Juz)}
          className={`filter-btn ml-2 ${
            pageState === PageState.Juz && 'bg-app-accent'
          }`}
        >
          Juz
        </button>
      </div> */}
    </div>
  );
};
