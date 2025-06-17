// Script to fetch and generate icons for base and internal-only sets
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rawBaseIcons = ["work c1cff", "wrench b0732", "work-list c8c4b", "watch 8b585", "wifi eafff", "wand 069dd", "viewport-wide 5f1fa", "viewport-short 57066", "viewport-tall 56db5", "viewport-narrow 82610", "upload da099", "unlock 60d99", "unknown-device e37fc", "wallet c4540", "undo edada", "transfer c266b", "transfer-out d0947", "transfer-internal 14b97", "transaction 55ae4", "transaction-fee-rupee 949ba", "transaction-fee-yen 44d1c", "transaction-fee-pound 5fd36", "transaction-fee-euro fe10b", "transaction-fee-dollar 7fa1e", "toggle-on 17080", "toggle-off bd65d", "transfer-in b4145", "tip-jar 72231", "thumbs-up d71b4", "thumbs-down c7fbb", "theme 13d75", "three-d-environment 27a9d", "theme-template d9b60", "theme-edit 510d4", "theme-store 4c7ff", "text-with-image d110d", "text a9542", "text-underline 92371", "text-quote ce1d8", "text-title 39e39", "text-italic 1b732", "text-grammar 2733f", "text-font a1ca4", "text-indent 2332b", "text-font-list ba8be", "text-in-rows 3e5ce", "text-in-columns 1c0dc", "text-bold 68095", "text-color 9a713", "text-align-left 8f8f0", "text-block 209e5", "text-align-right 388c2", "tax 55e24", "team 07a8a", "target f0cd2", "tablet 592c6", "table 2e591", "table-masonry 8d51d", "text-align-center 92a16", "store-online 73d6a", "store 235b5", "stop-circle 15c03", "sun 02a40", "store-managed 7a370", "status a6837", "status-active 2cf16", "star-list ac478", "store-import 8ddc6", "star-filled dcd43", "sound 5629e", "sports c4118", "sort-descending c37d8", "sort-ascending 3a8f7", "social-ad 539d3", "smiley-sad 64595", "smiley-joy 7a677", "smiley-happy 9c9a9", "slideshow 2ab5b", "social-post dc0d3", "shopcodes 40692", "smiley-neutral 705e0", "shipping-label 885e1", "shield-pending 39c7c", "shield-person a6f71", "shield-check-mark c71f4", "shield-none 3ddb7", "settings ff7fd", "send 1c21b", "share a07a5", "search 3af13", "search-resource a8c83", "search-list 50ada", "search-recent 273ff", "save bc9b5", "rotate-right bb669", "sandbox be59b", "rocket a106f", "reward b425a", "reset dab43", "rotate-left f3708", "return 62871", "replace 8214d", "refresh 791db", "referral-code dce7b", "redo 0cda2", "replay cd081", "receivables ca9bf", "receipt-yen 384be", "receipt 72ef4", "receipt-rupee 50996", "remove-background 06520", "receipt-refund e09c5", "receipt-pound b0df3", "receipt-paid 873a1", "receipt-dollar f2625", "receipt-euro 687b0", "profile-filled 37ed7", "product-unavailable 29e29", "product-return 321ce", "question-circle 5341d", "product-remove 316c3", "product-reference 260ab", "product-list 767b3", "product-add 3c61d", "question-circle-filled 8b992", "print db5d9", "price-list 29ecb", "product-cost c5017", "point-of-sale 5c581", "play 7701a", "profile 6980e", "play-circle 40967", "pin b8e8e", "plan 36a68", "phone-out e16c8", "person-segment 0ffaf", "phone-in c8749", "person-remove 86ac4", "person-lock 075e7", "personalized-text 13bcb", "person-list c4b25", "person-exit e284a", "payout 4a8c7", "payout-rupee ec14a", "payout-yen cadf2", "payout-euro 29014", "payout-pound 8e41d", "payout-dollar 8dacd", "person-add e1356", "payment-capture bd5a6", "pause-circle bbdd7", "paper-check c08e1", "passkey d70c4", "paint-brush-round 7c2c9", "paint-brush-flat dd443", "pagination-start a843e", "pagination-end d2fcc", "page-report a32f6", "page-up 937e7", "page-remove c2fb0", "page-list 53d07", "page-reference 21565", "page-heart 69c4b", "page-down 1741c", "page-clock 8587e", "page-attachment 31682", "page-add 3a3ad", "package f142a", "package-returned 56169", "package-on-hold 02e3b", "outgoing 82c0c", "package-fulfilled e0f70", "outdent eec8d", "orders-status f37ec", "organization 2273f", "order-repeat d6dfd", "order-first 412dc", "order-batches 8571a", "order-draft f4521", "notification 3bea6", "nature 16422", "note-add 5e69d", "note c4ee2", "money a07db", "moon cc833", "money-none b7d86", "minimize 2facc", "metaobject c5037", "metaobject-list b8ec3", "metaobject-reference caa84", "metafields 5590a", "menu-horizontal 54d27", "menu-vertical f1d2d", "menu b417c", "mention ab004", "megaphone 9082c", "measurement-weight-list b4360", "measurement-weight 63315", "measurement-volume 6d27e", "measurement-volume-list efa86", "measurement-size-list 00438", "media-receiver 59399", "measurement-size ff808", "maximize 32bc0", "markets-yen e8fb4", "markets-rupee 7ce41", "markets ea79c", "markets-euro e36ec", "map 18d3d", "lock f321b", "location-none 42676", "live a036a", "list-numbered 4200f", "link bef77", "layout-sidebar-right de0e7", "layout-sidebar-left 1c703", "layout-rows-2 bb9f3", "layout-popup 047e3", "link-list 95daf", "layout-logo-block ae934", "layout-footer 15266", "layout-columns-3 12428", "layout-header 2133c", "layout-section 4276f", "layout-column-1 b466f", "list-bulleted 1f5a9", "layout-buy-button-vertical ff7b7", "layout-buy-button-horizontal 4996d", "layout-block eb414", "language-translate fa04b", "layout-columns-2 f4e1d", "label-printer af3b2", "keyboard-hide 0d8e0", "layout-buy-button d11ea", "keyboard 69d39", "keyboard-filled c9f28", "key 4ae20", "iq ae0a4", "inventory 1c853", "inventory-updated d08c9", "incentive 58cfc", "incoming e57ee", "import ce9ad", "images 6e771", "image e3468", "image-with-text-overlay 7ffca", "image-none 223bd", "image-magic cdf0f", "image-explore 7c893", "image-alt ecb5e", "image-add 9f48e", "identity-card e7d3d", "home 8b326", "icons a19d1", "hide-filled 0a7a7", "heart e78c4", "hashtag 38df4", "hashtag-list a521a", "grid a38d5", "hashtag-decimal 53a6f", "globe-list 91bd2", "globe-lines 8d570", "globe-asia cb6b2", "globe-europe 69ae3", "git-commit bdc48", "git-repository a3464", "git-branch f1120", "gift-card 7a278", "gauge afaa0", "games b5787", "forms 5e731", "forklift 4636d", "foreground 6ee39", "food 2b12c", "folder 22c6c", "folder-up a9681", "folder-remove 63f58", "folder-down 6bdb9", "folder-add 53820", "flip-vertical 10ef5", "flower 2cf46", "flag a139a", "flip-horizontal 21b5f", "filter 98f35", "file d5096", "favicon 82ba5", "file-list 27b70", "eyeglasses bf664", "eye-first e6033", "eye-dropper-list 6c262", "eye-dropper 73b68", "eye-check-mark cbc4f", "export edf30", "exit 323d2", "exchange 32b61", "envelope-soft-pack 4a505", "envelope e7050", "enter d45b0", "email-newsletter c1e2c", "email-follow-up b3c73", "duplicate ff8f9", "drag-handle 4abdb", "drag-drop dce5c", "download ca9bf", "domain dafbd", "domain-redirect 8f6df", "domain-new 979f3", "dock-side 04796", "domain-landing-page 5187b", "dock-floating 28a7b", "discount b288a", "dns-settings 2ff8e", "discount-code f3dba", "discount-add 6e961", "desktop 87240", "delete d90e2", "database abba1", "database-add 7e647", "database-connect 9d88f", "data-table 297d2", "data-presentation b78a9", "cursor 4f297", "cursor-banner 46c96", "cursor-option 0852f", "crop 297b1", "currency-convert 8853e", "credit-card e3715", "credit-card-tap-chip 192e5", "credit-card-secure 2e159", "credit-card-reader c6b1a", "credit-card-reader-tap 88557", "credit-card-percent fb148", "credit-card-reader-chip e22f5", "credit-card-cancel cf804", "corner-square c0b19", "corner-pill 55c9c", "corner-round aac46", "contract 57a5d", "connect 35d76", "confetti afcb4", "content 45fe9", "compose bbf2f", "compass 4a6c8", "color a0c67", "color-none 62174", "collection-reference fb8b3", "collection-list f6a59", "collection-featured e8898", "code 1b83d", "code-add 2e3db", "clipboard 9689e", "clipboard-checklist 46ca7", "clock-revert c79ee", "clipboard-check 14af3", "circle 3f3dc", "circle-dashed d59e3", "chevron-up-circle 0f1d8", "chevron-right a2381", "chevron-right-circle dd560", "chevron-left ef785", "chevron-left-circle 8ffd9", "chevron-down-circle cce02", "checkbox 46332", "chat 86971", "check-circle-filled b8c8a", "chat-referral 06cac", "chat-new 58e2a", "chart-vertical d5b21", "chart-stacked cfa45", "chart-popular a5a1b", "chart-line abbdd", "chart-horizontal 11601", "chart-histogram-second-last 31093", "chart-histogram-last a442b", "chart-histogram-growth dff8f", "chart-histogram-full ef5a0", "chart-histogram-flat ee468", "chart-histogram-first-last e8091", "chart-funnel 8845e", "chart-histogram-first 8f355", "chart-donut 5ade3", "chart-cohort e9402", "channels dba03", "catalog-product 3d1a1", "cash-yen eddac", "categories 62adc", "cash-rupee a5fe7", "cash-euro 824fd", "cash-pound eb192", "cash-dollar a9f47", "cart-sale ec8db", "cart-up 40b76", "cart 823f1", "cart-discount 44ae7", "caret-down 89f2a", "camera 0188e", "camera-flip b01f5", "calendar-time 73108", "cart-down 0e838", "calendar-list d066c", "calendar-compare c9762", "calculator 3f7a9", "button 90d45", "caret-up 4b7f5", "button-press d5a5f", "cart-abandoned 6111b", "bullet 66362", "bug eed59", "bolt 9373b", "bolt-filled 869a6", "blog cb268", "bill 5721b", "barcode c4164", "book d019e", "bank 5eb9b", "book-open f6656", "backspace ddde8", "automation 73ee8", "bag 79c3e", "arrows-out-horizontal acded", "arrows-in-horizontal ffc77", "arrow-up c03df", "arrow-right 806d4", "arrow-up-circle 24356", "arrow-left 5e06a", "arrow-right-circle ad64d", "arrow-left-circle bd824", "arrow-down 2c043", "arrow-down-circle c453a", "app-extension e5930", "alert-octagon 29cc7", "alert-octagon-filled 73602", "alert-diamond 94e78", "alert-location cfd29", "airplane 655c9", "affiliate 24de4", "adjust 63782", "x f359e", "x-circle 042da", "view 5d254", "variant c960c", "star b093f", "sort b9331", "select 61998", "product 31265", "plus-circle db5e2", "plus 662d6", "phone 72e66", "person 59183", "payment 668f2", "page bcee2", "order 61df9", "order-unfulfilled 73550", "order-fulfilled c884b", "mobile 44638", "minus-circle 48429", "minus c3862", "microphone bf5c1", "merge 7593c", "lightbulb 984bc", "location c7d02", "language b844c", "info 099f6", "incomplete 04bea", "in-progress 4716e", "hide 10aef", "globe d7233", "external e00fd", "enabled 89dea", "email 2b70d", "edit 08726", "disabled b359e", "delivery 6331b", "collection b7a05", "clock 1be62", "chevron-up 7d8ec", "chevron-down 07fd7", "check 6c790", "check-circle 83b1c", "calendar 9b898", "calendar-check 076e5", "blank 85141", "attachment b28e5", "arrow-up-right 88125", "archive 7fdad", "apps 88a3e", "alert-triangle 43ba7", "alert-circle d6e61", "alert-bubble e92ba"];

