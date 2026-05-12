# 🌍 GlobalPath — Study Abroad & Counselling Website

A professional, minimalist study abroad counselling platform inspired by LeverageEdu, Yocket, and Crizac.

---

## 🚀 Live Site
> Deployed on Vercel — link will appear here after first deployment

---

## 🛠️ Tech Stack
- **Frontend:** HTML5 + CSS3 + Vanilla JavaScript (no frameworks)
- **Hosting:** Vercel (free)
- **Version Control:** GitHub
- **Admin Storage:** localStorage (browser-based, no backend needed)

---

## 📁 File Structure

```
globalpath-website/
├── index.html            ← Main landing page (Phase 1 + 2 + 4)
├── universities.html     ← University explorer with filters (Phase 3)
├── stories.html          ← Student success stories (Phase 6)
├── blog.html             ← Blog & resources (Phase 6)
├── admin.html            ← Admin dashboard — password protected (Phase 5)
└── README.md             ← This file
```

---

## ✅ Build Phases

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Hero + Navbar + Footer + WhatsApp button | ⬜ |
| Phase 2 | Services + How It Works + Destinations + Stats | ⬜ |
| Phase 3 | University Explorer Page | ⬜ |
| Phase 4 | WhatsApp Widget + Lead Consultation Form | ⬜ |
| Phase 5 | Admin Dashboard (Universities, Programs, Leads) | ⬜ |
| Phase 6 | Success Stories + Blog Page | ⬜ |

> Update status: ⬜ Not started &nbsp;|&nbsp; 🟡 In progress &nbsp;|&nbsp; ✅ Done

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary BG (dark) | `#0A0F1E` |
| Secondary BG | `#FFFFFF` |
| Accent | `#2563EB` |
| Accent Hover | `#1D4ED8` |
| Text Primary | `#0F172A` |
| Text Muted | `#64748B` |
| Card BG | `#F8FAFC` |
| Heading Font | DM Serif Display |
| Body Font | DM Sans |

---

## 🔧 Local Development

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/globalpath-website.git
cd globalpath-website

# 2. Open in VS Code
code .

# 3. Install Live Server extension in VS Code
# Then right-click index.html → "Open with Live Server"
# Site runs at http://localhost:5500
```

---

## 🚢 Deployment (Vercel)

```bash
# After making changes locally:
git add .
git commit -m "Phase X - description of what you added"
git push origin main

# Vercel auto-deploys on every push to main ✓
```

**First-time Vercel setup:**
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click "Add New Project" → Import your GitHub repo
3. Leave all settings as default → Click "Deploy"
4. Done — your site is live in ~30 seconds

---

## 🔐 Admin Dashboard

- **URL:** `yoursite.vercel.app/admin.html`
- **Username:** `admin`
- **Password:** `globalpath2024`

> ⚠️ Change the password in `admin.html` before going live. Search for `globalpath2024` in the file and replace it.

**Admin can:**
- Add / edit / delete universities
- Add programs with intakes, eligibility, and scholarships
- View and manage student leads / enquiries
- Export leads as CSV

All data is stored in the browser's localStorage on the admin's device.

---

## 💬 WhatsApp Integration

Find and replace `91XXXXXXXXXX` across all files with your WhatsApp number in international format.

Example — for Indian number `98765 43210`:
```
Replace: 91XXXXXXXXXX
With:    919876543210
```

---

## 📌 How Each Phase Was Built

Each phase was generated using Claude AI (claude.ai).  
The master prompt document `StudyAbroad_Website_Prompt.md` contains all phase prompts.

**To rebuild or modify any phase:**
1. Open a new Claude chat
2. Upload `StudyAbroad_Website_Prompt.md`
3. Type: *"Refer to the attached master prompt. Now build/update Phase X — [paste that phase's prompt]"*

---

## 📞 Contact / Support

- **WhatsApp:** +91 XXXXXXXXXX
- **Email:** hello@globalpath.in
- **Instagram:** @globalpathAbroad

---

*Built with ❤️ using Claude AI + VS Code + Vercel*
