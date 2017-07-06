import { persistStore } from 'redux-persist';
import { asyncLocalStorage } from 'redux-persist/storages';
const DEBOUNCE_TIME_MILLISECONDS = 4000;

export function persistStoreAsync(store) {
  return persistStore(store, {
    storage: asyncLocalStorage,
    whitelist: ['auth'],
    debounce: DEBOUNCE_TIME_MILLISECONDS,
  });
}

export function purgeStoreAsync(store) {
  return persistStore(store, {
    storage: asyncLocalStorage,
    whitelist: ['auth'],
  }).purge();
}
