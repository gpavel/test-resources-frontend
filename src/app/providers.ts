import { InjectionToken, Provider } from '@angular/core';

import { SEARCH_API_URL } from '../environments/environment';

export const SEARCH_API_TOKEN = new InjectionToken('SEARCH_API_URL');

export const SEARCH_API_URL_PROVIDER: Provider = {
  provide: SEARCH_API_TOKEN,
  useValue: SEARCH_API_URL,
};
