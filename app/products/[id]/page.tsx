import { ProductDetail } from "@/components/product-detail";

async function getProduct(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products/${id}`)
    const data = await response.json()

    if (data.status === 'success') {
      return data.product
    }

    return null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Produit non trouvé</h2>
          <p>Le produit que vous recherchez n'existe pas.</p>
          <a href="/" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
