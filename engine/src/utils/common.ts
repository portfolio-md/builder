import { Page } from '@portfolio.md/configuration';

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value != null && value != undefined;
}

export function getMenu(pages: { [page: string]: Page }) {
  return Object.entries(pages)
    .map(([name, page]) => {
      if (page.menu == null) {
        return null;
      }
      return {
        ...page.menu,
        url: page.menu.url ?? name,
      };
    })
    .filter(notEmpty);
}
