import { NextPage } from 'next';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const ServiceInfo = dynamic(() => import('components/ServiceInfoTemp'), {
  ssr: false,
});

const Service: NextPage = () => {
  return (
    <div>
      <h1>Service page</h1>
      <Suspense fallback="Loading...">
        <ServiceInfo />
      </Suspense>
    </div>
  );
};

export default Service;
