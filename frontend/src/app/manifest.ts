import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Quantum Intelligence Club - VIT Bhopal',
    short_name: 'QIC VITB',
    description: 'Official portal of the Quantum Intelligence Club at VIT Bhopal University. Exploring Quantum Computing, AI, and cutting-edge tech.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0d12',
    theme_color: '#0a0a0f',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
