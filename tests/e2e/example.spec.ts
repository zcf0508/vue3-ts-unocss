import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const menus = await page.locator("a span").allTextContents();
  await expect(menus[0]).toBe("Go to Home");
  await expect(menus[1]).toBe("Go to About");
});
