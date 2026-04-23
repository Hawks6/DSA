# Tech Stack: DSA Mastery Platform

## Recommended Stack (2025 Static Education)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Core** | Vanilla HTML5 / ES6+ | Maximum portability, zero build overhead, perfect for GitHub Pages. |
| **Styling** | Modern Vanilla CSS (Custom Properties + Grid/Flexbox) | Extremely lightweight, no dependency bloat, high performance. |
| **Typography** | Google Fonts: Fraunces (Serif) & Figtree (Sans) | Fraunces provides a "premium book" feel for headers; Figtree is highly readable for body text. |
| **Monospace** | JetBrains Mono | Industry standard for code readability. |
| **Animations** | CSS Transitions & `IntersectionObserver` | Fluid feel without heavy JS libraries. Focus on `opacity` and `transform`. |
| **Persistence** | `localStorage` API | Simple, client-side persistence for tracking progress without a database. |

## Typography Palette
- **Headers**: `Fraunces` (900 weight) - Bold, editorial look.
- **Body**: `Figtree` (400-600 weight) - Modern, clean, professional.
- **Code**: `JetBrains Mono` - Precise, technical.

## Design Principles
- **Editorial Layout**: Use generous whitespace and large type to mimic a premium physical book.
- **Glassmorphism**: Subtle backdrops and blurs for a modern, airy feel.
- **Micro-interactions**: Hover effects on cards, progress bar transitions, and smooth expansion of "Topic" details.

## What NOT to use
- **Tailwind CSS**: User prefers vanilla unless requested; for a single-page educational tool, raw CSS allows more "personality."
- **React/Next.js**: Overkill for a static checklist; adds unnecessary complexity for GitHub Pages hosting.
- **Heavy Animation Libs (GSAP/Framer)**: Keep it fast and simple with CSS.
