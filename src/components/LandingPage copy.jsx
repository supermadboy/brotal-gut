import React from 'react';
import BakingBread from './images/BakingBread';
import Logo from './images/Logo';
import SubTitle from './typo/SubTitle';

const svgs = ['Bread1', 'Bread2', 'Bread3', 'Utensil1', 'Utensil2', 'Utensil3']

const LazyMobileSvg = React.lazy(() => import('./images/mobile/' + svgs[5]));
const LazyDesktopSvg = React.lazy(() => import('./images/desktop/' + svgs[4]));

const LandingPage = () => {

  return (
    <div
      className='min-h-screen flex flex-col items-center px-4'
    >
      <div 
        style={{height: '80vh'}}
      >
      </div>
      <div
        className='bottom-0 w-full fill-primary'
      >
        <div className='md:hidden'><LazyMobileSvg /></div>
        <div className='hidden md:block'><LazyDesktopSvg /></div>
      </div>
      <div className='sticky bottom-0 h-screen flex flex-col justify-end'>
        <Logo />
        <SubTitle>Salmannsweilergasse 4</SubTitle>
      </div>
    </div>
  );
}

export default LandingPage;