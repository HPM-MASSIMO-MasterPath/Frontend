import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './StatisticsPage.scss';

const StatisticsPage = () => {
  return (
    <div className='statistics'>
      <div className='statistics__sidebar'>
        <Sidebar />
      </div>
      <div className='statistics__info'>
        <iframe
          src='https://datastudio.google.com/embed/u/0/reporting/442fd58e-7ef9-4aee-951f-8a09fc3d2c24/page/H4ztB'
          title='Statistics of courses and challenges'
        ></iframe>
      </div>
    </div>
  );
};

export default StatisticsPage;
