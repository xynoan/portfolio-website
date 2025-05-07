import type { Metadata } from 'next';

// Template function to create consistent page metadata
export function createMetadata(
  title: string,
  description?: string
): Metadata {
  const siteTitle = title ? `${title} | xynoan portfolio ✨` : 'xynoan portfolio ✨';
  
  return {
    title: siteTitle,
    description: description || 'Portfolio website of xynoan that includes my story, imaginations, and contact.',
  };
} 