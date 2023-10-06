let lastClickTime: number = 0;

const checkSpamClick = (currentTime: number): boolean => {
  const debounceInterval: number = 1000;
  const timeSinceLastClick: number = currentTime - lastClickTime;

  if (timeSinceLastClick < debounceInterval) {
    return true;
  }

  lastClickTime = currentTime;
  return false;
};
export default checkSpamClick;
