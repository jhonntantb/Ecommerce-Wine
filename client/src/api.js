export const URL =
  import.meta.env.VITE_ENTORNO == 'local'
    ? import.meta.env.VITE_LOCAL_URL
    : import.meta.env.VITE_API_URL;
