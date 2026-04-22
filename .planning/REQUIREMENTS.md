# Requirements: DSA Mastery Platform

**Defined**: 2026-04-23
**Core Value**: Demystifying DSA through intuitive analogies and "steps, not seconds" Big O storytelling to make learning accessible and durable.

## v1 Requirements

### Core Architecture & UI
- [ ] **UI-01**: Single-page static site structure hostable on GitHub Pages.
- [ ] **UI-02**: Premium typography using Fraunces (Headers) and Figtree (Body).
- [ ] **UI-03**: Responsive design that works flawlessly on mobile and desktop.
- [ ] **UI-04**: Global search functionality across all topics and problems.
- [ ] **UI-05**: Topic-based navigation/filtering (removing "45-day" fixed schedule).

### Pedagogical Content
- [ ] **CONT-01**: Analogy-based topic explanations for all major DSA categories (Wengrow style).
- [ ] **CONT-02**: Big O "stories" explaining time/space complexity in intuitive terms for each topic.
- [ ] **CONT-03**: Visual code snippets using JetBrains Mono with proper syntax highlighting.
- [ ] **CONT-04**: Comprehensive curriculum covering Arrays, Hashing, Lists, Trees, Graphs, Sorting, Recursion, and DP.

### Practice & Tracking
- [ ] **PRAC-01**: Detailed practice problems (LeetCode) with direct external links.
- [ ] **PRAC-02**: Problem-specific "Context" or "Why?" hints linking the problem back to the topic.
- [ ] **PRAC-03**: 1-click status toggles: Solved (Green), Attempted (Yellow), Need to Revisit (Red/Gold).
- [ ] **PRAC-04**: Persistent progress tracking using `localStorage` (survives refreshes).
- [ ] **PRAC-05**: Global progress bar visualizing overall curriculum completion.

## v2 Requirements
- **ADV-01**: Dark mode toggle with persistent preference.
- **ADV-02**: Export/Import progress as JSON for local backups.
- **ADV-03**: Animated diagrams for complex structures (Trees/Graphs).

## Out of Scope
| Feature | Reason |
|---------|--------|
| Backend Database | User requested simple hosting (GitHub Pages); `localStorage` is sufficient for personal use. |
| User Accounts/Auth | Unnecessary for personal use case; adds high friction. |
| 45-day fixed schedule | User explicitly requested topic-based learning instead. |
| Real-time Collaboration | Not required for personal learning tool. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| UI-01 | Phase 1 | Pending |
| UI-02 | Phase 1 | Pending |
| UI-03 | Phase 1 | Pending |
| UI-04 | Phase 8 | Pending |
| UI-05 | Phase 2 | Pending |
| CONT-01 | Phase 4-7 | Pending |
| CONT-02 | Phase 4-7 | Pending |
| CONT-03 | Phase 4-7 | Pending |
| CONT-04 | Phase 7 | Pending |
| PRAC-01 | Phase 3 | Pending |
| PRAC-02 | Phase 3 | Pending |
| PRAC-03 | Phase 3 | Pending |
| PRAC-04 | Phase 3 | Pending |
| PRAC-05 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 14 total
- Mapped to phases: 14
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-23*
*Last updated: 2026-04-23 after initial definition*
