// Script to analyze CSS styles, fonts, and colors from a webpage
const styles = document.querySelectorAll('*');
const fontFamilies = new Set();
const colors = new Set();
const animations = new Set();

styles.forEach(el => {
  const computed = window.getComputedStyle(el);
  
  // Get font families
  const fontFamily = computed.fontFamily;
  if (fontFamily && fontFamily !== 'initial') {
    fontFamilies.add(fontFamily);
  }
  
  // Get colors
  const color = computed.color;
  const bgColor = computed.backgroundColor;
  const borderColor = computed.borderColor;
  
  if (color && color !== 'initial' && color !== 'rgba(0, 0, 0, 0)') colors.add(color);
  if (bgColor && bgColor !== 'initial' && bgColor !== 'rgba(0, 0, 0, 0)') colors.add(bgColor);
  if (borderColor && borderColor !== 'initial' && borderColor !== 'rgba(0, 0, 0, 0)') colors.add(borderColor);
  
  // Get animations
  const animation = computed.animation;
  const transition = computed.transition;
  if (animation && animation !== 'none') animations.add(animation);
  if (transition && transition !== 'none') animations.add(transition);
});

// Get all CSS rules
const sheets = Array.from(document.styleSheets);
sheets.forEach(sheet => {
  try {
    const rules = Array.from(sheet.cssRules || []);
    rules.forEach(rule => {
      if (rule.style) {
        const anim = rule.style.animation;
        const trans = rule.style.transition;
        if (anim) animations.add(anim);
        if (trans) animations.add(trans);
      }
    });
  } catch(e) {}
});

console.log('FONTS:', Array.from(fontFamilies));
console.log('COLORS:', Array.from(colors));
console.log('ANIMATIONS:', Array.from(animations));
