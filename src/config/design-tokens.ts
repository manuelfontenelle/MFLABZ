export const designTokens = {
  colors: {
    primary: "#111111",
    secondary: "#2150DC",
    accent: "#73FF05",
    background: "#FFFFFF",
    soft: "#F6F7FB",
    border: "#E7E8EE",
    muted: "#636873"
  },
  typography: {
    heading: "var(--font-manrope)",
    body: "var(--font-inter)",
    scale: {
      display2xl: "clamp(4.5rem, 10vw, 9rem)",
      displayXl: "clamp(3.75rem, 8vw, 7rem)",
      displayLg: "clamp(3rem, 6vw, 5.5rem)",
      heading1: "clamp(2.75rem, 5vw, 4.5rem)",
      heading2: "clamp(2.25rem, 4vw, 3.5rem)",
      heading3: "clamp(1.75rem, 3vw, 2.5rem)",
      bodyLg: "1.125rem",
      body: "1rem",
      bodySm: "0.875rem",
      caption: "0.75rem"
    }
  },
  spacing: {
    sectionSm: "4rem",
    section: "6rem",
    sectionLg: "8rem",
    container: "1.5rem"
  },
  radii: {
    sm: "0.75rem",
    md: "0.875rem",
    lg: "1rem",
    xl: "1.25rem",
    card: "1.5rem",
    panel: "2rem",
    button: "999px"
  },
  shadows: {
    xs: "0 1px 2px rgb(17 17 17 / 6%)",
    sm: "0 8px 24px rgb(17 17 17 / 6%)",
    md: "0 18px 50px rgb(17 17 17 / 10%)",
    lg: "0 28px 80px rgb(17 17 17 / 14%)",
    blue: "0 18px 48px rgb(33 80 220 / 24%)",
    lime: "0 18px 48px rgb(115 255 5 / 22%)"
  }
} as const;
