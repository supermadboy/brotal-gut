import React from 'react';
import BakingBread from './images/BakingBread';
import Logo from './images/Logo';
import SubTitle from './typo/SubTitle';

const svgs = ['Bread1', 'Bread2', 'Bread3', 'Utensil1', 'Utensil2', 'Utensil3']

const LazyMobileSvg = React.lazy(() => import('./images/mobile/' + svgs[5]));
const LazyDesktopSvg = React.lazy(() => import('./images/desktop/' + svgs[5]));

const LandingPage = () => {

  return (
    <div
      className='min-h-screen flex flex-col items-center px-4 relative'
    >
      <div 
        style={{height: '50vh'}}
      >
      </div>
      <div
        className='bottom-0 p-4 w-full fill-primary absolute'
      >
        <div className='md:hidden'><LazyMobileSvg /></div>
        <div className='hidden md:block'><LazyDesktopSvg /></div>
      </div>
      <div className='sticky bottom-8 mb-8 flex flex-col justify-end items-center w-full' 
        style={{height: '95vh'}}>
        <div className='grow flex items-center w-3/4 max-w-5xl'>
          <Logo />
        </div>
        <SubTitle>Salmannsweilergasse 4</SubTitle>
      </div>
    </div>
  );
}

export default LandingPage;