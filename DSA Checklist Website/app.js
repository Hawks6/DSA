/**
 * DSA Mastery Platform - Core Application Logic
 * Foundation Phase: Hash-based routing and UI management
 */

const StateEngine = {
    KEY: 'dsa_mastery_state',
    
    load() {
        const data = localStorage.getItem(this.KEY);
        if (data) {
            try {
                return JSON.parse(data);
            } catch (e) {
                console.error("Failed to parse state", e);
            }
        }
        return { topics: {}, problems: {} };
    },
    
    save(state) {
        localStorage.setItem(this.KEY, JSON.stringify(state));
    },
    
    setTopicComplete(dayNumber, isComplete) {
        const state = this.load();
        if (isComplete) {
            state.topics[dayNumber] = true;
        } else {
            delete state.topics[dayNumber];
        }
        this.save(state);
    },
    
    isTopicComplete(dayNumber) {
        return !!this.load().topics[dayNumber];
    },
    
    setProblemStatus(problemId, status) {
        const state = this.load();
        if (status === 'unattempted') {
            delete state.problems[problemId];
        } else {
            state.problems[problemId] = status;
        }
        this.save(state);
    },
    
    getProblemStatus(problemId) {
        return this.load().problems[problemId] || 'unattempted';
    },

    getCompletedTopicsCount() {
        return Object.keys(this.load().topics).length;
    }
};

