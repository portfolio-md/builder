import { Template } from '@portfolio.md/configuration';

import { Default } from '../templates';

type Templates = 'default';

export function getTemplate(template: Templates): Template {
  switch (template) {
    case 'default': {
      return new Default();
    }

    default: {
      throw new Error(`There is no such template: ${template}`);
    }
  }
}
