# One Raices — Link in Bio Site

A bilingual (English/Spanish) real estate link-in-bio site for One Raices. Multiple pages, no build step, no backend required — works on any static host, including Render.

## 📄 Pages included

| File | What it is |
|---|---|
| `index.html` | Your main bio page — profile, WhatsApp/call buttons, all links |
| `contact.html` | "Book a Free Consultation" — contact form + WhatsApp fallback |
| `listings.html` | "View My Listings" — 3 sample property cards (replace with real ones) |
| `buyer-guide.html` | "Buyer Guide" — 5-step home buying guide |
| `seller-guide.html` | "Seller Guide" — 5-step home selling guide |
| `renter-guide.html` | "Renter Guide" — 5-step rental guide |
| `shared.css` | Shared styling used by all the pages above (not the bio page, which is self-contained) |
| `lang.js` | Shared bilingual engine used by all the pages above |
| `logo.png` | Your One Raices logo |
| `render.yaml` | Tells Render how to deploy this as a static site |

Every page has the EN/ES toggle, links back to the bio page, and matches your Midnight Gold branding.

---

## 🚀 Deploy to Render (step by step)

1. **Create a free Render account** at https://render.com
2. **Push this folder to a GitHub repo:**
   - Create a new repo (e.g. `one-raices-link-in-bio`)
   - Upload **all the files in this folder** (drag-and-drop on github.com works, or `git push`)
   - ⚠️ Important: all files need to stay in the same folder together (don't put `index.html` in a subfolder while `logo.png` stays in the root, etc.)
3. **In Render:** click **New +** → **Static Site**
4. **Connect your GitHub repo**
5. Render auto-detects `render.yaml`. If asked manually, set:
   - **Build Command:** (leave blank)
   - **Publish Directory:** `./`
6. Click **Create Static Site**. You'll get a live URL like:
   `https://one-raices-link-in-bio.onrender.com`
7. **(Optional) Custom domain** — Render → your site → Settings → Custom Domains (e.g. `link.oneraices.com`)
8. **Put the live URL in your Instagram/TikTok/YouTube bio!**

Every push to GitHub auto-redeploys in about a minute.

---

## ⚠️ Before going live — things you MUST change

These are currently placeholders. The site will work, but visitors will see fake info until you update them.

### 1. WhatsApp & call number (appears in 3 files: `index.html`, `contact.html`, `listings.html`)
Search every file for `11234567890` and replace with your real number — country code + number, no spaces, dashes, or plus signs (the `+` is already in the code where needed).
Example: US number (727) 555-0100 → `17275550100`

### 1. Contact form — ✅ already connected
The form on `contact.html` is wired to your Formspree endpoint (`https://formspree.io/f/mdarlkze`) and submits via AJAX, so visitors see your custom success message without leaving the page. Submissions will arrive at the email you used to sign up for Formspree. No further setup needed — just test it once after deploying to confirm you receive a test submission.

### 2. Sample listings (`listings.html`)
The 3 property cards are fake examples. Replace the price, address, beds/baths/sqft, and WhatsApp message for each — look for `EDIT ME` comments. To add a photo to a listing, replace its `<div class="listing-img">` block with an `<img>` tag (instructions in the comment).

### 3. Social media links (`index.html`)
Near the bottom, the Instagram/TikTok/YouTube/Twitter icons all link to `#`. Replace each with your real profile URL.

### 4. Your direct booking/destination links (`index.html`)
"What's Your Home Worth?" and "About Me / Contact" currently point to `contact.html` — that's intentional (they funnel to your contact form), but feel free to point "What's Your Home Worth?" somewhere else later if you set up a dedicated home-valuation tool.

---

## ✏️ Other things you can customize

### Colors / template
At the top of `index.html`'s `<style>` block (and also at the top of `shared.css` for the sub-pages):
```css
:root {
  --banner: #1a1a2e;
  --btn: #C9A96E;
  --ring: #C9A96E;
  --bg: #f8f6f0;
  --text: #1a1a2e;
}
```
Update the same 5 values in **both** `index.html` and `shared.css` to keep every page consistent. Palette options:
- **Midnight Gold** (current): `#1a1a2e` / `#C9A96E` / `#C9A96E` / `#f8f6f0` / `#1a1a2e`
- **Blush Luxe:** `#8B4560` / `#D4A0B0` / `#D4A0B0` / `#fdf4f6` / `#5a1e35`
- **Forest Green:** `#1B4332` / `#52B788` / `#52B788` / `#f0f7f4` / `#1B4332`
- **Ocean Blue:** `#023E8A` / `#48CAE4` / `#48CAE4` / `#f0f8ff` / `#023E8A`
- **Warm Terracotta:** `#7B3F00` / `#D4845A` / `#D4845A` / `#fdf5ee` / `#5C2E00`

### Text / translations
Every page has its own `PAGE_I18N` (or `I18N` on the bio page) object near the bottom of the file, with `en: {...}` and `es: {...}` blocks. Edit the text directly there.

### Guide page content
`buyer-guide.html`, `seller-guide.html`, and `renter-guide.html` each have 5 numbered sections with starter advice. Rewrite any of them with your own process, local market knowledge, or specific lender/inspector recommendations — look for `EDIT ME` comments.

---

## 🌐 How the language toggle works

Every page auto-detects the visitor's browser language on first visit (Spanish browsers see Spanish, everyone else sees English). Once someone manually picks EN or ES, that choice is remembered across all pages on their device.

---

## 📊 Adding real analytics

The site currently has no centralized analytics. To track real visitor behavior:

- **Google Analytics (GA4)** — free, most common. Get a Measurement ID from analytics.google.com, then paste this snippet into the `<head>` of **every** HTML file (`index.html`, `contact.html`, `listings.html`, and all 3 guide pages):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```
Replace `G-XXXXXXX` with your real ID.

- **Meta Pixel** — best if most traffic comes from Instagram/Facebook. Same idea: paste your pixel snippet into every page's `<head>`.

---

## ✅ Pre-launch checklist

- [ ] Replaced WhatsApp/call placeholder number everywhere
- [x] Connected the contact form to Formspree
- [ ] Replaced sample listings with real ones (or at least removed them if you have none yet)
- [ ] Replaced social media `#` links with real profile URLs
- [ ] Reviewed/edited guide page content to match your actual process
- [ ] Confirmed colors match across `index.html` and `shared.css`
- [ ] Tested the site on your phone in both English and Spanish
- [ ] Added the live Render URL to your Instagram/TikTok/YouTube bio
