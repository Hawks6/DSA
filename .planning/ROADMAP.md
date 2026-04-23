# Roadmap: DSA Mastery Platform

## Overview

We're transforming a static "day-based" checklist into a topic-centric, premium educational hub. The journey starts with a foundational refactor to establish the new design system and state management, moves into deep pedagogical content generation (Wengrow style), and concludes with advanced search and polishing for the final "wow" factor.

## Phases

- [x] **Phase 1: Foundation (UI & Design System)** - Establish the premium typography, grid, and responsive layout. (completed 2026-04-22)
- [x] **Phase 2: Data Layer (The Curriculum JSON)** - Define the schema and migrate existing content into a topic-centric structure. (completed 2026-04-23)
- [x] **Phase 3: State Engine (Tracking & Persistence)** - Implement `localStorage` logic for problem status and progress bars. (completed 2026-04-23)
- [ ] **Phase 4: Pedagogy I (Linear Foundations)** - Author content for Arrays, Ordered Arrays, and Big O storytelling.
- [ ] **Phase 5: Pedagogy II (Links & Hashes)** - Author content for Linked Lists, Doubly Linked Lists, and Hash Tables.
- [ ] **Phase 6: Pedagogy III (Hierarchy & Trees)** - Author content for BSTs, Heaps, and Tries.
- [ ] **Phase 7: Pedagogy IV (Patterns & Sorting)** - Author content for Recursion, Dynamic Programming, and Sorting.
- [ ] **Phase 8: Discovery (Search & Filtering)** - Implement global client-side search and topic filtering.
- [ ] **Phase 9: UX Polish (Motion & Feedback)** - Add micro-animations, glassmorphism effects, and smooth transitions.
- [ ] **Phase 10: Final Audit & Deployment** - Cross-check all requirements and optimize for GitHub Pages.

---

## Phase Details

### Phase 1: Foundation (UI & Design System)
**Goal**: Establish the "Premium Book" visual identity.
**Depends on**: Nothing
**Requirements**: UI-01, UI-02, UI-03
**Success Criteria**:
  1. User sees "Fraunces" and "Figtree" fonts rendered correctly.
  2. Layout is responsive on mobile and desktop.
  3. Single-file index structure is established.
**Plans**: 1 plan

### Phase 2: Data Layer (The Curriculum JSON)
**Goal**: Formalize the topic-centric data structure.
**Depends on**: Phase 1
**Requirements**: UI-05
**Success Criteria**:
  1. Curriculum is defined in a separate JS/JSON structure.
  2. Topics are grouped by concept, not by days.
**Plans**: 1 plan

### Phase 3: State Engine (Tracking & Persistence)
**Goal**: Enable 1-click tracking that survives page reloads.
**Depends on**: Phase 2
**Requirements**: PRAC-03, PRAC-04, PRAC-05
**Success Criteria**:
  1. User can toggle a problem status and see it persist after refresh.
  2. Global progress bar reflects the current completion percentage.
**Plans**: 2 plans

### Phase 4: Pedagogy I (Linear Foundations)
**Goal**: High-quality content for Arrays and Big O.
**Depends on**: Phase 2
**Requirements**: CONT-01, CONT-02, CONT-03
**Success Criteria**:
  1. "The Parking Lot" analogy is clearly presented for Arrays.
  2. Big O "stories" are present for each operation.
**Plans**: 1 plan

### Phase 5: Pedagogy II (Links & Hashes)
**Goal**: High-quality content for Lists and Hashing.
**Depends on**: Phase 4
**Requirements**: CONT-01, CONT-04
**Success Criteria**:
  1. "The Paper Chain" analogy is presented for Linked Lists.
  2. Hash table collisions are explained with "The Magical Encyclopedia."
**Plans**: 1 plan

### Phase 6: Pedagogy III (Hierarchy & Trees)
**Goal**: High-quality content for Trees and Tries.
**Depends on**: Phase 5
**Requirements**: CONT-01, CONT-04
**Success Criteria**:
  1. Binary Search Tree traversal is explained intuitively.
  2. Tries are explained for autocomplete use cases.
**Plans**: 1 plan

### Phase 7: Pedagogy IV (Patterns & Sorting)
**Goal**: High-quality content for Recursion and Sorting.
**Depends on**: Phase 6
**Requirements**: CONT-01, CONT-04
**Success Criteria**:
  1. Recursion is explained as "Kicking the problem down the road."
  2. Dynamic Programming (Memoization) is clearly demonstrated.
**Plans**: 1 plan

### Phase 8: Discovery (Search & Filtering)
**Goal**: Make finding content instantaneous.
**Depends on**: Phase 7
**Requirements**: UI-04
**Success Criteria**:
  1. User can search for "linked list" and see relevant results instantly.
  2. Results are filtered by category/tags.
**Plans**: 1 plan

### Phase 9: UX Polish (Motion & Feedback)
**Goal**: Add the "Wow" factor.
**Depends on**: Phase 8
**Requirements**: UI-02
**Success Criteria**:
  1. Card expansions are smooth and animated.
  2. Glassmorphism and subtle gradients feel premium.
**Plans**: 1 plan

### Phase 10: Final Audit & Deployment
**Goal**: Production-ready release.
**Depends on**: Phase 9
**Requirements**: UI-01, UI-03
**Success Criteria**:
  1. Site passes Lighthouse accessibility and performance audits.
  2. Ready for `gh-pages` deployment.
**Plans**: 1 plan

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 1/1 | Complete    | 2026-04-22 |
| 2. Data Layer | 1/1 | Complete | 2026-04-23 |
| 3. State Engine | 2/2 | Complete | 2026-04-23 |
| 4. Pedagogy I | 1/1 | Complete | 2026-04-23 |
| 5. Pedagogy II | 1/1 | Complete | 2026-04-23 |
| 6. Pedagogy III | 1/1 | Complete | 2026-04-23 |
| 7. Pedagogy IV | 1/1 | Complete | 2026-04-23 |
| 8. Discovery | 1/1 | Complete | 2026-04-23 |
| 9. UX Polish | 1/1 | Complete | 2026-04-23 |
| 10. Final Audit | 1/1 | Complete | 2026-04-23 |

### Phase 11: Adding leetcode question links like we talked about

**Goal:** [To be planned]
**Requirements**: TBD
**Depends on:** Phase 10
**Plans:** 0 plans

Plans:
- [ ] TBD (run /gsd-plan-phase 11 to break down)

---
*Roadmap defined: 2026-04-23*
*Last updated: 2026-04-23 after initial definition*
