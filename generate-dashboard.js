const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');
const { execSync } = require('child_process');

// Configuration
const CONTENT_DIR = 'content'; // Adjust if your content is elsewhere
const OUTPUT_FILE = 'dashboard.html';

// Get last modified date from Git
function getGitLastModified(filepath) {
  try {
    const result = execSync(`git log -1 --format="%ai" -- "${filepath}"`, { encoding: 'utf8' });
    return result.trim() ? new Date(result.trim()) : null;
  } catch (error) {
    return null;
  }
}

// Find all markdown files
const files = glob.sync(`${CONTENT_DIR}/**/*.md`, {
  ignore: ['**/node_modules/**', '**/_index.md']
});

// Storage for our data
const stats = {
  tags: {},
  categories: {},
  published: [],
  scheduled: [],
  drafts: [],
  noLinks: [],
  noDescription: [],
  oldestPosts: []
};

const now = new Date();

// Process each file
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const { data, content: body } = matter(content);
  
  const post = {
    title: data.title || path.basename(file, '.md'),
    file: file,
    date: data.date ? new Date(data.date) : null
  };

  // Collect tags
  if (data.tags) {
    const tags = Array.isArray(data.tags) ? data.tags : [data.tags];
    tags.forEach(tag => {
      stats.tags[tag] = (stats.tags[tag] || 0) + 1;
    });
  }

  // Collect categories
  if (data.categories) {
    const cats = Array.isArray(data.categories) ? data.categories : [data.categories];
    cats.forEach(cat => {
      stats.categories[cat] = (stats.categories[cat] || 0) + 1;
    });
  }

  // Classify posts
  if (data.draft === true) {
    stats.drafts.push(post);
  } else if (post.date && post.date > now) {
    stats.scheduled.push(post);
  } else {
    stats.published.push(post);
  }

  // Check for internal links
  const internalLinks = body.match(/\[([^\]]+)\]\((\.\.?\/|\/)[^)]*\)/g);
  if (!internalLinks || internalLinks.length === 0) {
    stats.noLinks.push(post);
  }

  // Check for missing description
  if (!data.description || data.description.trim() === '') {
    stats.noDescription.push(post);
  }

  // Get Git last modified date
  post.lastModified = getGitLastModified(file);
});

// Sort by last modified and get 10 oldest
stats.oldestPosts = stats.published
  .filter(p => p.lastModified)
  .sort((a, b) => a.lastModified - b.lastModified)
  .slice(0, 10);

// Generate HTML
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hugo Site Dashboard</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
      line-height: 1.6;
      color: #333;
    }
    h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
    h2 { color: #34495e; margin-top: 30px; }
    .stat-box { 
      background: #f8f9fa; 
      padding: 15px; 
      margin: 10px 0; 
      border-radius: 5px;
      border-left: 4px solid #3498db;
    }
    .count { font-size: 2em; font-weight: bold; color: #3498db; }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; margin: 5px 0; background: #fff; border-left: 3px solid #95a5a6; }
    .tag-list { display: flex; flex-wrap: wrap; gap: 10px; }
    .tag { background: #ecf0f1; padding: 5px 12px; border-radius: 15px; }
    .file-path { font-size: 0.85em; color: #7f8c8d; font-family: monospace; }
  </style>
</head>
<body>
  <h1>📊 Hugo Site Dashboard</h1>
  <p>Generated: ${new Date().toLocaleString()}</p>

  <div class="stat-box">
    <h2>Published Posts</h2>
    <div class="count">${stats.published.length}</div>
  </div>

  <h2>Tags (${Object.keys(stats.tags).length} total)</h2>
  <div class="tag-list">
    ${Object.entries(stats.tags)
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => `<span class="tag">${tag} (${count})</span>`)
      .join('')}
  </div>

  <h2>Categories (${Object.keys(stats.categories).length} total)</h2>
  <div class="tag-list">
    ${Object.entries(stats.categories)
      .sort((a, b) => b[1] - a[1])
      .map(([cat, count]) => `<span class="tag">${cat} (${count})</span>`)
      .join('')}
  </div>

  <h2>Scheduled Posts (${stats.scheduled.length})</h2>
  <ul>
    ${stats.scheduled.length === 0 
      ? '<li>No scheduled posts</li>' 
      : stats.scheduled.map(p => `
          <li>
            <strong>${p.title}</strong><br>
            <span class="file-path">${p.file}</span><br>
            Scheduled for: ${p.date.toLocaleDateString()}
          </li>
        `).join('')}
  </ul>

  <h2>Drafts (${stats.drafts.length})</h2>
  <ul>
    ${stats.drafts.length === 0 
      ? '<li>No drafts</li>' 
      : stats.drafts.map(p => `
          <li>
            <strong>${p.title}</strong><br>
            <span class="file-path">${p.file}</span>
          </li>
        `).join('')}
  </ul>

  <h2>Posts Without Internal Links (${stats.noLinks.length})</h2>
  <ul>
    ${stats.noLinks.length === 0 
      ? '<li>All posts have internal links!</li>' 
      : stats.noLinks.map(p => `
          <li>
            <strong>${p.title}</strong><br>
            <span class="file-path">${p.file}</span>
          </li>
        `).join('')}
  </ul>

  <h2>Posts Without Descriptions (${stats.noDescription.length})</h2>
  <ul>
    ${stats.noDescription.length === 0 
      ? '<li>All posts have descriptions!</li>' 
      : stats.noDescription.map(p => `
          <li>
            <strong>${p.title}</strong><br>
            <span class="file-path">${p.file}</span>
          </li>
        `).join('')}
  </ul>

  <h2>10 Oldest Posts (by last Git commit)</h2>
  <ul>
    ${stats.oldestPosts.length === 0 
      ? '<li>No Git history found</li>' 
      : stats.oldestPosts.map(p => `
          <li>
            <strong>${p.title}</strong><br>
            <span class="file-path">${p.file}</span><br>
            Last modified: ${p.lastModified.toLocaleDateString()}
          </li>
        `).join('')}
  </ul>
</body>
</html>
`;

// Write the HTML file
fs.writeFileSync(OUTPUT_FILE, html);
console.log(`✅ Dashboard generated: ${OUTPUT_FILE}`);
console.log(`📊 Stats: ${stats.published.length} published, ${stats.scheduled.length} scheduled, ${stats.drafts.length} drafts`);
// Open the dashboard in default browser (macOS)
execSync(`open ${OUTPUT_FILE}`);