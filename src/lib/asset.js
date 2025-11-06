export const asset = (p = '') =>
  /^https?:\/\//.test(p) ? p : `${import.meta.env.BASE_URL}${String(p).replace(/^\/+/, '')}`
