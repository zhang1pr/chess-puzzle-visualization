import { test, expect, type Page } from '@playwright/test';

test('dashboard loads and displays puzzle rush analytics', async ({ page }: { page: Page }) => {
  await page.goto('/');
  await expect(page.locator('text=Puzzle Rush summary')).toBeVisible();
  await expect(page.locator('text=Chess.com-style analytics')).toBeVisible();
  await expect(page.locator('text=Accuracy')).toBeVisible();
  await page.click('button:has-text("Hard")');
  await expect(page.locator('text=Score trend')).toBeVisible();
});
