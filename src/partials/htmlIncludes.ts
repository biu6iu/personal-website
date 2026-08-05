import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Plugin } from 'vite';
import { renderNav, type NavPaths } from './nav.ts';
import { THEME_INIT_SCRIPT } from './theme-init.ts';
import { renderCollectionCards } from './collectionCards.ts';
import { COLLECTIONS } from '../data/collections.ts';
import { renderProjectCards } from './projectCards.ts';
import { PROJECTS } from '../data/projects.ts';
import { renderTimelineEntries } from './timeline.ts';
import { EDUCATION, EXPERIENCE } from '../data/timeline.ts';
import { renderGallery } from './gallery.ts';
import { GALLERIES } from '../data/galleries.ts';

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

      let result = html
        .replace('<!--@theme-init-->', THEME_INIT_SCRIPT)
        .replace('<!--@nav-->', renderNav(navPaths))
        .replace('<!--@collection-cards-->', renderCollectionCards(COLLECTIONS))
        .replace('<!--@project-cards-->', renderProjectCards(PROJECTS))
        .replace('<!--@education-->', renderTimelineEntries(EDUCATION))
        .replace('<!--@experience-->', renderTimelineEntries(EXPERIENCE));

      const slug = path.basename(ctx.filename, '.html');
      const gallery = GALLERIES.find((g) => g.slug === slug);
      if (gallery) {
        result = result.replace('<!--@gallery-->', renderGallery(gallery));
      }

      return result;
    },
  };
}
