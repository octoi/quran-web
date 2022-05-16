import React, { useState } from 'react';
import { Filter } from './Filter';
import { Surah } from './Surah';

export enum PageState {
  Surah,
  Juz,
}

export const HomeContent: React.FC = () => {
  const [pageState, setPageState] = useState(PageState.Surah);

  return (
    <div className='mt-28 md:mt-32'>
      <Filter pageState={pageState} setPageState={setPageState} />
      {pageState === PageState.Surah && <Surah />}
    </div>
  );
};
