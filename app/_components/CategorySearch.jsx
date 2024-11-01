"use client";
import React, { useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image';
import { useState } from 'react';

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList()
  }, [])

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }

  return (
    <div className='flex flex-col gap-2 mb-10 items-center px-5'>
      <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
        <h2 className='text-gray-400 text-xl'>Search Your Doctor And Book Appointment in one click!</h2>
        
        <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
            <Input type="text" placeholder="Search..." />
            <Button type="submit">
                <Search/>
                Search
            </Button>
        </div>

        {/* Display List Of Category */}
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {categoryList.length>0?categoryList.map((item) => {
            const imageUrl = item.Icon[0].url;
              return (
                <div key={item.id} className='flex flex-col text-center items-center gap-2 p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer mt-10'>
                  {imageUrl ? (
                    <Image src={imageUrl}
                      alt='icon'
                      width={60}
                      height={60}
                    />
                    ) : (<div>No Image Available</div>)
                  }
                  <label className='text-blue-600 text-sm'>{item.Name}</label>
                </div>
              );
          })
        :
          [1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className='m-2 h-[120px] w-[130px] bg-slate-200 animate-pulse rounded-lg'>
          </div>
          ))
        }
        </div>

    </div>
  )
}

export default CategorySearch