const App = {
    staticRoutes: {
        '#/introduction': {
            title: 'Welcome to DSA Mastery',
            content: `
                <div class="topic-header">
                    <span class="topic-meta">Core Foundation</span>
                    <h1>Welcome to DSA Mastery</h1>
                </div>
                <div class="topic-content">
                    <p>Welcome to DSA Mastery. This platform is designed to help you master Data Structures and Algorithms through a pedagogical foundation rooted in common sense. We avoid jargon where possible and focus on the <em>why</em> before the <em>how</em>.</p>
                    
                    <h2>The "Closet Organization" Paradigm</h2>
                    <p>Imagine you have a massive walk-in closet, and you just went on a shopping spree. You have two choices for how to store your new clothes.</p>
                    <p><strong>Choice A:</strong> You walk in and just throw everything into a giant pile on the floor. <br/>
                    <em>The Benefit:</em> Putting clothes away is incredibly fast. You just toss them in.<br/>
                    <em>The Drawback:</em> When you need to find your favorite blue shirt, you have to dig through the entire pile. It could take hours.</p>

                    <p><strong>Choice B:</strong> You neatly fold everything, organize it by color, and place shirts on the left shelves and pants on the right. <br/>
                    <em>The Benefit:</em> Finding that blue shirt takes five seconds. You know exactly where it is.<br/>
                    <em>The Drawback:</em> Putting clothes away after laundry day takes a lot of time and effort.</p>

                    <p>This is exactly what Data Structures are: different ways to organize your computer's "closet" (its memory) based on whether you need to put things away quickly, or find them quickly. There is no "perfect" data structure—only the right tool for the right job.</p>

                    <div class="callout">
                        <p><strong>Algorithms</strong> are just the specific sets of instructions you use to interact with that closet. An algorithm is just a recipe. Think of it as: "Step 1: Walk to the blue section. Step 2: Scan from left to right. Step 3: Pick up the shirt."</p>
                    </div>
                </div>
            `
        },
        '#/big-o-notation': {
            title: 'Big O Notation',
            content: `
                <div class="topic-header">
                    <span class="topic-meta">Core Foundation</span>
                    <h1>Big O: Measuring Efficiency</h1>
                </div>
                <div class="topic-content">
                    <p>If two programmers write different algorithms to solve the exact same problem, how do we know which one is "better"?</p>
                    <p>We can't just run them and use a stopwatch. One programmer might be using a multi-million dollar supercomputer, and the other might be using a ten-year-old laptop. The supercomputer will always win, even if its algorithm is terrible.</p>

                    <h2>Steps, Not Seconds</h2>
                    <p>Instead of measuring time in seconds, we measure efficiency by counting the <strong>number of steps</strong> an algorithm takes. More importantly, we ask: <em>"As the amount of data grows, how does the number of steps grow?"</em> This is called <strong>Time Complexity</strong>.</p>

                    <div class="callout big-o-callout">
                        <h2>The Three Common Stories of Big O</h2>
                        <p><strong>O(1) - Constant Time (The Magic Box):</strong> No matter how much stuff is in the box—10 items or 10 million items—it always takes exactly 1 step to get what you need. It never slows down.</p>
                        <p><strong>O(N) - Linear Time (The Checkout Line):</strong> If there are N people in line, it takes N steps to get through them. If the line doubles in size, the time it takes also doubles. It grows proportionally.</p>
                        <p><strong>O(N²) - Quadratic Time (The Handshake Problem):</strong> Imagine a room where everyone must shake hands with everyone else. If you add just one more person, the number of handshakes jumps up dramatically. If the data doubles, the work quadruples.</p>
                    </div>

                    <h2>The Formal Computer Science Math</h2>
                    <p>While the common sense intuition is what you'll use day-to-day, every computer scientist needs to understand the formal mathematical definition of Big O. In computer science, Big O notation describes the <strong>asymptotic upper bound</strong> of an algorithm's growth rate.</p>

                    <p><strong>The Formal Definition:</strong> Let <code>f(n)</code> and <code>g(n)</code> be functions mapping positive integers to positive real numbers. We say that <code>f(n) = O(g(n))</code> if there exist positive constants <code>c</code> and <code>n₀</code> such that:</p>
                    
                    <p style="text-align: center; font-family: var(--font-mono); background: #f4f4f5; padding: 1rem; border-radius: 8px;"><code>0 ≤ f(n) ≤ c &middot; g(n)</code> for all <code>n ≥ n₀</code></p>

                    <p><strong>What does this actually mean?</strong> Let's break down the math using our common sense:</p>
                    <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
                        <li><code>n</code> is the size of our input (how many clothes in the closet).</li>
                        <li><code>f(n)</code> is the exact number of steps our algorithm takes (e.g., exactly <code>3n + 5</code> steps).</li>
                        <li><code>g(n)</code> is the simplified Big O category (like <code>n</code>, meaning O(N)).</li>
                        <li>The formula simply says: "Once the data gets large enough (past point <code>n₀</code>), our algorithm's steps <code>f(n)</code> will never cross the ceiling drawn by <code>c * g(n)</code>."</li>
                    </ul>

                    <p>In interviews and daily coding, we drop the constants (the <code>c</code>) and the lower-order terms because as <code>n</code> approaches infinity, only the largest factor matters. That's why <code>O(3n + 5)</code> simplifies to just <code>O(N)</code>.</p>
                </div>
            `
        }
    },
    
    curriculumData: [],

    async init() {
        console.log('DSA Mastery Initializing...');
        
        try {
            const response = await fetch('curriculum.json');
            if (!response.ok) {
                throw new Error('Failed to load curriculum data');
            }
            this.curriculumData = await response.json();
            
            this.buildNavigation();
            
            const searchInput = document.getElementById('topic-search');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    this.buildNavigation(e.target.value);
                });
            }
            
            // Listen for route changes
            window.addEventListener('hashchange', () => this.handleRouting());
            // DOMContentLoaded already fired if this script runs at the end, but safe to handle now
            this.handleRouting();
        } catch (error) {
            console.error('Error initializing app:', error);
            const contentArea = document.getElementById('content');
            if (contentArea) {
                contentArea.innerHTML = `<h2>Error</h2><p>Could not load the curriculum data. Please try again later.</p>`;
            }
        }
    },

    slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    },

    buildNavigation(searchQuery = '') {
        const nav = document.querySelector('.topic-nav');
        if (!nav) return;
        
        const query = searchQuery.toLowerCase().trim();
        let html = '';
        
        // If not searching, show static foundations
        if (!query) {
            html += `
                <div class="nav-section">
                    <h2>Core Foundations</h2>
                    <ul>
                        <li><a href="#/introduction" class="nav-link">Introduction</a></li>
                        <li><a href="#/big-o-notation" class="nav-link">Big O Notation</a></li>
                    </ul>
                </div>
            `;
        }
        
        if (query) {
            // Search mode: flat list
            const matchedItems = this.curriculumData.filter(item => 
                item.topic.toLowerCase().includes(query)
            );
            
            html += `
                <div class="nav-section">
                    <h2>Search Results (${matchedItems.length})</h2>
                    <ul>
            `;
            
            if (matchedItems.length === 0) {
                 html += `<li style="padding: 1rem; color: var(--text-secondary); font-size: 0.9rem;">No topics found matching "${query}"</li>`;
            } else {
                matchedItems.forEach(item => {
                    const slug = this.slugify(item.topic);
                    const isCompleted = StateEngine.isTopicComplete(item.dayNumber);
                    const statusHtml = isCompleted ? '<span class="status-icon">✅</span>' : '';
                    html += `<li class="${isCompleted ? 'completed-topic' : ''}"><a href="#/${slug}" class="nav-link" data-day="${item.dayNumber}">${statusHtml} Day ${item.dayNumber}: ${item.topic}</a></li>`;
                });
            }
            html += `
                    </ul>
                </div>
            `;
        } else {
            // Normal grouped mode
            const phases = {};
            this.curriculumData.forEach(item => {
                if (!phases[item.phase]) {
                    phases[item.phase] = [];
                }
                phases[item.phase].push(item);
            });
            
            for (const [phaseId, items] of Object.entries(phases)) {
                html += `
                    <div class="nav-section">
                        <h2>Phase ${phaseId}</h2>
                        <ul>
                `;
                
                items.forEach(item => {
                    const slug = this.slugify(item.topic);
                    const isCompleted = StateEngine.isTopicComplete(item.dayNumber);
                    const statusHtml = isCompleted ? '<span class="status-icon">✅</span>' : '';
                    html += `<li class="${isCompleted ? 'completed-topic' : ''}"><a href="#/${slug}" class="nav-link" data-day="${item.dayNumber}">${statusHtml} Day ${item.dayNumber}: ${item.topic}</a></li>`;
                });
                
                html += `
                        </ul>
                    </div>
                `;
            }
        }
        
        nav.innerHTML = html;
        this.updateStats();
        
        // Re-apply active link state
        this.updateActiveLink(window.location.hash || '#/introduction');
    },
    
    updateStats() {
        const totalTopics = this.curriculumData.length;
        const completedTopics = StateEngine.getCompletedTopicsCount();
        
        const progressStats = document.querySelector('.progress-stats');
        const progressBar = document.querySelector('.progress-bar');
        
        if (progressStats) {
            progressStats.textContent = `${completedTopics} of ${totalTopics} topics mastered`;
        }
        if (progressBar) {
            const percentage = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);
            progressBar.style.width = `${percentage}%`;
        }
    },

    handleRouting() {
        const hash = window.location.hash || '#/introduction';
        
        // Check if it's a static route
        if (this.staticRoutes[hash]) {
            this.renderContent(this.staticRoutes[hash]);
        } else {
            // Find in dynamic curriculum
            const hashSlug = hash.replace('#/', '');
            const topicItem = this.curriculumData.find(item => this.slugify(item.topic) === hashSlug);
            
            if (topicItem) {
                this.renderDynamicContent(topicItem);
            } else {
                this.renderContent({
                    title: 'Topic Not Found',
                    content: `<h1>Topic Not Found</h1><p>We couldn't find the topic you're looking for.</p>`
                });
            }
        }
        
        this.updateActiveLink(hash);
    },
    
    renderDynamicContent(topicItem) {
        // Format practice questions
        let practiceQuestionsHtml = '';
        if (topicItem.practiceQuestions && topicItem.practiceQuestions.length > 0) {
            practiceQuestionsHtml = `
                <div class="practice-section">
                    <h2>Practice Questions</h2>
                    <ul>
                        ${topicItem.practiceQuestions.map(q => {
                            const problemId = this.slugify(q.title + '-' + topicItem.dayNumber);
                            const status = StateEngine.getProblemStatus(problemId);
                            return `
                                <li class="practice-problem" data-problem-id="${problemId}">
                                    <div class="problem-header">
                                        <strong>${q.title}</strong>
                                        <div class="problem-status-wrapper">
                                            <select class="problem-status-select" data-problem-id="${problemId}">
                                                <option value="unattempted" ${status === 'unattempted' ? 'selected' : ''}>Unattempted</option>
                                                <option value="attempted" ${status === 'attempted' ? 'selected' : ''}>Attempted</option>
                                                <option value="revisit" ${status === 'revisit' ? 'selected' : ''}>Need to Revisit</option>
                                                <option value="solved" ${status === 'solved' ? 'selected' : ''}>Solved</option>
                                            </select>
                                            <span class="status-indicator status-${status}"></span>
                                        </div>
                                    </div>
                                    <p><em>Hint:</em> ${q.hint}</p>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            `;
        }
        
        // Format paragraphs to retain line breaks
        const formatParagraphs = (text) => {
            if (!text) return '';
            return text.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('');
        };
        
        const content = {
            title: `Day ${topicItem.dayNumber}: ${topicItem.topic}`,
            content: `
                <div class="topic-header">
                    <span class="topic-meta">Phase ${topicItem.phase} &bull; Day ${topicItem.dayNumber}</span>
                    <h1>${topicItem.topic}</h1>
                </div>
                
                <div class="topic-content">
                    <h2>The Concept</h2>
                    ${formatParagraphs(topicItem.conceptExplanation)}
                    
                    <details class="callout big-o-callout drop-down-callout">
                        <summary class="dropdown-summary">
                            <h2>Big O Efficiency</h2>
                            <span class="dropdown-icon">▼</span>
                        </summary>
                        <div class="dropdown-content">
                            ${formatParagraphs(topicItem.bigOExplanation)}
                        </div>
                    </details>
                    
                    ${practiceQuestionsHtml}
                </div>
                
                <div class="topic-actions">
                    <button class="mark-complete-btn ${StateEngine.isTopicComplete(topicItem.dayNumber) ? 'completed' : ''}" data-day="${topicItem.dayNumber}">
                        ${StateEngine.isTopicComplete(topicItem.dayNumber) ? 'Completed ✅' : 'Mark as Complete'}
                    </button>
                </div>
            `
        };
        
        this.renderContent(content);
        this.attachTopicEventListeners(topicItem.dayNumber);
    },

    attachTopicEventListeners(dayNumber) {
        // Complete Topic Button
        const completeBtn = document.querySelector('.mark-complete-btn');
        if (completeBtn) {
            completeBtn.addEventListener('click', (e) => {
                const isCurrentlyComplete = StateEngine.isTopicComplete(dayNumber);
                StateEngine.setTopicComplete(dayNumber, !isCurrentlyComplete);
                
                // Refresh UI
                this.buildNavigation();
                
                // Re-render current topic to update button state
                const hashSlug = window.location.hash.replace('#/', '');
                const topicItem = this.curriculumData.find(item => this.slugify(item.topic) === hashSlug);
                if (topicItem) this.renderDynamicContent(topicItem);
            });
        }

        // Problem Status Dropdowns
        const statusSelects = document.querySelectorAll('.problem-status-select');
        statusSelects.forEach(select => {
            select.addEventListener('change', (e) => {
                const problemId = e.target.getAttribute('data-problem-id');
                const newStatus = e.target.value;
                StateEngine.setProblemStatus(problemId, newStatus);
                
                // Update the visual indicator
                const indicator = e.target.nextElementSibling;
                if (indicator) {
                    indicator.className = `status-indicator status-${newStatus}`;
                }
            });
        });
    },

    renderContent(topic) {
        const contentArea = document.getElementById('content');
        if (contentArea) {
            // Remove animation class to reset
            contentArea.classList.remove('fade-in');
            
            // Force a reflow to restart animation
            void contentArea.offsetWidth;
            
            contentArea.innerHTML = topic.content;
            document.title = `${topic.title} | DSA Mastery`;
            
            // Add animation class back
            contentArea.classList.add('fade-in');
            
            // Smooth scroll to top on navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    updateActiveLink(hash) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
};

// Start the app
App.init();
