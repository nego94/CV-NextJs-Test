import Link from 'next/link';
import { projects } from '@/lib/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — Abetnego Kristiawan',
};

export default function PortfolioPage() {
  return (
    <div className="page-sm">
      <div className="container">

        <h1 style={{ marginBottom: '12px' }}>Portfolio</h1>
        <p style={{ marginBottom: '48px', color: 'var(--text-muted)' }}>
          A selection of websites I&apos;ve designed and developed.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="project-card"
            >
              <div className="project-card-info">
                <span className="badge" style={{ marginBottom: '10px' }}>
                  {project.category}
                </span>
                <p className="project-card-title">{project.title}</p>
                <p className="project-card-desc">{project.shortDesc}</p>
              </div>
              <span className="project-card-arrow">→</span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
