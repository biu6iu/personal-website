import type { Collection } from '../data/collections.ts';

export function renderCollectionCards(collections: Collection[]): string {
  return collections
    .map(
      (c) => `                <a href="collections/${c.path}">
                    <button>
                        <img src="${c.coverImage}" alt="${c.title}">
                    </button>
                </a>`,
    )
    .join('\n');
}
