import { RefObject, useEffect } from 'react';

export default function useClickOutside(
  callback: () => void,
  ref: RefObject<HTMLDivElement>
) {
  const clickHandler = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);
}
