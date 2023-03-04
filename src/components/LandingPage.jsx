import React from 'react';
import Logo from './images/Logo';
import SubTitle from './typo/SubTitle';

const colors = ['192 129 93', '197 181 154', '102 153 255', '128, 203, 239']
const svgs = ['Bread1', 'Bread2', 'Bread3', 'Utensil1', 'Utensil2', 'Utensil3']

const randomSvg = Math.floor(Math.random() * 6);
let randomColor = Math.floor(Math.random() * 2)

if (randomSvg > 2) {
  randomColor += 2; 
}

document.documentElement.style.setProperty('--color-primary', colors[randomColor]);
const LazyMobileSvg = React.lazy(() => import('./images/mobile/' + svgs[randomSvg]));
const LazyDesktopSvg = React.lazy(() => import('./images/desktop/' + svgs[randomSvg]));

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
        <div className='grow flex items-center w-3/4 max-w-3xl'>
          <Logo />
        </div>
        <SubTitle>Salmannsweilergasse 4</SubTitle>
      </div>
    </div>
  );
}

export default LandingPage;