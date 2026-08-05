export interface NavPaths {
  toRoot: string;
  toPages: string;
}

const NAV_ITEMS = [
  { label: 'ABOUT', file: 'about.html' },
  { label: 'CONTACT', file: 'contact.html' },
  { label: 'PROJECTS', file: 'projects.html' },
  { label: 'PHOTOGRAPHY', file: 'photography.html' },
];

export function renderNav({ toRoot, toPages }: NavPaths): string {
  const links = NAV_ITEMS
    .map((item) => `                    <li><a href="${toPages}${item.file}">${item.label}</a></li>`)
    .join('\n');

  return `<nav class="sidebar">
            <h1 style="margin-top:20px;">
                <a href="${toRoot}index.html">STEVEN LU</a>
            </h1>
            <div class="nav-links">
                <ul>
${links}
                    <li><button id="theme-toggle">Light Mode</button></li>
                </ul>
            </div>
        </nav>`;
}
