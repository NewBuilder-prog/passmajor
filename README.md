# Pass Major - Site Web Professionnel

## 🚀 Nouvelle Version avec Animations Avancées

Ce projet est une refonte complète du site Pass Major avec un design professionnel moderne et des animations impressionnantes, inspiré des meilleurs sites web actuels.

## ✨ Caractéristiques

### Design Professionnel
- **Thème sombre moderne** avec gradients animés
- **Typographie** : Inter (comme huly.io)
- **Palette de couleurs** : Bleu/violet avec accents (inspiré de limova.ai et mindeo.com)
- **Layout responsive** adapté à tous les écrans

### Animations Avancées
- **GSAP** pour des animations fluides et performantes
- **Scroll-triggered animations** : éléments qui apparaissent au scroll
- **Parallax effects** : effets de profondeur sur les éléments de fond
- **Hover effects** : interactions subtiles sur tous les éléments
- **Counter animations** : compteurs animés pour les statistiques
- **Floating cards** : cartes flottantes avec animations continues

### Pages Disponibles
1. **Accueil** (`/`) - Hero section avec animations, stats, features
2. **Nos offres** (`/nos-offres.html`) - Grille de 6 stages avec cartes animées
3. **Challenge** (`/challenge.html`) - Présentation du challenge de méthodologie
4. **Contact** (`/contact.html`) - Formulaire de contact avec animations

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS et gradients
- **JavaScript** - Interactivité et animations
- **GSAP 3.12.5** - Bibliothèque d'animations avancées
  - ScrollTrigger
  - ScrollToPlugin
- **Node.js** - Serveur HTTP simple

## 📦 Installation et Démarrage

### Prérequis
- Node.js installé sur votre machine

### Démarrage du serveur

```bash
node server.js
```

Le site sera accessible sur : **http://localhost:3500**

## 🎨 Inspirations

Ce design s'inspire des meilleures pratiques de :
- **mindeo.com** - Dégradés violets et design premium
- **limova.ai** - Gradients orange-jaune et animations fluides
- **pulsor.agency** - Minimalisme et espace blanc
- **huly.io** - Typographie moderne et animations subtiles

## 📁 Structure du Projet

```
PassMajor/
├── index.html          # Page d'accueil
├── nos-offres.html    # Page des offres
├── challenge.html      # Page du challenge
├── contact.html        # Page de contact
├── server.js           # Serveur HTTP Node.js
├── styles/
│   ├── main.css       # Styles principaux
│   ├── offers.css     # Styles page offres
│   ├── challenge.css  # Styles page challenge
│   └── contact.css    # Styles page contact
└── js/
    ├── main.js        # JavaScript principal avec animations GSAP
    └── contact.js     # JavaScript formulaire contact
```

## 🎯 Fonctionnalités Principales

### Navigation
- Menu fixe en haut avec effet de blur
- Indicateur de page active
- Transitions fluides entre les pages

### Hero Section
- Titre animé avec effet de dégradé
- Cartes flottantes avec animations continues
- Indicateur de scroll animé
- Orbs de fond avec parallax

### Statistiques
- Compteurs animés au scroll
- Effet de révélation progressive

### Cartes de Features/Offres
- Hover effects avec élévation et glow
- Animations d'apparition au scroll
- Stagger animation (délai entre chaque carte)

### Formulaire de Contact
- Animations au focus des champs
- Feedback visuel à la soumission
- Validation en temps réel

## 🎨 Palette de Couleurs

- **Primaire** : `#0066FF` (Bleu)
- **Secondaire** : `#8B5CF6` (Violet)
- **Accent** : `#00D4FF` (Cyan)
- **Fond** : `#0A0A0F` (Noir profond)
- **Cartes** : `#1E1E2E` (Gris foncé)

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Améliorations Futures Possibles

- [ ] Intégration d'un backend pour le formulaire de contact
- [ ] Système de réservation en ligne
- [ ] Blog/ressources supplémentaires
- [ ] Témoignages d'étudiants avec animations
- [ ] Mode clair/sombre
- [ ] Optimisations SEO supplémentaires

## 📝 Notes

- Les animations GSAP sont optimisées pour la performance
- Le design utilise des gradients CSS pour un rendu moderne
- Tous les effets sont subtils et professionnels
- Le code est bien structuré et commenté

---

**Développé avec ❤️ pour Pass Major**

