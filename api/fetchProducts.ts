import { supabase } from '@/lib/supabase/supabaseClient';

export async function fetchProducts() {
  const { data, error } = await supabase.from('patekphilippe').select(`
      *
    `);

  if (error) {
    console.error('데이터 조회 실패:', error);
    return [];
  }

  return data;
}
