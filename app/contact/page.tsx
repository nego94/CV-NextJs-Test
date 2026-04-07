import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Abetnego Kristiawan',
};

export default function ContactPage() {
  return (
    <div className="page-sm">
      <div className="container">

        <h1 style={{ marginBottom: '12px' }}>Contact</h1>
        <p style={{ marginBottom: '48px', color: 'var(--text-muted)' }}>
          Feel free to reach out for projects, collaborations, or just to say hi.
        </p>

        <div>

          <div className="contact-line">
            <span className="contact-label">Location</span>
            <span className="contact-value">Bali, Indonesia</span>
          </div>

          <div className="contact-line">
            <span className="contact-label">Phone</span>
            <span className="contact-value">
              <a href="tel:+6285156530341">(+62) 8515 – 6530 – 341</a>
            </span>
          </div>

          <div className="contact-line">
            <span className="contact-label">Email</span>
            <span className="contact-value">
              <a href="mailto:abetnego.kristiawan@gmail.com">
                abetnego.kristiawan@gmail.com
              </a>
            </span>
          </div>

          <div className="contact-line">
            <span className="contact-label">Website</span>
            <span className="contact-value">
              <a
                href="https://my.creativorium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                my.creativorium.com
              </a>
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