const rawInternalIcons = ["work-filled ee18f", "wallet-filled 19796", "text-in-rows-filled 9d41f", "tax-filled 1a595", "target-filled 772ff", "sidekick bd5fa", "store-filled 664fd", "shopify-ql 91bd0", "shopify-inbox 940a1", "shipping-label-filled feb25", "settings-filled d84d8", "receipt-yen-filled 1c750", "receipt-rupee-filled 35f32", "receipt-pound-filled f6866", "receipt-euro-filled 64bb1", "receipt-dollar-filled e229e", "product-filled 5d748", "price-list-filled fb65c", "plus-circle-up b5778", "plus-circle-down 6adb0", "plan-filled 23549", "pin-filled 46aa2", "person-lock-filled 8cac1", "person-filled 7a8f8", "payment-filled bb8c8", "paste 9b115", "passkey-filled 67d95", "page-clock-filled 88fda", "package-filled c96cd", "organization-filled a0336", "order-filled b7c04", "order-draft-filled bf9b5", "notification-filled ba801", "money-filled f076f", "metaobject-filled 8e2ac", "metafields-filled d6717", "megaphone-filled e6cc1", "markets-yen-filled 2b5e7", "markets-rupee-filled 594ec", "markets-filled a9dcf", "markets-euro-filled e0b3e", "logo-youtube 05c5a", "logo-x 745af", "logo-whatsapp 5af8f", "logo-weibo 5f21c", "logo-wechat 1d98f", "logo-vimeo 62ad8", "logo-twitch 129e3", "logo-tumblr fb02b", "logo-tiktok 18d95", "logo-threads cb34e", "logo-spotify bc249", "logo-snapchat b39a4", "logo-shop 343d6", "logo-reddit fff82", "logo-pinterest a243e", "logo-meta 388b0", "logo-linkedin f77d0", "logo-line baee0", "logo-kakao-talk faaf0", "logo-instagram ed4fa", "logo-hydrogen 19d91", "logo-google 9f296", "logo-flow ec79b", "logo-facebook 78cdf", "logo-discord 9dcbc", "logo-apple-tap-to-pay 8394e", "lock-filled 03f70", "location-filled 89257", "live-filled e412e", "list-bulleted-filled 3abc5", "legacy-x-small 6b09a", "legacy-external-small 2fcfd", "legacy-check-small 9880d", "layout-block-ai a0477", "language-filled 54e92", "inventory-filled b7730", "identity-card-filled 799d8", "icons-filled 7f7fd", "home-filled 55574", "globe-filled 270d9", "globe-europe-filled 77adc", "globe-asia-filled 1eafe", "gift-card-filled 09f34", "flower-filled 194be", "file-filled ba892", "domain-filled eeeb1", "discount-filled 7c8e2", "delivery-filled 76a86", "cursor-filled 62a6e", "contract-filled 0d001", "content-filled 6938d", "collection-filled c2e89", "clipboard-check-filled 6af70", "chart-vertical-filled 75904", "cash-dollar-filled 102f4", "cart-filled f2897", "cart-down-filled e8d71", "cart-abandoned-filled ec50b", "blog-filled 98f1a", "bill-filled 0198f", "blank-filled 1b7eb", "bank-filled 6627f", "automation-filled 6a3c9", "attachment-filled ad275", "arrows-out-horizontal-filled 56cf3", "apps-filled 617c5", "magic 66af0"];

