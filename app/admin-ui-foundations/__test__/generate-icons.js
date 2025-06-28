import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const loc = path.join(__dirname, '../')

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 300;
const failureLogPath = path.join(__dirname, '.tmp', 'generate-icons-failures.txt');

const rawBaseIcons = ["work-list c8c4b", "work c1cff", "watch 8b585", "wrench b0732", "wand 069dd", "wallet c4540", "wifi eafff", "viewport-wide 5f1fa", "viewport-tall 56db5", "viewport-short 57066", "viewport-narrow 82610", "unlock 60d99", "upload da099", "unknown-device e37fc", "undo edada", "transfer c266b", "transfer-out d0947", "transfer-internal 14b97", "transaction 55ae4", "transfer-in b4145", "transaction-fee-yen 44d1c", "transaction-fee-rupee 949ba", "transaction-fee-pound 5fd36", "transaction-fee-euro fe10b", "transaction-fee-dollar 7fa1e", "toggle-on 17080", "toggle-off bd65d", "tip-jar 72231", "thumbs-up d71b4", "thumbs-down c7fbb", "three-d-environment 27a9d", "theme 13d75", "theme-template d9b60", "theme-store 4c7ff", "theme-edit 510d4", "text a9542", "text-with-image d110d", "text-underline 92371", "text-title 39e39", "text-quote ce1d8", "text-italic 1b732", "text-grammar 2733f", "text-in-columns 1c0dc", "text-in-rows 3e5ce", "text-font a1ca4", "text-color 9a713", "text-bold 68095", "text-font-list ba8be", "text-block 209e5", "text-align-right 388c2", "text-align-left 8f8f0", "text-indent 2332b", "text-align-center 92a16", "tax 55e24", "team 07a8a", "tablet 592c6", "table 2e591", "table-masonry 8d51d", "sun 02a40", "target f0cd2", "store 235b5", "store-online 73d6a", "store-managed 7a370", "stop-circle 15c03", "store-import 8ddc6", "status a6837", "status-active 2cf16", "star-list ac478", "star-filled dcd43", "sports c4118", "sound 5629e", "sort-descending c37d8", "sort-ascending 3a8f7", "social-post dc0d3", "social-ad 539d3", "smiley-sad 64595", "smiley-neutral 705e0", "smiley-joy 7a677", "smiley-happy 9c9a9", "slideshow 2ab5b", "shopcodes 40692", "shield-person a6f71", "shipping-label 885e1", "shield-none 3ddb7", "shield-check-mark c71f4", "shield-pending 39c7c", "share a07a5", "settings ff7fd", "send 1c21b", "search 3af13", "search-recent 273ff", "search-list 50ada", "search-resource a8c83", "save bc9b5", "sandbox be59b", "rotate-right bb669", "rocket a106f", "rotate-left f3708", "reward b425a", "return 62871", "reset dab43", "replay cd081", "replace 8214d", "referral-code dce7b", "redo 0cda2", "receivables ca9bf", "receipt 72ef4", "receipt-yen 384be", "refresh 791db", "receipt-rupee 50996", "remove-background 06520", "receipt-refund e09c5", "receipt-paid 873a1", "question-circle 5341d", "receipt-dollar f2625", "question-circle-filled 8b992", "profile 6980e", "profile-filled 37ed7", "receipt-euro 687b0", "product-unavailable 29e29", "product-return 321ce", "product-remove 316c3", "receipt-pound b0df3", "product-reference 260ab", "product-list 767b3", "product-add 3c61d", "product-cost c5017", "print db5d9", "price-list 29ecb", "point-of-sale 5c581", "plus-circle-up b5778", "plus-circle-down 6adb0", "play-circle 40967", "play 7701a", "plan 36a68", "pin b8e8e", "pin-remove 3ea0d", "phone-out e16c8", "phone-in c8749", "personalized-text 13bcb", "person-segment 0ffaf", "person-remove 86ac4", "person-lock 075e7", "person-exit e284a", "person-list c4b25", "person-add e1356", "payout 4a8c7", "payout-rupee ec14a", "payout-yen cadf2", "payout-euro 29014", "payout-pound 8e41d", "payout-dollar 8dacd", "payment-capture bd5a6", "pause-circle bbdd7", "paste 9b115", "passkey d70c4", "paper-check c08e1", "paint-brush-round 7c2c9", "paint-brush-flat dd443", "pagination-start a843e", "pagination-end d2fcc", "page-up 937e7", "page-remove c2fb0", "page-report a32f6", "page-reference 21565", "page-list 53d07", "page-down 1741c", "page-heart 69c4b", "page-clock 8587e", "page-attachment 31682", "package f142a", "page-add 3a3ad", "package-returned 56169", "package-fulfilled e0f70", "outgoing 82c0c", "package-on-hold 02e3b", "outdent eec8d", "organization 2273f", "orders-status f37ec", "order-repeat d6dfd", "order-first 412dc", "order-draft f4521", "order-batches 8571a", "notification 3bea6", "note c4ee2", "note-add 5e69d", "nature 16422", "moon cc833", "money-none b7d86", "money a07db", "minimize 2facc", "metaobject c5037", "metaobject-list b8ec3", "metaobject-reference caa84", "metafields 5590a", "menu b417c", "menu-vertical f1d2d", "mention ab004", "megaphone 9082c", "menu-horizontal 54d27", "media-receiver 59399", "measurement-weight-list b4360", "measurement-volume 6d27e", "measurement-weight 63315", "measurement-volume-list efa86", "measurement-size-list 00438", "maximize 32bc0", "markets ea79c", "measurement-size ff808", "markets-yen e8fb4", "markets-rupee 7ce41", "markets-euro e36ec", "map 18d3d", "lock f321b", "live a036a", "list-numbered 4200f", "location-none 42676", "list-bulleted 1f5a9", "link bef77", "link-list 95daf", "layout-sidebar-right de0e7", "layout-section 4276f", "layout-sidebar-left 1c703", "layout-rows-2 bb9f3", "layout-popup 047e3", "layout-logo-block ae934", "layout-footer 15266", "layout-header 2133c", "layout-columns-3 12428", "layout-columns-2 f4e1d", "layout-column-1 b466f", "layout-buy-button d11ea", "layout-buy-button-vertical ff7b7", "layout-buy-button-horizontal 4996d", "layout-block eb414", "language-translate fa04b", "label-printer af3b2", "keyboard 69d39", "keyboard-filled c9f28", "keyboard-hide 0d8e0", "iq ae0a4", "key 4ae20", "inventory 1c853", "inventory-updated d08c9", "incoming e57ee", "import ce9ad", "images 6e771", "image e3468", "image-none 223bd", "image-with-text-overlay 7ffca", "image-magic cdf0f", "image-explore 7c893", "image-alt ecb5e", "image-add 9f48e", "identity-card e7d3d", "icons a19d1", "home 8b326", "heart e78c4", "hide-filled 0a7a7", "hashtag 38df4", "hashtag-decimal 53a6f", "hashtag-list a521a", "grid a38d5", "globe-list 91bd2", "globe-lines 8d570", "globe-europe 69ae3", "git-repository a3464", "globe-asia cb6b2", "git-commit bdc48", "git-branch f1120", "gift-card 7a278", "gauge afaa0", "games b5787", "forms 5e731", "forklift 4636d", "food 2b12c", "foreground 6ee39", "folder-up a9681", "folder 22c6c", "folder-remove 63f58", "folder-down 6bdb9", "folder-add 53820", "flower 2cf46", "flip-vertical 10ef5", "flip-horizontal 21b5f", "flag a139a", "filter 98f35", "file d5096", "file-list 27b70", "favicon 82ba5", "eyeglasses bf664", "eye-first e6033", "eye-dropper 73b68", "eye-dropper-list 6c262", "eye-check-mark cbc4f", "export edf30", "exit 323d2", "exchange 32b61", "eraser 07f62", "envelope-soft-pack 4a505", "envelope e7050", "enter d45b0", "email-newsletter c1e2c", "email-follow-up b3c73", "duplicate ff8f9", "drag-handle 4abdb", "drag-drop dce5c", "download ca9bf", "domain dafbd", "domain-redirect 8f6df", "domain-new 979f3", "domain-landing-page 5187b", "dock-side 04796", "dock-floating 28a7b", "discount b288a", "dns-settings 2ff8e", "discount-code f3dba", "discount-add 6e961", "desktop 87240", "delete d90e2", "database-connect 9d88f", "database abba1", "database-add 7e647", "data-table 297d2", "data-presentation b78a9", "cursor 4f297", "cursor-banner 46c96", "currency-convert 8853e", "cursor-option 0852f", "crop 297b1", "credit-card e3715", "credit-card-tap-chip 192e5", "credit-card-secure 2e159", "credit-card-reader c6b1a", "credit-card-reader-tap 88557", "credit-card-reader-chip e22f5", "credit-card-percent fb148", "credit-card-cancel cf804", "corner-pill 55c9c", "corner-round aac46", "contract 57a5d", "corner-square c0b19", "content 45fe9", "connect 35d76", "confetti afcb4", "compose bbf2f", "compass 4a6c8", "color a0c67", "color-none 62174", "collection-list f6a59", "code 1b83d", "code-add 2e3db", "clock-revert c79ee", "clipboard 9689e", "collection-reference fb8b3", "clipboard-checklist 46ca7", "clipboard-check 14af3", "circle 3f3dc", "circle-dashed d59e3", "collection-featured e8898", "chevron-up-circle 0f1d8", "chevron-right a2381", "chevron-right-circle dd560", "chevron-left ef785", "chevron-left-circle 8ffd9", "chevron-down-circle cce02", "checkbox 46332", "chat-referral 06cac", "check-circle-filled b8c8a", "chat 86971", "chat-new 58e2a", "chart-vertical d5b21", "chart-stacked cfa45", "chart-line abbdd", "chart-horizontal 11601", "chart-histogram-second-last 31093", "chart-popular a5a1b", "chart-histogram-last a442b", "chart-histogram-growth dff8f", "chart-histogram-full ef5a0", "chart-histogram-flat ee468", "chart-histogram-first 8f355", "chart-funnel 8845e", "chart-histogram-first-last e8091", "chart-donut 5ade3", "chart-cohort e9402", "channels dba03", "categories 62adc", "catalog-product 3d1a1", "cash-yen eddac", "cash-rupee a5fe7", "cash-pound eb192", "cash-euro 824fd", "cash-dollar a9f47", "cart-up 40b76", "cart-sale ec8db", "cart-down 0e838", "cart 823f1", "cart-discount 44ae7", "caret-up 4b7f5", "cart-abandoned 6111b", "caret-down 89f2a", "camera 0188e", "camera-flip b01f5", "calendar-time 73108", "calendar-list d066c", "calendar-compare c9762", "calculator 3f7a9", "button 90d45", "button-press d5a5f", "bullet 66362", "bug eed59", "book d019e", "book-open f6656", "blog cb268", "bill 5721b", "bolt 9373b", "barcode c4164", "bolt-filled 869a6", "bag 79c3e", "bank 5eb9b", "backspace ddde8", "automation 73ee8", "arrows-out-horizontal acded", "arrow-up c03df", "arrows-in-horizontal ffc77", "arrow-up-circle 24356", "arrow-right 806d4", "arrow-right-circle ad64d", "arrow-left 5e06a", "arrow-down 2c043", "arrow-down-circle c453a", "app-extension e5930", "arrow-left-circle bd824", "alert-octagon 29cc7", "alert-octagon-filled 73602", "alert-location cfd29", "alert-diamond 94e78", "airplane 655c9", "affiliate 24de4", "adjust 63782", "x-circle 042da", "x f359e", "view 5d254", "variant c960c", "star b093f", "sort b9331", "select 61998", "product 31265", "plus 662d6", "plus-circle db5e2", "phone 72e66", "person 59183", "payment 668f2", "page bcee2", "order 61df9", "order-unfulfilled 73550", "order-fulfilled c884b", "mobile 44638", "minus c3862", "minus-circle 48429", "microphone bf5c1", "merge 7593c", "location c7d02", "lightbulb 984bc", "language b844c", "info 099f6", "incomplete 04bea", "in-progress 4716e", "incentive 35365", "hide 10aef", "globe d7233", "external e00fd", "enabled 89dea", "email 2b70d", "edit 08726", "disabled b359e", "delivery 6331b", "collection b7a05", "chevron-up 7d8ec", "clock 1be62", "chevron-down 07fd7", "check-circle 83b1c", "check 6c790", "calendar 9b898", "calendar-check 076e5", "blank 85141", "attachment b28e5", "arrow-up-right 88125", "apps 88a3e", "archive 7fdad", "alert-triangle 43ba7", "alert-circle d6e61", "alert-bubble e92ba"];
 

