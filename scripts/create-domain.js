#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const domainName = process.argv[2];

if (!domainName) {
  console.error('\x1b[31mError: Please specify a domain name.\x1b[0m');
  console.log('Usage: npm run aura:create-domain <domain-name>');
  console.log('Example: npm run aura:create-domain order');
  process.exit(1);
}

const sanitizedDomain = domainName.toLowerCase().trim();
const rootDir = path.resolve(__dirname, '..');

const frontendDomainPath = path.join(rootDir, 'apps', 'frontend', 'src', 'domains', sanitizedDomain);
const backendDomainPath = path.join(rootDir, 'apps', 'backend', 'src', 'domains', sanitizedDomain);

const subDirs = [
  'domain/entities',
  'domain/value-objects',
  'domain/services',
  'application/use-cases',
  'application/dto',
  'application/presenters',
  'infrastructure/api',
  'infrastructure/repositories',
  'infrastructure/cache',
  'presentation/components',
  'presentation/hooks',
  'presentation/pages'
];

console.log(`\x1b[36mCreating Clean Architecture domain: "${sanitizedDomain}"...\x1b[0m\n`);

function createDirectoryStructure(basePath, isBackend = false) {
  if (fs.existsSync(basePath)) {
    console.log(`\x1b[33mWarning: Directory already exists at ${basePath}\x1b[0m`);
    return;
  }

  subDirs.forEach(subDir => {
    const fullPath = path.join(basePath, subDir);
    fs.mkdirSync(fullPath, { recursive: true });
  });

  const indexContent = `// Public Barrel Export for ${sanitizedDomain} domain\n`;
  fs.writeFileSync(path.join(basePath, 'index.ts'), indexContent);

  if (isBackend) {
    const moduleName = sanitizedDomain.charAt(0).toUpperCase() + sanitizedDomain.slice(1) + 'Module';
    const moduleContent = `export class ${moduleName} {}\n`;
    fs.writeFileSync(path.join(basePath, `${sanitizedDomain}.module.ts`), moduleContent);
  }

  console.log(`\x1b[32mSuccessfully created: ${basePath}\x1b[0m`);
}

// Create Frontend Domain Structure
createDirectoryStructure(frontendDomainPath, false);

// Create Backend Domain Structure
createDirectoryStructure(backendDomainPath, true);

console.log('\n\x1b[32mDomain creation complete! Happy coding with AURA Framework.\x1b[0m');
