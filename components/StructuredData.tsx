export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iDisplay',
    url: 'https://idisplay.com.tr',
    logo: 'https://idisplay.com.tr/logo.png',
    description: 'Profesyonel dijital ekran çözümleri, LED ekranlar, interaktif kiosk sistemleri ve dijital tabela hizmetleri.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@idisplay.com.tr',
      availableLanguage: 'Turkish',
    },
    sameAs: [
      // Sosyal medya hesapları eklenebilir
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
