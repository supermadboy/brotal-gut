
import { useSpring, animated  } from '@react-spring/web';
import { useEffect } from 'react';

const BakingBread = () => {

  const [{ x }, api] = useSpring(() => ({
    x: 0,
  }));

  const handleScroll = () => {
    const maxPosition = window.innerHeight * 2;

    let currentProgress = window.scrollY / maxPosition;

    if (currentProgress > 1) {
      currentProgress = 1;
    }

    if (currentProgress < 0) {
      currentProgress = 0;
    }

    api.start({x: Math.floor(currentProgress * 100)})
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <svg viewBox="0 0 1381.56 249.02">
      <animated.path 
        d={x.to({
          range: [0, 100],
          output: [
            "m 1380 70 S 1320 1 701 0 h -21 C 61 0 1 71 0.1 71 h -1 v 57 h 1380 v -57 h -1 Z",
            "m 1380 360 S 1320 2 701 0 h -21 C 61 2 1 360 1 360 h -1 v 290 h 1380 v -290 h -1 Z",
            ],
        })}
      />
    </svg>
  );
}

export default BakingBread;