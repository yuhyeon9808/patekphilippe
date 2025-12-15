import { fetchProducts } from '@/api/fetchProducts';
import { useQuery } from '@tanstack/react-query';

export function useFetchProducts() {
  return useQuery({
    queryKey: ['product'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
}
