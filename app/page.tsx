import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abetnego Kristiawan — WordPress & Web Developer',
};

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">

        <section style={{ paddingBottom: '64px' }}>
          <span className="badge" style={{ marginBottom: '24px' }}>
            Available for work
          </span>
          <h1 style={{ marginBottom: '20px' }}>
            Abetnego<br />
            Kristiawan<br />
            <span style={{ color: 'var(--orange)' }}>Takaredase</span>
          </h1>
          <p style={{ fontSize: '16px', maxWidth: '480px', marginBottom: '36px' }}>
            WordPress developer with 5+ years building custom themes, plugins, and
            performant web experiences. Currently expanding into Vue.js and React.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/portfolio" className="btn btn-primary">
              View Portfolio →
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Me
            </Link>
          </div>
        </section>

        <hr className="divider" />

        <section>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Based in Bali, Indonesia. Working with WordPress, PHP, JavaScript, and
            modern front-end frameworks to deliver clean, maintainable code and
            user-friendly design.
          </p>
          <Link href="/about" className="section-link">
            Read more about me →
          </Link>
        </section>

      </div>
    </div>
  );
}
