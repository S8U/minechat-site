import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["out/index.html", /Your server/],
  ["out/support/index.html", /How can we help/],
  ["out/privacy/index.html", /Privacy Policy/],
];

for (const [page, expected] of pages) {
  test(`${page} renders MineChat content`, async () => {
    const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.match(html, expected);
    assert.match(html, /\/minechat-site\/_next\/static/);
    assert.doesNotMatch(html, /Your site is taking shape/);
  });
}

test("production build contains the social preview image", async () => {
  const image = await readFile(new URL("../out/og.png", import.meta.url));
  assert.ok(image.byteLength > 100_000);
});
