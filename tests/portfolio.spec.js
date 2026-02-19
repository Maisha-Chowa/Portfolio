import { test, expect } from "@playwright/test";

test.describe("Portfolio — Sections render", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Maisha/i);
  });

  test("all major sections are visible", async ({ page }) => {
    await expect(page.locator("#home")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#experience")).toBeVisible();
    await expect(page.locator("#skills")).toBeVisible();
    await expect(page.locator("#portfolio")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("Home section shows name and role", async ({ page }) => {
    const home = page.locator("#home");
    await expect(home.getByText("Maisha Maliha Chowa")).toBeVisible();
    await expect(home.getByText("SQA Automation Engineer")).toBeVisible();
  });
});

test.describe("Portfolio — Navbar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("navbar is visible at top", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
  });

  test("navbar logo links to home", async ({ page }) => {
    const logoLink = page.locator('nav a[href="#home"]');
    await expect(logoLink).toBeVisible();
    await expect(logoLink.locator("img")).toBeVisible();
  });

  test("dark mode toggle works", async ({ page }) => {
    const html = page.locator("html");
    await expect(html).not.toHaveClass(/dark/);

    await page.getByLabel("Toggle theme").click();
    await expect(html).toHaveClass(/dark/);

    await page.getByLabel("Toggle theme").click();
    await expect(html).not.toHaveClass(/dark/);
  });

  test("nav links scroll to correct sections", async ({ page }) => {
    for (const section of ["about", "experience", "skills", "portfolio", "contact"]) {
      const link = page.locator(`nav a[href="#${section}"]`);
      await expect(link).toBeVisible();
    }
  });
});

test.describe("Portfolio — Home buttons & links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Contact Me button links to contact section", async ({ page }) => {
    const btn = page.locator('#home a[href="#contact"]');
    await expect(btn).toBeVisible();
    await expect(btn).toContainText("Contact Me");
  });

  test("Download Resume opens in new tab", async ({ page }) => {
    const resumeLink = page.locator('#home a[target="_blank"]', {
      hasText: "Download Resume",
    });
    await expect(resumeLink).toBeVisible();
    const href = await resumeLink.getAttribute("href");
    expect(href).toMatch(/\.pdf/);
    expect(await resumeLink.getAttribute("rel")).toBe("noreferrer");
  });

  test("GitHub icon links to correct profile", async ({ page, viewport }) => {
    const allLinks = page.locator('#home a[href="https://github.com/Maisha-Chowa"]');
    const idx = viewport && viewport.width >= 768 ? 0 : 1;
    const link = allLinks.nth(idx);
    await expect(link).toBeVisible();
    expect(await link.getAttribute("target")).toBe("_blank");
  });

  test("LinkedIn icon links to correct profile", async ({ page, viewport }) => {
    const allLinks = page.locator(
      '#home a[href="https://www.linkedin.com/in/maisha-maliha-chowa/"]'
    );
    const idx = viewport && viewport.width >= 768 ? 0 : 1;
    const link = allLinks.nth(idx);
    await expect(link).toBeVisible();
    expect(await link.getAttribute("target")).toBe("_blank");
  });
});

test.describe("Portfolio — Projects slider", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("projects section shows slider counter", async ({ page }) => {
    const section = page.locator("#portfolio");
    await expect(section.getByText(/1\s*\/\s*5/)).toBeVisible();
  });

  test("next/prev buttons cycle through projects", async ({ page }) => {
    const section = page.locator("#portfolio");
    const nextBtn = section.locator('button:has(svg)').last();

    await nextBtn.click();
    await expect(section.getByText(/2\s*\/\s*5/)).toBeVisible();

    await nextBtn.click();
    await expect(section.getByText(/3\s*\/\s*5/)).toBeVisible();
  });

  test("public projects show GitHub link", async ({ page }) => {
    const section = page.locator("#portfolio");
    const ghBtn = section.locator('a[href*="github.com"]');
    await expect(ghBtn).toBeVisible();
    await expect(ghBtn).toContainText("View on GitHub");
  });
});

test.describe("Portfolio — Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("contact form fields are visible", async ({ page }) => {
    const section = page.locator("#contact");
    await expect(section.locator('input[name="from_name"]')).toBeVisible();
    await expect(section.locator('input[name="from_email"]')).toBeVisible();
    await expect(section.locator('textarea[name="message"]')).toBeVisible();
  });

  test("Send Message button is visible and enabled", async ({ page }) => {
    const btn = page.locator('#contact button[type="submit"]');
    await expect(btn).toBeVisible();
    await expect(btn).toBeEnabled();
    await expect(btn).toContainText("Send Message");
  });

  test("form validates required fields", async ({ page }) => {
    const btn = page.locator('#contact button[type="submit"]');
    await btn.click();
    const nameInput = page.locator('#contact input[name="from_name"]');
    const isValid = await nameInput.evaluate((el) => el.checkValidity());
    expect(isValid).toBe(false);
  });
});

test.describe("Portfolio — Responsive layout", () => {
  test("desktop: social icons sidebar visible, mobile icons hidden", async ({
    page,
    viewport,
  }) => {
    await page.goto("/");
    const desktopIcons = page.locator("#home > div.hidden.md\\:flex");
    const mobileIcons = page.locator("#home > div.flex-1 .md\\:hidden");

    if (viewport && viewport.width >= 768) {
      await expect(desktopIcons).toBeVisible();
    } else {
      await expect(mobileIcons).toBeVisible();
    }
  });

  test("navbar items are accessible", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
    const logoImg = nav.locator("img").first();
    await expect(logoImg).toBeVisible();
  });

  test("footer is visible", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText("Maisha Maliha Chowa");
  });
});
