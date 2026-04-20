import type { Product } from '@/types/product';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80';

export function getProductImage(product: Pick<Product, 'imageUrl' | 'images'>) {
  return product.imageUrl ?? product.images?.[0] ?? FALLBACK_IMAGE;
}

export function getProductGallery(product: Pick<Product, 'imageUrl' | 'images'>) {
  const gallery = product.images?.length
    ? product.images
    : product.imageUrl
      ? [product.imageUrl]
      : [];
  return gallery.length ? gallery : [FALLBACK_IMAGE];
}
