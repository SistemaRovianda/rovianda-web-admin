export interface listProduct {
  id: number;
  code: string;
  productName: string;
}

export interface listIngredients {
  category: string;
  id: number;
  ingredientId?: number;
  description?: string;
  mark: string;
  nameProduct: string;
  presentation: string;
  variant: string;
}

export interface presentations {
  presentation: number;
  typePresentation: string;
  pricePresentation: string;
  pricePresentationPublic?:string;
  keySae:string;
}

export interface ingredient {
  nameProduct: string;
  mark: string;
  variant: string;
  presentation: string;
  category: string;
}

export interface product {
  clave: string;
  name: string;
  productLine?: number;
  distLine:string;
}

export interface productLine {
  CVE_LIN: string;
  DESC_LIN: string;
  ESUNGPO: string;
  CUENTA_COI?: any;
  STATUS: string;
}

export interface newLineProduct {
  clave: string;
  description: string;
}

export interface Tax {
  CVE_ESQIMPU: number;
  DESCRIPESQ: string;
}

export interface WarehouseOFSAEDTO{
  CVE_ALM:number,
  DESCR:string,
  DIRECCION:string,
  ENCARGADO:string,
  TELEFONO:string
}

export interface AdminProductsCatalog{
  id:number,
  product:string,
  presentation:string,
  price:string,
  weight:string,
  keySae:string,
  keyAltern:string,
  type:string,
  uniMed:string,
  quantityByPresentation:number,
  esqDescription:string,
  esqKey:number
}

export interface AdminPreRegisterProductDetails{
  productIdInSystem:number,
  name:string,
  price:number,
  keySae:string,
  uniMed:string,
  descriptionImp:string,
  esqKey:number
}

export interface RequestPreRegistProduct{
  productId:number,
  name:string,
  code:string,
  codeAltern:string,
  presentation:string,
  price:number,
  weight:number,
  type:string,
  quantityByPresentation:number,
  uniMed:string,
  esqDescription:string,
  esqKey:number
}