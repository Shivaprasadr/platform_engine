import React from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from '../theme'
import { parseFont } from '../utils/parseFont'

const ContactPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ background: theme.colors.surface, borderRadius: '2rem', boxShadow: theme.spacing.cardShadow, padding: '3rem 2rem' }}>
        <h1 style={{
          ...parseFont(theme.font.headline),
          color: theme.colors.textPrimary,
          fontSize: '2.75rem',
          fontWeight: 900,
          marginBottom: '1rem',
          textAlign: 'left',
          lineHeight: 1.08,
          maxWidth: '900px',
          whiteSpace: 'normal',
          overflowWrap: 'break-word'
  }}>{t('contact.title')}</h1>
        <p style={{
          color: theme.colors.textSecondary,
          ...parseFont(theme.font.subheadline),
          fontSize: '1.25rem',
          maxWidth: '700px',
          margin: '0 0 2rem 0',
          opacity: 0.85,
          lineHeight: 1.35,
          textAlign: 'left',
          whiteSpace: 'normal',
          overflowWrap: 'break-word'
  }}>{t('contact.subtitle')}</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Contact Form */}
          <div>
            <h2 style={{
              ...parseFont(theme.font.cardTitle),
              color: theme.colors.textPrimary,
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              textAlign: 'left'
            }}>{t('contact.form.title')}</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary, fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>{t('contact.form.name')}</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    ...parseFont(theme.font.cardText),
                    background: theme.colors.background,
                    color: theme.colors.textPrimary,
                    marginBottom: '0.5rem'
                  }}
                  placeholder={t('contact.form.placeholder.name')}
                />
              </div>
              <div>
                <label style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary, fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>{t('contact.form.email')}</label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    ...parseFont(theme.font.cardText),
                    background: theme.colors.background,
                    color: theme.colors.textPrimary,
                    marginBottom: '0.5rem'
                  }}
                  placeholder={t('contact.form.placeholder.email')}
                />
              </div>
              <div>
                <label style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary, fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>{t('contact.form.subject')}</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    ...parseFont(theme.font.cardText),
                    background: theme.colors.background,
                    color: theme.colors.textPrimary,
                    marginBottom: '0.5rem'
                  }}
                  placeholder={t('contact.form.placeholder.subject')}
                />
              </div>
              <div>
                <label style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary, fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>{t('contact.form.message')}</label>
                <textarea
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    ...parseFont(theme.font.cardText),
                    background: theme.colors.background,
                    color: theme.colors.textPrimary,
                    marginBottom: '0.5rem',
                    resize: 'vertical'
                  }}
                  placeholder={t('contact.form.placeholder.message')}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: theme.colors.buttonPrimary,
                  color: '#fff',
                  padding: '1rem 0',
                  borderRadius: '0.75rem',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  border: 'none',
                  boxShadow: theme.spacing.cardShadow,
                  transition: 'background 0.3s',
                  marginTop: '0.5rem',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => e.currentTarget.style.background = theme.colors.buttonPrimary}
                onMouseLeave={e => e.currentTarget.style.background = theme.colors.buttonPrimary}
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 style={{
              ...parseFont(theme.font.cardTitle),
              color: theme.colors.textPrimary,
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              textAlign: 'left'
            }}>{t('contact.info.title')}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '56px', height: '56px', background: theme.colors.accentLight, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '28px', height: '28px', color: theme.colors.accentDark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ ...parseFont(theme.font.cardTitle), color: theme.colors.textPrimary, fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{t('contact.info.emailTitle')}</h3>
                  <p style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary }}>{t('contact.info.email')}</p>
                </div>
              </div>
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '56px', height: '56px', background: theme.colors.accentLight, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '28px', height: '28px', color: theme.colors.accentDark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ ...parseFont(theme.font.cardTitle), color: theme.colors.textPrimary, fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{t('contact.info.phoneTitle')}</h3>
                  <p style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary }}>{t('contact.info.phone')}</p>
                </div>
              </div>
              {/* Office */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '56px', height: '56px', background: theme.colors.accentLight, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '28px', height: '28px', color: theme.colors.accentDark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ ...parseFont(theme.font.cardTitle), color: theme.colors.textPrimary, fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{t('contact.info.officeTitle')}</h3>
                  <p style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary }}>{t('contact.info.office')}</p>
                </div>
              </div>
              {/* Business Hours */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '56px', height: '56px', background: theme.colors.accentLight, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '28px', height: '28px', color: theme.colors.accentDark }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ ...parseFont(theme.font.cardTitle), color: theme.colors.textPrimary, fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{t('contact.info.hoursTitle')}</h3>
                  <p style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary }}>{t('contact.info.hours')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