const rawInternalIcons = ["work-filled ee18f", "wallet-filled 19796", "text-in-rows-filled 9d41f", "text-ai c0336", "tax-filled 1a595", "target-filled 772ff", "sidekick bd5fa", "store-filled 664fd", "shopify-ql 91bd0", "shopify-inbox 940a1", "shipping-label-filled feb25", "settings-filled d84d8", "receipt-yen-filled 1c750", "receipt-rupee-filled 35f32", "receipt-euro-filled 64bb1", "receipt-dollar-filled e229e", "receipt-pound-filled f6866", "product-filled 5d748", "price-list-filled fb65c", "pin-filled 46aa2", "plan-filled 23549", "person-lock-filled 8cac1", "person-filled 7a8f8", "payment-filled bb8c8", "passkey-filled 67d95", "page-clock-filled 88fda", "package-filled c96cd", "organization-filled a0336", "order-filled b7c04", "notification-filled ba801", "order-draft-filled bf9b5", "money-filled f076f", "metaobject-filled 8e2ac", "metafields-filled d6717", "megaphone-filled e6cc1", "markets-yen-filled 2b5e7", "markets-rupee-filled 594ec", "markets-filled a9dcf", "markets-euro-filled e0b3e", "logo-youtube 05c5a", "logo-x 745af", "logo-whatsapp 5af8f", "logo-weibo 5f21c", "logo-wechat 1d98f", "logo-vimeo 62ad8", "logo-twitch 129e3", "logo-tumblr fb02b", "logo-tiktok 18d95", "logo-threads cb34e", "logo-spotify bc249", "logo-snapchat b39a4", "logo-shop 343d6", "logo-reddit fff82", "logo-pinterest a243e", "logo-meta 388b0", "logo-linkedin f77d0", "logo-line baee0", "logo-instagram ed4fa", "logo-kakao-talk faaf0", "logo-hydrogen 19d91", "logo-google 9f296", "logo-flow ec79b", "logo-facebook 78cdf", "logo-discord 9dcbc", "logo-apple-tap-to-pay 8394e", "lock-filled 03f70", "location-filled 89257", "live-filled e412e", "legacy-external-small 2fcfd", "legacy-check-small 9880d", "list-bulleted-filled 3abc5", "layout-block-ai a0477", "legacy-x-small 6b09a", "language-filled 54e92", "inventory-filled b7730", "identity-card-filled 799d8", "home-filled 55574", "globe-filled 270d9", "icons-filled 7f7fd", "globe-europe-filled 77adc", "globe-asia-filled 1eafe", "gift-card-filled 09f34", "flower-filled 194be", "file-filled ba892", "domain-filled eeeb1", "discount-filled 7c8e2", "cursor-filled 62a6e", "delivery-filled 76a86", "content-filled 6938d", "contract-filled 0d001", "collection-filled c2e89", "clipboard-check-filled 6af70", "chart-vertical-filled 75904", "cash-dollar-filled 102f4", "cart-filled f2897", "cart-down-filled e8d71", "cart-abandoned-filled ec50b", "caret-right-small 093bd", "caret-left-small 7fc91", "blog-filled 98f1a", "blank-filled 1b7eb", "bill-filled 0198f", "bank-filled 6627f", "automation-filled 6a3c9", "attachment-filled ad275", "arrows-out-horizontal-filled 56cf3", "apps-filled 617c5", "magic 66af0"];

