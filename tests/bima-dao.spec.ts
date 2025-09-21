import { test, expect } from '@playwright/test';

test.describe('BIMA DAO Navigation Flow', () => {
  const BASE_URL = 'https://bima-gov-ui.vercel.app/';
  const PROPOSALS_LIST_URL = 'https://bima-gov-ui.vercel.app/dao/bima.eth/proposals/list';
  const CREATE_PROPOSAL_URL = 'https://bima-gov-ui.vercel.app/dao/bima.eth/create-proposal';

  test('should navigate to proposals list and then to create proposal page', async ({ page }) => {
    // 1. Navigate to the base URL
    // The recorded actions include a duplicate page.goto. We'll keep one for the initial navigation.
    await test.step('Navigate to BIMA DAO homepage', async () => {
      await page.goto(BASE_URL);
      await expect(page).toHaveURL(BASE_URL);
      await expect(page).toHaveTitle('Bima Gov');
      // Assert a prominent element on the home page, e.g., the main heading
      await expect(page.locator('h1')).toHaveText('Bima DAO Governance');
    });

    // 2. Click "View Proposals" and assert navigation to the proposals list page
    await test.step('Navigate to Proposals List via "View Proposals" button', async () => {
      await page.click('text="View Proposals"');
      // Wait for the URL to change to the expected proposals list page
      await page.waitForURL(PROPOSALS_LIST_URL);
      await expect(page).toHaveURL(PROPOSALS_LIST_URL);
      // Assert the title (which is consistent across pages in this app) and a specific heading on the proposals list page
      await expect(page).toHaveTitle('BIMA DAO');
      await expect(page.locator('h1')).toHaveText('Proposals List');
      // Assert that a proposal card or an element indicating the list is present
      await expect(page.locator('text="Create New Proposal"')).toBeVisible(); // This button is on the proposals list page
    });

    // 3. Click "Create New Proposal" and assert navigation to the create proposal page
    await test.step('Navigate to Create Proposal page via "Create New Proposal" button', async () => {
      await page.click('text="Create New Proposal"');
      // Wait for the URL to change to the expected create proposal page
      await page.waitForURL(CREATE_PROPOSAL_URL);
      await expect(page).toHaveURL(CREATE_PROPOSAL_URL);
      // Assert the title and a specific heading on the create proposal page
      await expect(page).toHaveTitle('BIMA DAO');
      await expect(page.locator('h1')).toHaveText('Create New Proposal');
      // Assert that key form elements are visible, indicating the page is ready
      await expect(page.locator('label:has-text("Proposal Title")')).toBeVisible();
      await expect(page.locator('textarea[placeholder="Enter your proposal description..."]')).toBeVisible();
      await expect(page.locator('button:has-text("Submit Proposal")')).toBeVisible();
    });
  });
});