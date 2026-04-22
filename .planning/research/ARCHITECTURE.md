# Architecture: DSA Mastery Platform

## System Overview
A lightweight, single-page application (SPA) architecture designed for maximum speed and zero server-side requirements.

## Component Boundaries

### 1. Data Layer (`curriculum.js` or inline)
- A structured JSON-like array containing:
  - Topic Metadata (Name, Analogy, Big O Story).
  - Practice Problems (Title, Difficulty, LeetCode Link, "Why this problem?" explanation).
  - Category/Tag mapping.

### 2. State Management (`state.js`)
- **Persistence**: A simple wrapper around `localStorage` to save problem statuses and overall progress.
- **Initialization**: Hydrate UI from local storage on load.
- **Update Logic**: Event-driven updates to specific problem IDs.

### 3. UI Engine (`app.js`)
- **Rendering**: Dynamic card generation from the data layer.
- **Search**: Client-side filtering logic (case-insensitive string matching across titles and analogies).
- **Navigation**: Tabbed or categorized view to switch between major DSA sections.

### 4. Search Implementation
- Simple array filter: `data.filter(item => item.content.includes(query))`.
- Debounced input for performance.

## Suggested Build Order
1. **Core Data Structure**: Define the schema for topics and problems.
2. **Persistence Layer**: Implement the `localStorage` tracker.
3. **Template System**: Create the reusable HTML/CSS for Topic Cards.
4. **Navigation/Search**: Implement the filtering and categorization.
5. **Polishing**: Add smooth transitions and premium typography.
