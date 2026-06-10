import { Metadata } from 'next';

export function constructMetadata({
  title = 'DriverWise - Clear, plain-English driver guides',
  description = 'Your trusted resource for understanding printer drivers, troubleshooting issues, and finding clear answers without technical complexity.',
  image = '/og-image.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      siteName: 'DriverWise',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@driverwise',
    },
    metadataBase: new URL('https://driverwise.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
