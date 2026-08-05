import type { TimelineEntry, TimelineLine } from '../data/timeline.ts';

function renderLine(line: TimelineLine): string {
  if ('text' in line) {
    return `                            <p>${line.text}</p>`;
  }
  const links = line.links
    .map((l) => `<a href="${l.href}" class="section-link">${l.text}<span class="arrow">↗</span></a>`)
    .join(', ');
  return `                            <p>${line.prefix}
                                ${links}
                            </p>`;
}

export function renderTimelineEntries(entries: TimelineEntry[]): string {
  return entries
    .map(
      (e) => `                    <div class="education-item">
                        <p class="date">${e.date}</p>
                        <div class="education-info">
                            <h3>${e.title}</h3>
${e.lines.map(renderLine).join('\n')}
                        </div>
                    </div>`,
    )
    .join('\n');
}
