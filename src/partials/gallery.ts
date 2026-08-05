import type { Gallery } from '../data/galleries';

export function renderGallery(gallery: Gallery): string {
  const images = gallery.images
    .map((img) => `                <img src="${img.src}" alt="${img.alt}" loading="lazy">`)
    .join('\n');

  return `<h1 class="collection-title">${gallery.title}</h1>\n${images}`;
}
