# Analyse du site limova.ai

## URL
https://limova.ai

## Description générale
Limova.ai est un site présentant des assistants IA autonomes pour les entreprises. Le design utilise un fond sombre avec des accents orange-jaune, créant une identité visuelle distinctive et moderne.

---

## 🎨 COULEURS

### Palette principale
- **Fond principal** : Noir profond (#000000 / #0a0a0a)
- **Fond secondaire** : Gris très foncé (#1a1a1a / #2a2a2a)
- **Texte principal** : Blanc (#FFFFFF)
- **Texte secondaire** : Gris clair (#CCCCCC / #E0E0E0)

### Couleurs d'accent (Signature)
- **Orange-Jaune (Gradient)** : 
  - Orange : #FF6B35 / #FF7F50
  - Jaune : #FFD700 / #FFA500
  - Gradient : Dégradé orange-jaune utilisé pour le branding
  - Utilisation : Logo, boutons CTA, bannière promotionnelle

### Couleurs spécifiques
- **Bannière promotionnelle** :
  - Fond : Gradient orange-jaune
  - Texte : Blanc
  
- **Logo "LIMOVA.ai"** :
  - "L" : Gradient orange-jaune (grande lettre stylisée)
  - "IMOVA" : Blanc
  - ".ai" : Blanc, italique, plus petit
  
- **Boutons** :
  - Boutons primaires : Gradient orange-jaune avec texte blanc
  - Boutons secondaires : Gris foncé avec texte blanc
  - Bouton "Personnaliser" : Gris foncé
  
- **Grille de fond** :
  - Pattern subtil : Lignes orange-brun très fines sur fond noir
  - Crée une texture sans surcharger

- **Avatars/Agents** :
  - Diverses couleurs pour différencier les agents
  - Style cartoon/illustration

- **Bannière cookies** :
  - Fond : Gris foncé arrondi
  - Texte : Blanc
  - Boutons : Gradient orange-jaune pour "Tout Accepter" et "Tout refuser"

---

## 🔤 POLICES DE TEXTE

### Police principale
- **Famille de polices** : Sans-serif moderne et lisible
- **Polices probables** : 
  - Inter
  - System UI (-apple-system, BlinkMacSystemFont)
  - Segoe UI
  - Roboto
  - Montserrat

### Hiérarchie typographique
- **Titre principal (H1)** :
  - Texte : "Des agents IA autonomes au service de votre entreprise"
  - Taille : ~48px - 64px (très grand)
  - Poids : Bold (700)
  - Couleur : Blanc
  - Hauteur de ligne : 1.2
  
- **Logo "LIMOVA.ai"** :
  - "L" : Très grande, bold, gradient orange-jaune
  - "IMOVA" : Taille moyenne, bold, blanc
  - ".ai" : Plus petit, italique, blanc
  
- **Bannière promotionnelle** :
  - Taille : ~14px - 16px
  - Poids : Bold (700)
  - Couleur : Blanc sur gradient
  
- **Navigation** :
  - Taille : ~14px - 16px
  - Poids : Medium (500) à Semi-bold (600)
  - Couleur : Blanc
  
- **Corps de texte** :
  - Taille : ~16px - 18px
  - Poids : Regular (400)
  - Couleur : Blanc ou gris clair
  - Hauteur de ligne : 1.6

- **Boutons** :
  - Taille : ~14px - 16px
  - Poids : Semi-bold (600) à Bold (700)
  - Couleur : Blanc

---

## ✨ ANIMATIONS

### Animations observées et probables

1. **Bannière promotionnelle**
   - Animation d'apparition au chargement (slide-down ou fade-in)
   - Possible animation de texte défilant
   - Durée : 400-600ms

2. **Logo "L" stylisé**
   - Possible animation au chargement (fade-in + scale)
   - Gradient animé possible
   - Durée : 500-700ms

3. **Avatars/Agents**
   - Animation d'apparition progressive (stagger animation)
   - Possible carousel ou slider
   - Hover : Légère scale ou glow
   - Durée : 300-400ms par élément

4. **Bouton "9 agents"**
   - Hover : Changement de couleur ou scale
   - Transition douce
   - Durée : 200-300ms

5. **Bouton "+" (création)**
   - Animation de rotation au hover (0° → 45° ou 90°)
   - Changement de couleur
   - Scale légère
   - Durée : 300ms

6. **Scroll animations**
   - Révélation progressive des sections (scroll reveal)
   - Fade-in des éléments au défilement
   - Parallaxe possible sur les éléments de fond
   - Utilisation de l'Intersection Observer API

7. **Bannière cookies**
   - Slide-up depuis le bas au chargement
   - Fade-in simultané
   - Durée : 400-500ms

8. **Boutons CTA**
   - Hover : 
     - Changement d'intensité du gradient
     - Légère scale (1.05)
     - Ombre plus prononcée
   - Durée : 200-300ms

9. **Grille de fond**
   - Possible animation subtile (parallaxe ou mouvement lent)
   - Effet de profondeur

10. **Transitions générales**
    - Toutes les interactions utilisent des transitions CSS douces
    - Type : ease-out ou cubic-bezier personnalisé
    - Durée moyenne : 250-350ms

### Techniques d'animation probables
- **CSS Transitions** : Pour les interactions de base
- **CSS Animations** : Pour les animations complexes
- **CSS Gradients animés** : Pour le logo et les boutons
- **JavaScript/Frameworks** :
  - Framer Motion ou GSAP pour les animations complexes
  - Scroll-triggered animations
  - Intersection Observer API
  - Possible utilisation de Three.js pour des effets 3D (si présent)

### Propriétés animées
- `opacity` : Pour les fade-in/fade-out
- `transform` : 
  - `translateY` : Pour les slide-in/out
  - `scale` : Pour les effets de zoom
  - `rotate` : Pour le bouton "+"
- `background` / `background-image` : Pour les gradients animés
- `box-shadow` : Pour les effets de glow
- `filter` : Pour les effets de blur ou brightness

---

## 📐 STRUCTURE VISUELLE

### Layout
- **Type** : Layout moderne avec fond sombre
- **Approche** : Design centré avec conteneur max-width
- **Espacement** : Marges et paddings généreux
- **Grille** : Pattern de grille subtil en arrière-plan

### Sections principales
1. **Bannière promotionnelle** :
   - En haut de la page
   - Gradient orange-jaune
   - Texte promotionnel avec codes

2. **Header** :
   - Logo "LIMOVA.ai" à gauche
   - Navigation au centre
   - Bouton "+" à droite

3. **Hero Section** :
   - Avatars des agents en haut
   - Titre principal très grand
   - Description
   - Boutons CTA

4. **Sections de contenu** :
   - Présentation des fonctionnalités
   - Détails sur les agents IA
   - Témoignages possibles

5. **Footer** :
   - Liens et informations
   - Style cohérent avec le reste

### Design principles
- **Dark mode** : Fond sombre pour un look moderne
- **Contraste** : Fort contraste blanc/orange sur fond noir
- **Gradient signature** : Orange-jaune comme élément de marque
- **Espacement** : Utilisation généreuse de l'espace
- **Hiérarchie visuelle** : Titres très grands pour l'impact

---

## 🎯 ÉLÉMENTS INTERACTIFS

- **Logo** : Lien vers la page d'accueil
- **Navigation** : Menu avec liens (Legend, Agents IA, Charly +)
- **Bouton "+"** : Action de création/ajout
- **Avatars** : Probablement cliquables pour voir les détails des agents
- **Bouton "9 agents"** : Lien vers la liste complète
- **Boutons CTA** : Appels à l'action avec gradient
- **Bannière cookies** : Interactions pour accepter/refuser

---

## 📝 NOTES ADDITIONNELLES

- Design très moderne avec identité visuelle forte
- Utilisation distinctive du gradient orange-jaune
- Fond sombre créant un contraste impactant
- Interface orientée B2B pour les entreprises
- Design responsive adapté mobile/desktop
- Possible utilisation d'illustrations custom pour les agents
- Pattern de grille subtil ajoutant de la texture sans surcharger

### Caractéristiques spéciales
- Le logo avec le "L" en gradient est un élément de marque fort
- Les avatars illustrés donnent une approche humaine à l'IA
- La bannière promotionnelle en haut crée un sentiment d'urgence
- Le design sombre avec accents colorés est très tendance pour les tech/AI

