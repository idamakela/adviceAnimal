import { test, expect } from '@jest/globals';
import checkSpamClick from '../../utils/checkSpamClick';

test('spam click', () => {
  const currentTime = Date.now();

  expect(checkSpamClick(currentTime + 900)).toBe(false);
  expect(checkSpamClick(currentTime + 1000)).toBe(true);
  expect(checkSpamClick(currentTime + 1500)).toBe(true);
});
