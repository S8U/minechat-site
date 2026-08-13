import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["out/index.html", /Your server/],
  ["out/support/index.html", /How can we help/],
  ["out/privacy/index.html", /Privacy Policy/],
  ["out/ko/index.html", /내 서버를/],
  ["out/ko/support/index.html", /무엇을 도와드릴까요/],
  ["out/ko/privacy/index.html", /개인정보 처리방침/],
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

test("home page identifies MineChat as unofficial", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /An unofficial, lightweight Minecraft Java Edition client/);
  assert.match(html, /not approved by or associated with Mojang or Microsoft/i);
});

test("site does not claim that the planned app is ad-free", async () => {
  const home = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const privacy = await readFile(new URL("../out/privacy/index.html", import.meta.url), "utf8");
  assert.doesNotMatch(home, /No ads or analytics/);
  assert.match(privacy, /planned free release will include banner advertising/);
  assert.match(privacy, /one-time in-app purchase to remove ads/);
});

test("English and Korean pages link to each other", async () => {
  const english = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const korean = await readFile(new URL("../out/ko/index.html", import.meta.url), "utf8");
  assert.match(english, /href="\/minechat-site\/ko\/"/);
  assert.match(korean, /href="\/minechat-site\/"/);
});

test("Korean pages preserve product and privacy disclosures", async () => {
  const home = await readFile(new URL("../out/ko/index.html", import.meta.url), "utf8");
  const privacy = await readFile(new URL("../out/ko/privacy/index.html", import.meta.url), "utf8");
  assert.match(home, /비공식 경량 Minecraft Java Edition 클라이언트/);
  assert.match(home, /Mojang 또는 Microsoft의 승인·제휴를 받지 않았습니다/);
  assert.match(privacy, /무료 출시 버전에는 배너 광고가 포함될 예정/);
  assert.match(privacy, /1회성 인앱 구매로 광고를 제거/);
});
