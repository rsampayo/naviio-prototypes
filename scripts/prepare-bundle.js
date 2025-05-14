const fs = require('fs-extra');
const path = require('path');

/**
 * Script to prepare the bundle for StaticDeploy deployment
 * This copies all the necessary files to the dist directory
 */

const srcDir = path.resolve(__dirname, '..');
const distDir = path.resolve(__dirname, '../dist');

async function prepareBundle() {
  console.log('Preparing bundle for StaticDeploy...');
  
  // Clean dist directory
  await fs.emptyDir(distDir);
  
  // Copy all necessary files to dist
  console.log('Copying files to dist directory...');
  
  // Copy index.html and other root files
  await fs.copy(path.join(srcDir, 'index.html'), path.join(distDir, 'index.html'));
  await fs.copy(path.join(srcDir, 'README.md'), path.join(distDir, 'README.md'));
  
  // Copy prototypes directory
  await fs.copy(path.join(srcDir, 'prototypes'), path.join(distDir, 'prototypes'));
  
  // Create configuration file that will be used by StaticDeploy
  // This file will be injected into the deployed static files as a global variable
  console.log('Creating configuration file for runtime...');
  const configContent = 'window.APP_CONFIG = %%APP_CONFIG%%;';
  await fs.writeFile(path.join(distDir, 'config.js'), configContent);
  
  // Add a link to the config.js file in the head section of HTML files
  console.log('Adding config script to HTML files...');
  const updateHtmlFiles = async (dir) => {
    const files = await fs.readdir(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      
      if (stat.isDirectory()) {
        await updateHtmlFiles(filePath);
      } else if (file.endsWith('.html')) {
        let content = await fs.readFile(filePath, 'utf8');
        
        // Add config.js before the first script tag or before </head>
        if (!content.includes('config.js')) {
          content = content.replace(
            /<\/head>/i,
            '<script src="/config.js"></script></head>'
          );
          await fs.writeFile(filePath, content);
        }
      }
    }
  };
  
  await updateHtmlFiles(distDir);
  
  console.log('Bundle preparation complete!');
}

prepareBundle().catch(err => {
  console.error('Error preparing bundle:', err);
  process.exit(1);
}); 