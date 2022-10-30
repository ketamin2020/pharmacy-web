import { MenuItemData, ItemsMenuFirstNested } from './types'

export const MainMenuData: MenuItemData = {
  label: 'Каталог товарів',
  items: [
    {
      label: ItemsMenuFirstNested.MEDICINES,
    },
    {
      label: ItemsMenuFirstNested.COLOPLAST_PRODUCTION,
    },
    {
      label: ItemsMenuFirstNested.BAD_AND_VITAMINES,

      items: [
        {
          label: 'Option 1',
        },
        {
          label: 'Option 2',
        },
      ],
    },
    {
      label: ItemsMenuFirstNested.MEDICAL_GOODS,

      // rightIcon: <ImportExportRoundedIcon />,
      items: [
        {
          label: 'File Type 1',
          items: [
            {
              label: 'Option 1',

              callback: () => console.log('Export > FT1 > O1 clicked'),
            },
            {
              label: 'Option 2',

              callback: () => console.log('Export > FT1 > O2 clicked'),
            },
          ],
        },
        {
          label: 'File Type 2',
          callback: () => console.log('Export > FT2 clicked'),
        },
      ],
    },
    {
      label: ItemsMenuFirstNested.ANTIBIOTICS,
    },
    {
      label: ItemsMenuFirstNested.PRODUCTS_FOR_COSMETOLOGISTS,
    },
    {
      label: ItemsMenuFirstNested.GOODS_FOR_MOTHERS_AND_items,
    },
    {
      label: ItemsMenuFirstNested.OPTICS,
    },
    {
      label: ItemsMenuFirstNested.COSMETICS_AND_HYGIENE,
    },
    {
      label: ItemsMenuFirstNested.SEXUAL_HEALTH,
    },
  ],
}
