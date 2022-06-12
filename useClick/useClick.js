export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    const elementRef = element.current;
    if (elementRef) {
      elementRef.addEventListener('click', onClick);
    }
    return () => elementRef.removeEventListener('click', onClick);
  }, []);
  return element;
};
