import { useEffect, ReactNode } from 'react';

interface WavingHandProps {
  children: ReactNode;
}

const WavingHand: React.FC<WavingHandProps> = ({ children }) => {
  useEffect(() => {
    const hand = document.querySelector('.animate-waving-hand');

    if (hand) {
      hand.classList.add('animate-waving-hand');

      setTimeout(() => {
        hand.classList.remove('animate-waving-hand');
      }, 2000); // Adjust the time (in milliseconds) to match the duration of your animation

      hand.addEventListener('mouseover', handleMouseOver);
      hand.addEventListener('mouseout', handleMouseOut);
    }

    // Define event handlers
    function handleMouseOver() {
      if (hand) {
        hand.classList.add('animate-waving-hand');
      }
    }

    function handleMouseOut() {
      if (hand) {
        hand.classList.remove('animate-waving-hand');
      }
    }

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      hand?.removeEventListener('mouseover', handleMouseOver);
      hand?.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <span className="inline-block animate-waving-hand">{children}</span>
  );
}

export default WavingHand;