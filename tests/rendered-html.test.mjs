import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["app/page.tsx", /Your server/],
  ["app/support/page.tsx", /How can we help/],
  ["app/privacy/page.tsx", /Privacy Policy/],
];

for (const [page, expected] of pages) {
  test(`${page} contains MineChat content`, async () => {
    const source = await readFile(new URL(`../${page}`, import.meta.url), "utf8");
    assert.match(source, expected);
    assert.doesNotMatch(source, /Your site is taking shape/);
  });
}

test("production build contains the social preview image", async () => {
  const image = await readFile(new URL("../dist/client/og.png", import.meta.url));
  assert.ok(image.byteLength > 100_000);
});
