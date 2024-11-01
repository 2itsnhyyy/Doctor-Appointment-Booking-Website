import Image from 'next/image'
import React from 'react'

function DoctorList({doctorList, heading = 'Popular Doctors'}) {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>{heading}</h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4'>
        {doctorList.length>0?doctorList.map((item) => (
            <div key={item.id} className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transform transition-transform duration-100 ease-in-out hover:scale-105'>
                <Image src={item.Image.url} alt='doctor' width={500} height={200}
                className='h-[200px] w-full object-cover rounded-lg'/>
                <div className='mt-3 items-baseline flex flex-col gap-1'>
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{item.categories?.[0]?.Name}</h2>
                    <h2 className='font-bold'>{item.Name}</h2>
                    <h2 className='text-primary'>{item.Year_Of_Experience}</h2>
                    <h2 className='text-gray-500 text-sm'>{item.Address}</h2>
                    <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 hover:bg-primary hover:text-white'>Book Now</h2>
                </div>
            </div>
        ))
      :
        [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className='h-[220px] bg-slate-200 w-full rounded-lg animate-pulse'>

          </div>
        ))
      }
      </div>
    </div>
  )
}

export default DoctorList
