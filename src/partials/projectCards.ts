import type { Project, ProjectLink } from '../data/projects';

function renderLink(link: ProjectLink): string {
  return `                            <p> • ${link.label}
                                <a href="${link.href}" class="section-link">${link.text}<span class="arrow">↗</span></a>
                            </p>`;
}

export function renderProjectCards(projects: Project[]): string {
  return projects
    .map((p) => {
      const bullets = p.bullets.map((b) => `                            <p> • ${b}</p>`).join('\n');
      const links = p.links.map(renderLink).join('\n');
      return `                    <div class="project-item">
                        <p class="date">${p.date}</p>
                        <div class="project-info">
                            <h3>${p.title}</h3>
                            <p>${p.summary}</p>
${bullets}
${links}
                        </div>
                    </div>`;
    })
    .join('\n');
}
