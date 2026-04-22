/**
 * DSA Mastery Platform - Core Application Logic
 * Foundation Phase: Hash-based routing and UI management
 */

const App = {
    // Basic route definitions for the foundation phase
    routes: {
        '#/introduction': {
            title: 'Welcome to DSA Mastery',
            content: `
                <h1>Welcome to DSA Mastery</h1>
                <p>This platform is designed to help you master Data Structures and Algorithms through a pedagogical foundation rooted in common sense.</p>
                <p>We avoid jargon where possible and focus on the <em>why</em> before the <em>how</em>.</p>
                <div class="callout">
                    <p><strong>Common Sense Paradigm:</strong> Algorithms are just sets of instructions for solving problems. Thinking about them should feel as natural as following a recipe.</p>
                </div>
            `
        },
        '#/big-o-notation': {
            title: 'Big O Notation',
            content: `
                <h1>Big O: Measuring Efficiency</h1>
                <p>Big O notation is the language we use to talk about how long an algorithm takes to run (time complexity) or how much memory it uses (space complexity).</p>
                <p>It helps us compare different approaches to the same problem without worrying about the specific speed of a computer.</p>
            `
        }
    },

    init() {
        console.log('DSA Mastery Initializing...');
        
        // Listen for route changes
        window.addEventListener('hashchange', () => this.handleRouting());
        window.addEventListener('DOMContentLoaded', () => this.handleRouting());
        
        // Initial setup
        this.handleRouting();
    },

    handleRouting() {
        const hash = window.location.hash || '#/introduction';
        const content = this.routes[hash] || {
            title: 'Topic Under Construction',
            content: `<h1>Topic Coming Soon</h1><p>We are currently drafting the pedagogical content for this topic. Check back soon!</p>`
        };

        this.renderContent(content);
        this.updateActiveLink(hash);
    },

    renderContent(topic) {
        const contentArea = document.getElementById('content');
        if (contentArea) {
            contentArea.innerHTML = topic.content;
            document.title = `${topic.title} | DSA Mastery`;
            
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
