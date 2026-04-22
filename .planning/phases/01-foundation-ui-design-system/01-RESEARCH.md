# Phase 1: Foundation (UI & Design System) - Research

## Technical Approach: Vanilla SPA Foundation

### 1. Hash-Based Routing
For simple hosting on GitHub Pages, **Hash Routing** is the most reliable pattern as it requires zero server-side configuration for deep-linking.
- **Event Listeners**: Listen to `hashchange` and `DOMContentLoaded`.
- **Router Logic**: A simple mapping of `#/topic-id` to a `renderTopic(id)` function.
- **Fallback**: Default to the first topic or a dashboard view if the hash is empty or invalid.

### 2. Typographic System (The "Premium Book" Feel)
- **Fraunces (Display Serif)**:
  - Role: Hero headers, Section titles.
  - Optical Sizing: Use `font-variation-settings: "opsz" 72;` for large titles and `opsz 12` for smaller accents.
  - Weight: Use 900 for the main title to create a high-contrast editorial look.
- **Figtree (Geometric Sans)**:
  - Role: Body text, UI labels.
  - Sizing: Base at `1.125rem` (18px) for readability. Line height `1.6`.
- **JetBrains Mono (Technical Mono)**:
  - Role: Code blocks, Big O annotations, metadata.
  - Scaling: Monospace fonts often appear larger; scale to `0.9em` to balance with Figtree.

### 3. CSS Architecture (Modern Vanilla)
- **Design Tokens**: Use CSS Custom Properties for all palette and spacing values.
- **Layout**: Grid-based Sidebar + Content layout. Use `sticky` for the sidebar to keep navigation available during long-form reading.
- **Glassmorphism**: Use `backdrop-filter: blur()` and semi-transparent backgrounds for the sidebar and progress bars to create a "glass" layer effect.

## Validation Architecture

### 1. Visual Verification
- **Font Rendering**: Verify that Google Fonts load correctly and the variable font axes (optical size) are applied.
- **Responsive Audit**: Check layout on 375px (iPhone SE) and 1920px (Desktop).

### 2. Functional Verification
- **Routing**: Clicking a sidebar link updates the URL hash and changes the content without a page reload.
- **Deep Linking**: Refreshing the page with a specific hash (e.g., `index.html#/arrays`) loads the correct topic.

### 3. Performance Audit
- **Lighthouse**: Target 90+ for Accessibility and Best Practices.
- **Bundle Size**: Keep initial JS load under 50KB.

## Implementation Pitfalls to Avoid
- **Flash of Unstyled Text (FOUT)**: Use `font-display: swap` and a solid fallback stack (Georgia/Arial).
- **Navigation Latency**: Use `requestAnimationFrame` for any smooth scrolling transitions between topics.
