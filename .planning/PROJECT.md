# DSA Mastery Platform (Common Sense Edition)

## What This Is

A personal DSA learning and practice website based on the pedagogical foundation of Jay Wengrow's "A Common-Sense Guide to Data Structures and Algorithms". It focuses on topic-based learning, practice problem tracking with LeetCode links, and premium educational aesthetics.

## Core Value

Demystifying DSA through intuitive analogies and "steps, not seconds" Big O storytelling to make learning accessible and durable.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Topic-based navigation (removing "45-day" schedule focus)
- [ ] Pedagogical content (analogies, Big O stories) based on Wengrow's method
- [ ] Detailed practice questions with direct LeetCode links
- [ ] Persistent problem tracker (Solved, Attempted, Need to Revisit) using `localStorage`
- [ ] Premium "educational book" aesthetic (refined typography, high-end design)
- [ ] Single-file or simple static-site architecture for GitHub Pages hosting
- [ ] Search functionality for topics and practice problems

### Out of Scope

- [ ] 45-day fixed schedule — [user prefers topic-based flexible learning]
- [ ] Backend database/User accounts — [user requested simple hosting; localStorage is sufficient for personal use]
- [ ] Social features/Leaderboards — [personal use case]

## Context

- Based on Jay Wengrow's *A Common-Sense Guide to Data Structures and Algorithms*.
- Evolution of an existing `Base.html` which contains initial curriculum data.
- User values "visual excellence" and a "premium" feel.

## Constraints

- **Architecture**: Must be static and lightweight (hostable on GitHub Pages).
- **Technology**: Vanilla HTML/CSS/JS preferred for simplicity and portability.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Topic-based navigation | User requested focus on topics over a fixed timeline | — Pending |
| LocalStorage tracking | Allows persistence without a backend | — Pending |
| Single-file approach | Maximum portability and simplicity for personal use | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-23 after initialization*
