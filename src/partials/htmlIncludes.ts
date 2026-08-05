import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';
import { renderNav, type NavPaths } from './nav';
import { THEME_INIT_SCRIPT } from './theme-init';

const srcDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function navPathsForDepth(depth: number): NavPaths {
  if (depth === 0) return { toRoot: '', toPages: 'pages/' };
  if (depth === 1) return { toRoot: '../', toPages: '' };
  return { toRoot: '../../', toPages: '../../pages/' };
}

export function htmlIncludes(): Plugin {
  return {
    name: 'html-includes',
    transformIndexHtml(html, ctx) {
      const relPath = path.relative(srcDir, ctx.filename);
      const depth = relPath.split(path.sep).length - 1;
      const navPaths = navPathsForDepth(depth);

      return html
        .replace('<!--@theme-init-->', THEME_INIT_SCRIPT)
        .replace('<!--@nav-->', renderNav(navPaths));
    },
  };
}
