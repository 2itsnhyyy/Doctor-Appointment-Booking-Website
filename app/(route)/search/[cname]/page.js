"use client";
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';

function Search({ params }) {
  const [doctorList, setDoctorList] = useState([]);
  const [resolvedParams, setResolvedParams] = useState(null);

  useEffect(() => {
    async function fetchParams() {
      const resolved = await params;
      setResolvedParams(resolved);
    }

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (resolvedParams) {
      console.log(resolvedParams.cname);
      getDoctors(resolvedParams.cname);
    }
  }, [resolvedParams]);

  const getDoctors = (cname) => {
    GlobalApi.getDoctorByCategory(cname).then(resp => {
      setDoctorList(resp.data.data);
    }).catch(error => {
      console.error('Error fetching doctors:', error);
    });
  };

  return (
    <div className='mt-5 '>
      <DoctorList heading={resolvedParams ? resolvedParams.cname : 'Doctors'} doctorList={doctorList} />
    </div>
  );
}

export default Search;