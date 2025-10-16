#!/usr/bin/env node

/**
 * Favicon Prevention Script
 * Scans the project for favicon files and references to prevent them from being included
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files and directories to ignore during scan
const IGNORE_PATTERNS = [
  'node_modules',
  '.git',
  'dist',
  'build',
  '.next',
  '.nuxt',
  '.vscode',
  '.idea',
  'coverage',
  '.nyc_output',
  '.husky',
  'scripts',
  'FAVICON_PREVENTION.md'
];

// Favicon file patterns to detect
const FAVICON_PATTERNS = [
  /favicon\.ico$/i,
  /favicon\.png$/i,
  /favicon\.svg$/i,
  /apple-touch-icon\.png$/i,
  /apple-touch-icon-precomposed\.png$/i,
  /manifest\.json$/i,
  /site\.webmanifest$/i
];

// Favicon references in code to detect
const FAVICON_REFERENCES = [
  /favicon\.ico/gi,
  /favicon\.png/gi,
  /favicon\.svg/gi,
  /apple-touch-icon/gi,
  /manifest\.json/gi,
  /site\.webmanifest/gi,
  /rel=["']icon["']/gi,
  /rel=["']shortcut icon["']/gi,
  /rel=["']apple-touch-icon["']/gi
];

let foundIssues = false;

function shouldIgnoreFile(filePath) {
  return IGNORE_PATTERNS.some(pattern => 
    filePath.includes(pattern) || 
    filePath.includes(`/${pattern}/`) ||
    filePath.includes(`\\${pattern}\\`)
  );
}

function scanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (shouldIgnoreFile(fullPath)) {
        continue;
      }
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (stat.isFile()) {
        checkFile(fullPath);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not scan directory ${dirPath}:`, error.message);
  }
}

function checkFile(filePath) {
  const fileName = path.basename(filePath);
  
  // Check if file is a favicon file
  if (FAVICON_PATTERNS.some(pattern => pattern.test(fileName))) {
    console.error(`❌ FAVICON FILE DETECTED: ${filePath}`);
    foundIssues = true;
  }
  
  // Check file content for favicon references (only for text files)
  if (isTextFile(filePath)) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      checkContentForFaviconReferences(filePath, content);
    } catch (error) {
      // Skip binary files or files that can't be read as text
    }
  }
}

function isTextFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const textExtensions = ['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.scss', '.sass', '.less', '.json', '.md', '.txt', '.xml', '.svg'];
  return textExtensions.includes(ext) || ext === '';
}

function checkContentForFaviconReferences(filePath, content) {
  FAVICON_REFERENCES.forEach((pattern, index) => {
    if (pattern.test(content)) {
      console.error(`❌ FAVICON REFERENCE DETECTED in ${filePath}`);
      console.error(`   Pattern: ${pattern}`);
      foundIssues = true;
    }
  });
}

function main() {
  console.log('🔍 Scanning project for favicon files and references...\n');
  
  const projectRoot = path.join(__dirname, '..');
  scanDirectory(projectRoot);
  
  if (foundIssues) {
    console.log('\n❌ BUILD FAILED: Favicon files or references detected!');
    console.log('Please remove all favicon files and references before building.');
    process.exit(1);
  } else {
    console.log('✅ No favicon files or references detected. Build can proceed.');
    process.exit(0);
  }
}

main();