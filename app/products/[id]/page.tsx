import { Metadata } from "next";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma"; // Assurez-vous que le chemin vers votre instance prisma est correct
import { ProductDetail } from "@/components/product-detail";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

/**
 * GÉNÉRATION DES METADATA (SEO)
 * S'exécute côté serveur pour créer les balises <title>, <meta description>, etc.
 */
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    return {
      title: "Produit non trouvé | Boutique COGI",
    };
  }

  return {
    title: `${product.name} | Boutique COGI`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

/**
 * SERVER COMPONENT DE LA PAGE
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Récupération directe des données depuis la base de données (Server-side)
  const product = await prisma.product.findUnique({
    where: { id },
  });

  // Si le produit n'existe pas, on renvoie vers la page 404 de Next.js
  if (!product) {
    notFound();
  }

  // Conversion du format Prisma vers le format attendu par votre composant UI si nécessaire
  const formattedProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    description: product.description,
    category: product.category,
  };

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        {/* On passe les données au composant Client pour l'interactivité (panier, wishlist) */}
        <ProductDetail product={formattedProduct} />
      </div>
    </main>
  );
}