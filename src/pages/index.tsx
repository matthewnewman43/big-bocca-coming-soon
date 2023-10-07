import React from 'react';

import Chili from '../components/Chili';
import Analytics from '../components/Analytics';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Sauces from '../components/Sauces';

const App = () => {
  return (
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
          <div className={`relative bg-background main-background`}>
              <div className="max-w-7xl mx-auto">
                  <div
                      className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 main-background`}
                  >
                      <Header/>
                      <MainHero/>
                  </div>
              </div>
              <MainHeroImage/>
          </div>
          <LazyShow>
              <Sauces/>
          </LazyShow>

          <LazyShow>
              <Chili/>
          </LazyShow>
          <Analytics/>
      </div>
  );
};

export default App;
