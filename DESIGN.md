---
name: Crimson Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#58413e'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#8c716c'
  outline-variant: '#e0bfba'
  surface-tint: '#ac3225'
  primary: '#680001'
  on-primary: '#ffffff'
  primary-container: '#8a1910'
  on-primary-container: '#ff9989'
  inverse-primary: '#ffb4a8'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#2f3130'
  on-tertiary: '#ffffff'
  tertiary-container: '#454746'
  on-tertiary-container: '#b4b5b3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#8b1a11'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e3e1'
  tertiary-fixed-dim: '#c6c7c5'
  on-tertiary-fixed: '#1a1c1b'
  on-tertiary-fixed-variant: '#454746'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: DM Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 48px
  stack-md: 32px
  stack-sm: 16px
---

## Brand & Style

The design system for AutoMecho is rooted in **Premium Minimalism**. It targets a sophisticated audience that values efficiency, reliability, and the tactile luxury of a well-engineered vehicle. The emotional response should be one of "effortless control"—where the complexity of car rental is masked by a serene, high-fidelity interface.

The aesthetic blends **Modern Corporate** structure with **Tactile Minimalism**. It utilizes a "quiet" background to let the high-resolution imagery of the fleet and the sharp Crimson accents command attention. This approach ensures the product feels established and professional while remaining cutting-edge and accessible.

## Colors

The palette is anchored by **Deep Crimson Red**, used surgically for primary actions, success states, and brand-identifying accents. This is contrasted against a neutral landscape of **Off-Whites** and **Deep Charcoals**.

- **Primary (#8A1910):** Used for CTA buttons, active selection states, and critical price information.
- **Secondary (#121212):** Reserved for primary headings and high-contrast UI elements like navigation bars or footer backgrounds.
- **Tertiary/Surface (#F9F9F7):** An off-white "linen" shade used for page backgrounds to reduce eye strain compared to pure white.
- **Neutrals:** A spectrum of grays (from `#E5E7EB` for borders to `#6B7280` for secondary text) provides subtle hierarchy without clutter.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. **DM Sans** provides a geometric, modern feel for headlines, reflecting the precision of automotive engineering. **Inter** is used for all body and functional text to ensure maximum legibility and a systematic, clean appearance.

Generous line heights are maintained to support the "minimalist" narrative, ensuring that even data-heavy car specification tables feel light and readable.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a premium, editorial feel, while transitioning to a fluid model for mobile devices. 

- **Desktop:** 12-column grid with a 1280px max-width, 24px gutters, and 64px outer margins to create a "frame" around the content.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 20px margins.

Spacing follows an 8px base unit. Vertical rhythm is established through "stack" tokens, prioritizing generous whitespace between sections (`stack-lg`) to allow the high-quality car photography to breathe.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering**. 

1.  **Level 0 (Base):** The tertiary off-white background (#F9F9F7).
2.  **Level 1 (Cards):** Pure white surfaces (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)) and a subtle 1px border (#F3F4F6).
3.  **Level 2 (Dropdowns/Modals):** High-elevation surfaces with a more pronounced shadow (0px 12px 32px rgba(0,0,0,0.08)) to indicate temporary interaction.

Avoid heavy black shadows; instead, use shadows with a slight tint of the secondary color to keep the depth looking natural and "airy."

## Shapes

The shape language is **Soft**. It avoids the playfulness of fully rounded "pill" shapes and the harshness of sharp corners. A consistent 0.25rem (4px) radius is applied to standard buttons and inputs, while larger containers like car cards use a 0.5rem (8px) radius. This subtle curvature suggests modern sophistication without sacrificing the professional tone.

## Components

### Buttons
- **Primary:** Deep Crimson (#8A1910) background, white text. No border. Soft shadow on hover.
- **Secondary:** Transparent background, Deep Charcoal (#121212) 1px border and text.
- **Tertiary:** Pure text buttons with the Label-Bold typography style, used for less critical actions.

### Input Fields
- Understated style: 1px border (#E5E7EB) that shifts to Deep Crimson (#8A1910) on focus. 
- Backgrounds should be pure white to pop against the off-white page surface.

### Cards
- Car listing cards feature a top-aligned image with no bleed (padding on all sides). 
- Specifications (transmission, fuel, seats) are displayed using small, subtle icons paired with Body-Sm text.

### Chips
- Used for car categories (Luxury, SUV, Electric). 
- Light gray background (#F3F4F6) with Deep Charcoal text. Active state uses the Primary Crimson color with white text.

### Selection Controls
- Checkboxes and Radios utilize the Primary Crimson for active states. 
- Custom-styled to be slightly larger than standard for better "touch" ergonomics in a rental environment.