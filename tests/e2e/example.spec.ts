import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://127.0.0.1:4173', {
    waitUntil: 'load',
  });
  const menus = await page.locator('a span').allTextContents();
  console.log(menus)
  expect(menus[0]).toBe('Go to Home');
  expect(menus[1]).toBe('Go to About');
});
