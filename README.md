# Boutique COGI - E-commerce Platform

<div align="center">
  <br />
  <a href="https://boutiquecogi.com" target="_blank">
    <img src="./banner.png" alt="Boutique COGI Banner">
  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next.js-000?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" />
    <img src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/-Stripe-6772e5?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  </div>
  <h3 align="center">Plateforme E-commerce Moderne pour Boutique COGI</h3>
  <div align="center">
    Site web officiel: <a href="https://boutiquecogi.com" target="_blank"><b>www.boutiquecogi.com</b></a>
  </div>
  <br />
</div>

## 📋 Table des matières

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Fonctionnalités](#fonctionnalités)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Base de données](#base-de-données)
7. [Scripts disponibles](#scripts-disponibles)

## 🚀 Introduction

Boutique COGI est une plateforme e-commerce moderne développée avec Next.js 15, Prisma, PostgreSQL et Stripe. Le site présente une collection élégante de vêtements pour femmes, hommes et enfants avec un design luxueux et une expérience utilisateur fluide.

## ⚙️ Technologies

- **Next.js 15** – Framework React avec App Router
- **Prisma** – ORM pour la base de données
- **PostgreSQL** – Base de données relationnelle
- **Stripe** – Traitement des paiements
- **TypeScript** – Typage statique
- **Tailwind CSS** – Framework CSS personnalisé
- **Zustand** – Gestion d'état client
- **Font Awesome** – Icônes

## ⚡️ Fonctionnalités

- **Design responsive** avec thème turquoise/rose
- **Navigation latérale** avec sous-menus
- **Catalogue produits** organisé par catégories
- **Panier d'achat** avec gestion des quantités
- **Paiement sécurisé** via Stripe
- **Gestion des utilisateurs** et commandes
- **Upload d'images** (Cloudinary/S3)
- **Interface d'administration** (Prisma Studio)

## 🛠️ Installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd boutique-cogi
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env
   ```

   Remplir les variables dans `.env`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/boutique_cogi"
   STRIPE_PUBLIC_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

## 🗄️ Base de données

### 🚀 Lancer PostgreSQL localement (Docker)

Pour faciliter la configuration locale, le projet inclut un fichier `docker-compose.yml` qui lance :

- Une base PostgreSQL (`boutique_cogi`) sur le port `5432`
- Adminer (interface web) sur le port `8080`

```bash
docker compose up -d
```

Ensuite, vous pouvez accéder à Adminer depuis :

- http://localhost:8080

**Connexion**
- Système : PostgreSQL
- Serveur : `db` (ou `localhost` si vous utilisez `docker compose` localement)
- Base : `boutique_cogi`
- Utilisateur : `postgres`
- Mot de passe : `postgres`

### 🧩 Configuration Prisma

Le schéma de base de données est défini dans `prisma/schema.prisma` avec les modèles suivants:

- **Product**: Produits avec images, prix, stock
- **User**: Utilisateurs avec informations de profil
- **Order**: Commandes avec statut de paiement
- **OrderItem**: Articles dans les commandes

### Initialisation de la base de données

1. **Lancer PostgreSQL (via Docker)**
   ```bash
   docker compose up -d
   ```

2. **Appliquer le schéma**
   ```bash
   npm run db:push
   ```

3. **Générer le client Prisma**
   ```bash
   npm run db:generate
   ```

4. **Peupler la base de données**
   ```bash
   npm run db:seed
   ```

## 🚀 Scripts disponibles

```bash
# Développement
npm run dev              # Démarrer le serveur de développement
npm run build            # Build de production
npm run start            # Démarrer le serveur de production
npm run lint             # Vérification du code

# Base de données
npm run db:generate      # Générer le client Prisma
npm run db:push          # Appliquer le schéma sans migration
npm run db:migrate       # Créer et appliquer une migration
npm run db:studio        # Ouvrir Prisma Studio
npm run db:seed          # Peupler la base de données
```

## 📁 Structure du projet

```
boutique-cogi/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── products/          # Pages produits
│   └── checkout/          # Pages de paiement
├── components/            # Composants React
│   ├── navbar.tsx         # Barre de navigation
│   ├── sidebar.tsx        # Menu latéral
│   ├── product-card.tsx   # Carte produit
│   └── product-list.tsx   # Liste de produits
├── lib/                   # Utilitaires
│   ├── prisma.ts          # Client Prisma
│   └── stripe.ts          # Configuration Stripe
├── prisma/                # Configuration base de données
│   ├── schema.prisma      # Schéma Prisma
│   └── seed.ts           # Script de peuplement
├── public/                # Assets statiques
│   └── data.json          # Données produits (dev)
├── store/                 # Gestion d'état
│   └── cart-store.ts      # Store Zustand
└── styles/                # Styles personnalisés
    └── globals.css        # CSS Boutique COGI
```

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env` à la racine avec:

```env
# Base de données
DATABASE_URL="postgresql://user:password@localhost:5432/boutique_cogi"

# Stripe
STRIPE_PUBLIC_KEY="pk_test_your_public_key"
STRIPE_SECRET_KEY="sk_test_your_secret_key"

# NextAuth.js (optionnel)
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Cloudinary (pour les images)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### Stripe

1. Créer un compte sur [Stripe](https://stripe.com)
2. Récupérer les clés API (test ou live)
3. Configurer les webhooks pour les paiements

## 📞 Support

Pour toute question ou problème:
- Email: contact@boutiquecogi.com
- Site web: [www.boutiquecogi.com](https://boutiquecogi.com)

---

**Boutique COGI** © 2026. Tous droits réservés.

- **Responsive Product Pages:**  
  Detailed pages with interactive plus/minus buttons to adjust item quantities in the cart.

- **Real‑Time Cart State:**  
  A live-updating cart icon in the navbar using Zustand.

- **Seamless Stripe Checkout:**  
  A secure checkout process powered by Stripe's API.

- **Modern UI:**  
  A sleek, professional design built with Tailwind CSS v4 and shadcn‑inspired UI components.

## 👌 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

Run the following commands in your terminal:

```bash
git clone https://github.com/yourusername/your-ecommerce-repo.git
cd your-ecommerce-repo