// Utilitaires
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

const camelCaseIconName = (str) =>
  str.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()) + 'Icon';

const extractSVGs = (svg) => {
  const matches = svg.match(/<svg[^>]*>[\s\S]*?<\/svg>/gi);
  return {
    base: matches?.[0] ?? null,
    small: matches?.[1] ?? null,
  };
};

const parseIconList = (rawList) =>
  Object.fromEntries(rawList.map((entry) => entry.split(' ')));

const writeFile = (filePath, content) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
};

const generateIconFile = (folder, name, svgs) => {
  const lines = [];
  if (svgs.base) lines.push(`export const base = \`${svgs.base}\`;`);
  if (svgs.small) lines.push(`export const small = \`${svgs.small}\`;`);
  writeFile(path.join(loc, folder, `${name}.ts`), lines.join('\n') + '\n');
};

const generateIndexFile = (folder) => {
  const dirPath = path.join(loc, folder);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  const importLines = files.map(file => {
    const iconName = file.replace(/\.ts$/, '');
    const importName = camelCaseIconName(iconName);
    return `import * as ${importName} from './${iconName}';`;
  });

  const exportLines = files.map(file => {
    const iconName = file.replace(/\.ts$/, '');
    const importName = camelCaseIconName(iconName);
    return `  ${JSON.stringify(iconName)}: ${importName},`;
  });

  const exportName = folder === 'icons' ? 'icons' : 'internalIcons';
  const content = `${importLines.join('\n')}\n\nexport const ${exportName} = {\n${exportLines.join('\n')}\n} as const;\n`;

  writeFile(path.join(dirPath, 'index.ts'), content);
};


