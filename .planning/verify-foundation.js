const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..');

const checks = [
    {
        name: 'Files Exist',
        fn: () => {
            const files = ['index.html', 'style.css', 'app.js'];
            return files.every(f => fs.existsSync(path.join(baseDir, f)));
        }
    },
    {
        name: 'index.html contains required elements',
        fn: () => {
            const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
            return html.includes('id="sidebar"') && 
                   html.includes('id="content"') && 
                   html.includes('Fraunces') &&
                   html.includes('style.css') &&
                   html.includes('app.js');
        }
    },
    {
        name: 'style.css contains design tokens',
        fn: () => {
            const css = fs.readFileSync(path.join(baseDir, 'style.css'), 'utf8');
            return css.includes('--font-display') && 
                   css.includes('--font-body') && 
                   css.includes('--accent');
        }
    },
    {
        name: 'app.js contains routing logic',
        fn: () => {
            const js = fs.readFileSync(path.join(baseDir, 'app.js'), 'utf8');
            return js.includes('hashchange') && 
                   js.includes('DOMContentLoaded') && 
                   js.includes('handleRouting');
        }
    }
];

console.log('--- Foundation Verification ---');
let allPassed = true;

checks.forEach(check => {
    try {
        const passed = check.fn();
        if (passed) {
            console.log(`[PASS] ${check.name}`);
        } else {
            console.log(`[FAIL] ${check.name}`);
            allPassed = false;
        }
    } catch (err) {
        console.log(`[ERROR] ${check.name}: ${err.message}`);
        allPassed = false;
    }
});

if (allPassed) {
    console.log('\n✅ All foundation checks passed.');
    process.exit(0);
} else {
    console.log('\n❌ Foundation verification failed.');
    process.exit(1);
}
