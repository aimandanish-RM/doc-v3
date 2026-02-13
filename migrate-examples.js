const fs = require('fs');
const path = require('path');
const {glob} = require('glob');

const DOCS_PATH = path.join(__dirname, 'docs');

function extractCodeBlock(content, label) {
  const regex = new RegExp(
    `> ${label}\\s*\\n\\s*\\n\`\`\`[a-zA-Z]*\\n([\\s\\S]*?)\`\`\``,
    'm'
  );
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');

  // Check frontmatter
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return;

  const frontmatter = frontmatterMatch[1];

  // Only process files with api:
  if (!frontmatter.includes('api:')) return;

  // Skip if examples already exist
  if (frontmatter.includes('examples:')) return;

  const request = extractCodeBlock(raw, 'Example Request');
  const body = extractCodeBlock(raw, 'Example Body Request');
  const response = extractCodeBlock(raw, 'Example Response');

  const examplesBlock = `
examples:
  request: |
${indent(request || 'There is no example request provided.')}
  body: |
${indent(body || 'There is no example body request.')}
  response: |
${indent(response || 'There is no example response provided.')}
`;

  const newFrontmatter =
    `---\n${frontmatter.trim()}\n${examplesBlock}---`;

  const updated = raw.replace(/^---\n[\s\S]*?\n---/, newFrontmatter);

  fs.writeFileSync(filePath, updated, 'utf8');

  console.log(`Updated: ${filePath}`);
}


function indent(text) {
  return text
    .split('\n')
    .map(line => `    ${line}`)
    .join('\n');
}

(async () => {
  const files = await glob(`${DOCS_PATH}/**/*.{md,mdx}`);
  files.forEach(processFile);
})();

