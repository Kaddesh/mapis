import React from 'react';
import Table from './components/table';
import QuoteInformation from './components/quoteInformation';
import Quote from './components/quote';
import Sidebar from './components/sidebar';
import Terms from './components/terms';
import Topbar from './components/topbar';

const Home = () => {
  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Topbar />
        <div className="px-4 ml-5">
          <Quote />
          <QuoteInformation />
          <Table />
          <Terms />
        </div>
      </div>
    </div>
  );
};

export default Home;
