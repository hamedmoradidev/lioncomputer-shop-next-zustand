import supabase from '../../../../lib/supabase'
import ClientWrapper from './ClientWrapper'
async function getProduct(slug) {
  const { data, error } = await supabase
    .from('Lioncomputer')
    .select('*')
    .eq('slug', slug)

  if (error) {
    console.error(error)
    return []
  }
  return data
}
export default async function ProductPage({ params }) {
  const { slug } = params
  const product = await getProduct(slug)
  return <ClientWrapper product={product[0]} />
}
