import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/lib/projects';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Abetnego Kristiawan`,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  const p = project!;

  return (
    <div className="page-sm">
      <div className="container">

        <Link href="/portfolio" className="back-link">
          ← Back to Portfolio
        </Link>

        <div className="project-header">
          <span className="badge" style={{ marginBottom: '16px' }}>
            {p.category}
          </span>
          <h1 style={{ marginBottom: '0' }}>{p.title}</h1>

          <div className="project-meta">
            <div className="project-meta-item">
              <span className="project-meta-label">Client</span>
              <span className="project-meta-value">{p.client}</span>
            </div>
            <div className="project-meta-item">
              <span className="project-meta-label">Date</span>
              <span className="project-meta-value">{p.date}</span>
            </div>
            <div className="project-meta-item">
              <span className="project-meta-label">Website</span>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-meta-value"
                style={{ color: 'var(--orange)' }}
              >
                {p.url.replace('https://', '').replace('http://', '')}
              </a>
            </div>
          </div>
        </div>

        <div className="project-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.coverImage}
            alt={`Screenshot of ${p.title}`}
            className="project-image"
          />
        </div>

        <div className="project-body">
          {p.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div style={{ marginTop: '40px' }}>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Website ↗
          </a>
        </div>

      </div>
    </div>
  );
}
