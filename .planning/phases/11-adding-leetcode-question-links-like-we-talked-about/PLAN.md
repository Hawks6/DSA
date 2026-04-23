# Phase 11 Plan: LeetCode Question Links

## Context
As previously discussed, we are adding direct LeetCode links to each practice question in the curriculum. The `features.md` explicitly calls for a "Direct Links: Button to open LeetCode directly for each problem."

## Strategy
We need to update the data layer (`curriculum.json`) to store URLs, and update the UI (`app.js` and `style.css`) to display a clickable link.

## Steps

1. **Update `curriculum.json`**
   - Add a `url` property to every question object within the `practiceQuestions` array for all 21 days.
   - For standard problems like "Two Sum (Blind 75 Easy)", the URL will be `https://leetcode.com/problems/two-sum/`.
   - To avoid tedious manual entry, I will write a small Node.js script during execution that automatically parses the `title`, generates the `url`, and rewrites `curriculum.json`.
   - The script will extract the problem name (e.g., "Contains Duplicate" from "Contains Duplicate (NeetCode Easy)"), convert it to lowercase, replace spaces with hyphens, and append it to `https://leetcode.com/problems/`.

2. **Update `app.js` UI Rendering**
   - In `renderDynamicContent`, locate the generation of `practiceQuestionsHtml`.
   - Modify the string interpolation to include an anchor tag for `q.url` right after `<strong>${q.title}</strong>`.
   - Example: `<a href="${q.url}" target="_blank" class="leetcode-link" rel="noopener" title="Solve on LeetCode">Solve ↗</a>`

3. **Style the Link (`style.css`)**
   - Add `.leetcode-link` styling to make it look like a clean, small secondary button.
   - We will use LeetCode's recognizable brand color `#ffa116` or the site's accent color.
   - Ensure flex alignment in the `.problem-header` so the link sits nicely next to the title or pushed to the right before the status wrapper.

## Open Questions
- Is "Solve ↗" an acceptable label for the link button, or would you prefer something else like an icon only?
- For the `curriculum.json` URLs, my automated script will generate standard LeetCode links. Is that acceptable?
