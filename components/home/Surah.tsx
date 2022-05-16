import React, { useEffect, useState } from 'react';
import { getAllSurah } from '@/utils/http';

interface Surah {
  id: number;
  name_simple: string;
  name_arabic: string;
  verses_count: string;
  translated_name: {
    name: string;
  };
}

export const Surah: React.FC = () => {
  const [allSurah, setAllSurah] = useState<Surah[]>([]);

  useEffect(() => {
    getAllSurah().then((data: any) => {
      setAllSurah(data);
    });
  }, []);

  return (
    <div className='m-5 mt-10 md:m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {allSurah.map((surah) => (
        <div
          key={surah.id}
          className='rounded-md bg-app-dark2 flex items-center cursor-pointer transition-all duration-200 hover:opacity-75'
        >
          <div className='rounded-l-md bg-app-accent h-full w-14 flex items-center justify-center text-xl'>
            {surah.id}
          </div>
          <div className='w-full flex justify-between p-5'>
            <div>
              <h1 className='text-xl text-app-light1 font-medium'>
                {surah.name_simple}
              </h1>
              <p className='text-lg text-app-light2'>
                {surah.translated_name.name}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-app-light1 font-medium font-cairo'>
                {surah.name_arabic}
              </h2>
              <p className='text-app-light2'>{surah.verses_count} Ayahs</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