const fetchWithRetry = async (url, folder, name) => {
  const attempt = async (n) => {
    try {
      const res = await fetch(url);
      if (res.status === 404) {
        return { success: false, error: '404 Not Found', attempts: n };
      }
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const svg = await res.text();
      const svgs = extractSVGs(svg);
      generateIconFile(folder, name, svgs);
      console.log(`✅ ${folder}/${name}`);
      return { success: true, attempts: n };
    } catch (err) {
      const message = err.message || 'Unknown error';
      if (message.includes('404')) {
        console.warn(`⚠️  ${folder}/${name}: ${message} (abandon immédiat)`);
        return { success: false, error: message, attempts: n };
      } else {
        console.warn(`🔁 ${folder}/${name}: tentative ${n}/${MAX_RETRIES} échouée (${message})`);
        if (n < MAX_RETRIES) {
          await wait(RETRY_DELAY_MS);
          return attempt(n + 1);
        } else {
          return { success: false, error: message, attempts: n };
        }
      }
    }
  };

  return attempt(1);
};

const fetchAndGenerate = async (folder, rawList) => {
  const icons = parseIconList(rawList);
  const failures = [];

  const tasks = Object.entries(icons).map(async ([name, hash]) => {
    const url = `https://cdn.shopify.com/shopifycloud/admin-ui-foundations/${folder === 'icons' ? 'icons' : 'internal-only'}/${hash}.svg`;
    const result = await fetchWithRetry(url, folder, name);
    if (!result.success && result.error) {
      failures.push({ folder, name, error: result.error, attempts: result.attempts });
    }
  });

  await Promise.allSettled(tasks);
  generateIndexFile(folder);

  if (failures.length > 0) {
    fs.mkdirSync(path.dirname(failureLogPath), { recursive: true });
    const logContent = failures
      .map(f => `${f.folder}/${f.name} — ${f.error} (tentatives: ${f.attempts})`)
      .join('\n');
    fs.writeFileSync(failureLogPath, logContent, 'utf8');
    console.log(`⚠️ Échecs enregistrés dans ${failureLogPath}`);
  }
};

const main = async () => {
  await Promise.all([
    fetchAndGenerate('icons', rawBaseIcons),
    fetchAndGenerate('internal-only', rawInternalIcons),
  ]);
};


main();
