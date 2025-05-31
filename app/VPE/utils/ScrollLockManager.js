import ScrollLocker from "./scrollLocker";

// Ces refs doivent être initialisées UNE FOIS, par ex. via un provider racine
let _locker = null;
let _initialized = false;

export function initScrollLockManager(bodyRef, appRef) {
  if (!_initialized && bodyRef && appRef) {
    _locker = new ScrollLocker(bodyRef, appRef);
    _initialized = true;
  }
}

export function registerScrollLock() {
  if (_locker) _locker.registerScrollLock();
}
export function unregisterScrollLock() {
  if (_locker) _locker.unregisterScrollLock();
}