const extractSVGs = (svgContent) => {
  const matches = svgContent.match(/<svg[^>]*>[\s\S]*?<\/svg>/gi);
  const result = {};
  if (matches?.[0]) result.base = matches[0];
  if (matches?.[1]) result.small = matches[1];
  return result;
};

const camelCaseIconName = (str) => {
  return str.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()) + 'Icon';
};


const generateIconFile = (folder, name, svgs) => {
  const lines = [];
  if (svgs.base) lines.push(`export const base = \`${svgs.base}\`;`);
  if (svgs.small) lines.push(`export const small = \`${svgs.small}\`;`);
  const out = lines.join('\n') + '\n';
  const filePath = path.join(__dirname, folder, `${name}.ts`);
  fs.mkdirSync(path.join(__dirname, folder), { recursive: true });
  fs.writeFileSync(filePath, out, 'utf8');
};

const generateIndexFile = (folder) => {
  const dirPath = path.join(__dirname, folder);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  const imports = files.map(f => {
    const importName = camelCaseIconName(f.replace(/\.ts$/, ''));
    return `import * as ${importName} from './${f.replace(/\.ts$/, '')}';`;
  });
  const exportMap = files.map(f => {
    const importName = camelCaseIconName(f.replace(/\.ts$/, ''));
    return `  ${importName},`;
  });
  const content = `${imports.join('\n')}\n\nexport const ${folder === 'icons' ? 'icons' : 'internalIcons'} = {\n${exportMap.join('\n')}\n} as const;\n`;
  fs.writeFileSync(path.join(dirPath, 'index.ts'), content, 'utf8');
};


const parseIconList = (rawList) => {
  return rawList.reduce((acc, entry) => {
    const [name, hash] = entry.split(' ');
    acc[name] = hash;
    return acc;
  }, {});
};

const fetchAndGenerate = async (folder, rawList) => {
  const icons = parseIconList(rawList);
  for (const [name, hash] of Object.entries(icons)) {
    const url = `https://cdn.shopify.com/shopifycloud/admin-ui-foundations/${folder === 'icons' ? 'icons' : 'internal-only'}/${hash}.svg`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch ${url}`);
      const svgText = await res.text();
      const svgs = extractSVGs(svgText);
      generateIconFile(folder, name, svgs);
      console.log(`✅ ${folder}/${name} done`);
    } catch (err) {
      console.error(`❌ ${folder}/${name}:`, err.message);
    }
  }
  generateIndexFile(folder);
};

const main = async () => {
  await fetchAndGenerate('icons', rawBaseIcons);
  await fetchAndGenerate('internal-only', rawInternalIcons);
};

main();
