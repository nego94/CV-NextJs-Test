import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Abetnego Kristiawan',
};

export default function AboutPage() {
  return (
    <div className="page-sm">
      <div className="container">

        <h1 style={{ marginBottom: '24px' }}>About</h1>

        <p style={{ marginBottom: '12px' }}>
          WordPress developer with 5+ years of experience in custom themes, plugins,
          and performance optimization. Currently expanding expertise in Vue.js and
          React to build modern, dynamic web applications.
        </p>
        <p style={{ marginBottom: '40px' }}>
          Passionate about clean, maintainable code and user-friendly design.
          Based in Bali, Indonesia.
        </p>

        <hr className="divider" />

        <section style={{ marginBottom: '40px' }}>
          <h2>Skills</h2>

          <div className="skill-group">
            <p className="skill-group-label">Primary</p>
            <div className="skill-tags">
              {['WordPress', 'PHP', 'JavaScript', 'Elementor', 'WooCommerce'].map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-group" style={{ marginTop: '16px' }}>
            <p className="skill-group-label">Expanding</p>
            <div className="skill-tags">
              {['Vue.js', 'React', 'Tailwind CSS'].map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-group" style={{ marginTop: '16px' }}>
            <p className="skill-group-label">Other</p>
            <div className="skill-tags">
              {['SEO', 'Performance Optimization', 'API Integration', 'Git'].map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section style={{ marginBottom: '40px' }}>
          <h2>Experience</h2>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <p className="experience-title">Web Developer</p>
                <p className="experience-company">Cular Creative Studio — Bali, Indonesia</p>
              </div>
              <span className="experience-date">Dec 2020 – Present</span>
            </div>
            <ul className="experience-list">
              <li>Developed and maintained WordPress and Shopify websites for various clients.</li>
              <li>Built custom themes and plugins to enhance website functionality.</li>
              <li>Implemented SEO best practices, boosting organic traffic.</li>
              <li>Created web UI/UX designs tailored to client needs.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <p className="experience-title">Web Administrator</p>
                <p className="experience-company">Wooden-ships [PT Infashion] — Bali, Indonesia</p>
              </div>
              <span className="experience-date">Aug 2018 – Aug 2020</span>
            </div>
            <ul className="experience-list">
              <li>Managed website maintenance, updates, and design including layouts and imagery.</li>
              <li>Oversaw marketing, SEO development, and email automation setup.</li>
              <li>Coordinated marketing schedules and ensured site functionality and security.</li>
            </ul>
          </div>
        </section>

        <hr className="divider" />

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/portfolio" className="section-link">
            View Portfolio →
          </Link>
          <Link href="/contact" className="section-link">
            Get in Touch →
          </Link>
        </div>

      </div>
    </div>
  );
}
