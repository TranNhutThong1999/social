// src/constants/ui.ts
export const UI_CONSTANTS = {
  PAGINATION: {
    MOBILE_BREAKPOINT: 640,
    MOBILE_MAX_PAGES: 3,
    DESKTOP_MAX_PAGES: 5,
    QUICK_NAV_THRESHOLD: 5,
  },
  SPACING: {
    BUTTON_SM: { px: 4, py: 2 },
    BUTTON_MD: { px: 6, py: 2.5, pySm: 3 },
    BUTTON_LG: { px: 8, py: 3, pySm: 4 },
  },
  POSTS: {
    DEFAULT_LIMIT: 6,
  },
  AVATAR: {
    SVG_DIMENSIONS: {
      CENTER: 50,
      EYE_Y: 35,
      EYE_RADIUS: 15,
      MOUTH_START: 25,
      MOUTH_END: 75,
      MOUTH_CONTROL: 60,
    },
  },
} as const;
