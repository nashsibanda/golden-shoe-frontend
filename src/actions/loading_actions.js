export const PRODUCTS_LOADING_ON = "PRODUCTS_LOADING_ON";
export const PRODUCTS_LOADING_OFF = "PRODUCTS_LOADING_OFF";
export const CATEGORIES_LOADING_ON = "CATEGORIES_LOADING_ON";
export const CATEGORIES_LOADING_OFF = "CATEGORIES_LOADING_OFF";
export const SESSION_LOADING_ON = "SESSION_LOADING_ON";
export const SESSION_LOADING_OFF = "SESSION_LOADING_OFF";
export const STYLES_LOADING_ON = "STYLES_LOADING_ON";
export const STYLES_LOADING_OFF = "STYLES_LOADING_OFF";
export const STOCKUNITS_LOADING_ON = "STOCKUNITS_LOADING_ON";
export const STOCKUNITS_LOADING_OFF = "STOCKUNITS_LOADING_OFF";
export const CART_LOADING_ON = "CART_LOADING_ON";
export const CART_LOADING_OFF = "CART_LOADING_OFF";

export const productsLoadingOn = () => ({
  type: PRODUCTS_LOADING_ON,
});

export const productsLoadingOff = () => ({
  type: PRODUCTS_LOADING_OFF,
});

export const categoriesLoadingOn = () => ({
  type: CATEGORIES_LOADING_ON,
});

export const categoriesLoadingOff = () => ({
  type: CATEGORIES_LOADING_OFF,
});

export const stylesLoadingOn = () => ({
  type: STYLES_LOADING_ON,
});

export const stylesLoadingOff = () => ({
  type: STYLES_LOADING_OFF,
});

export const sessionLoadingOn = () => ({
  type: SESSION_LOADING_ON,
});

export const sessionLoadingOff = () => ({
  type: SESSION_LOADING_OFF,
});

export const stockUnitsLoadingOn = () => ({
  type: STOCKUNITS_LOADING_ON,
});

export const stockUnitsLoadingOff = () => ({
  type: STOCKUNITS_LOADING_OFF,
});

export const cartLoadingOn = () => ({
  type: CART_LOADING_ON,
});

export const cartLoadingOff = () => ({
  type: CART_LOADING_OFF,
});
