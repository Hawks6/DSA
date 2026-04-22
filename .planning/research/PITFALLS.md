# Pitfalls: DSA Mastery Platform

## Domain-Specific Pitfalls

### 1. The "Math Jargon" Trap
- **The Pitfall**: Falling back to formal definitions (e.g., "logarithmic time is log₂n") instead of Wengrow's "halving the data" story.
- **Prevention**: Every Big O explanation must be a *story* first. "If N doubles, the steps only increase by 1" is better than "It's O(log N)."

### 2. Cognitive Overload
- **The Pitfall**: Displaying too many problems or too much text on the screen at once.
- **Prevention**: Use the "Expanded Card" pattern. Keep the initial view clean with just the Topic and Analogy hook. Only show the deep explanation and problems when requested.

### 3. LocalStorage Fragility
- **The Pitfall**: Losing user progress if the data schema changes or the browser clears cache.
- **Prevention**: Implement a simple "Export/Import Data" feature (JSON download) so users can backup their progress. Use versioned keys in localStorage.

### 4. Search Relevancy
- **The Pitfall**: Searching for "Array" and getting 50 results that mention the word "array" in the body text but aren't about Arrays.
- **Prevention**: Prioritize matches in titles and categories. Highlight exact matches.

## UI/UX Gotchas
- **Mobile Readability**: Long code snippets or analogies can be painful on small screens. Use responsive font sizing and horizontal scroll for code blocks.
- **Interaction Fatigue**: If every problem status change requires a full page reload or a confusing menu, the user will stop tracking. Ensure status toggles are 1-click.
