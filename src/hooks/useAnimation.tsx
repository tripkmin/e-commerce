import { useEffect, useState } from 'react';

export default function useAnimation() {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimation(true);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  return { animation };
}
