---
phase: 1
slug: foundation-ui-design-system
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-04-23
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Browser / Manual |
| **Config file** | none |
| **Quick run command** | `ls index.html style.css app.js` |
| **Full suite command** | `node .planning/verify-foundation.js` |
| **Estimated runtime** | ~1 second |

---

## Sampling Rate

- **After every task commit:** Run `ls index.html style.css app.js`
- **After every plan wave:** Run `node .planning/verify-foundation.js`
- **Before `/gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 5 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | UI-01, UI-05 | file | `ls index.html` | ✅ | ⬜ pending |
| 1-01-02 | 01 | 2 | UI-02 | browser | `open_browser_url index.html` | ✅ | ⬜ pending |
| 1-01-03 | 01 | 3 | UI-03 | script | `node .planning/verify-foundation.js` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `.planning/verify-foundation.js` — Basic DOM check script
- [ ] `index.html` — Base template
- [ ] `style.css` — Design system tokens
- [ ] `app.js` — Router entry point

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Responsive Layout | UI-02 | Visual judgment | Resize browser to 375px and 1920px. Ensure no overflow. |
| Typography Feel | UI-01 | Aesthetic judgment | Verify Fraunces and Figtree look "premium" and educational. |
| Smooth Transition | UI-03 | Animation feel | Verify no jarring flicker when switching hash routes. |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 5s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
