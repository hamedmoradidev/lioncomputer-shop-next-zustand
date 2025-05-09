import supabase from '../../../../lib/supabase'
import ProductCard from '@/components/product/ProductCard'
async function getCategoryProducts(slug) {
  console.log(`slug is ${slug}`)
  const { data, error } = await supabase
    .from('Lioncomputer')
    .select('*')
    .eq('category', slug)

  if (error) {
    console.error(error)
    return []
  }
  console.log(data)
  return data
}
export default async function CategoryPage({ params }) {
  const { slug } = params 
  const products = await getCategoryProducts(slug)
  return (
    <div className="container mx-auto p-6 my-20 min-h-[500px]">
      <h1 className="text-2xl font-bold mb-6 capitalize">دسته بندی {slug.toUpperCase()}</h1>

      {products.length === 0 ? (
        <p className="text-gray-600">هیچ محصولی در این دسته موجود نیست.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
