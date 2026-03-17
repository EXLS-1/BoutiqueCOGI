import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login?callbackUrl=/profile");
  }

  const orders = await prisma.order.findMany({
    where: {
      userId: session.user?.id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Mon Profil</h1>
        <p className="text-gray-600 mb-8">
          Bienvenue, <span className="font-semibold">{session.user?.name}</span>
        </p>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Informations du compte</h2>
          <p className="text-gray-700">Email : {session.user?.email}</p>
          <p className="text-gray-700 mt-2">Nom : {session.user?.name}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Mes commandes</h2>

          {orders.length === 0 ? (
            <p className="text-gray-600">
              Vous n'avez pas encore passé de commande.{" "}
              <Link href="/products" className="text-blue-600 hover:underline">
                Commencer à acheter
              </Link>
            </p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">Commande #{order.id}</p>
                      <p className="text-sm text-gray-600">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">
                        {formatPrice(order.total)}
                      </p>
                      <span
                        className={`text-sm px-3 py-1 rounded ${
                          order.isPaid
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.isPaid ? "Payée" : "En attente"}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>{order.items.length} article(s)</p>
                    {order.address && (
                      <p className="mt-1">Adresse : {order.address}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link
            href="/products"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            Continuer vos achats
          </Link>
        </div>
      </div>
    </div>
  );
}
