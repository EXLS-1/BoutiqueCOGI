// app/actions/product.actions.ts
'use server'

import prisma from '@/lib/prisma';

// Type pour structurer la réponse de notre action
export type ActionResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

export async function getActiveProducts(category?: string) {
  try {
    // On construit dynamiquement les filtres de la requête
    const whereClause: any = {
      isArchived: false, // On ne récupère jamais les produits archivés
    };

    if (category) {
      whereClause.category = category;
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc', // Les nouveautés en premier
      },
    });

    return { success: true, data: products };
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return { success: false, error: "Impossible de charger le catalogue pour le moment." };
  }
}