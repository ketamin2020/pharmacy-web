export interface MenuItemData {
  label: string
  items: [
    {
      label: string
      url?: string
      callback?: () => void
      items?: [{ label: string; callback: () => void; items?: [{ label: string; callback?: () => void; items?: [] }] }]
    },
  ]
}

export enum ItemsMenuFirstNested {
  MEDICINES = 'Лікарські засоби',
  COLOPLAST_PRODUCTION = 'Вироби Coloplast',
  BAD_AND_VITAMINES = 'БАД та вітаміни',
  MEDICAL_GOODS = 'Медичні товари',
  ANTIBIOTICS = 'Антибіотики',
  PRODUCTS_FOR_COSMETOLOGISTS = 'Продукти для косметології',
  GOODS_FOR_MOTHERS_AND_CHILDREN = 'Товари для мам та дітей',
  OPTICS = 'Оптика',
  COSMETICS_AND_HYGIENE = 'Косметика та гігієна',
  SEXUAL_HEALTH = "Сексуальне здоров'я",
}
