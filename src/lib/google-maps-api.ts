// lib/google-maps-api.ts
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';

export const loadGoogleMapsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (typeof window !== 'undefined' && window.google && window.google.maps) {
      resolve();
      return;
    }

    // Check if script tag already exists
    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', () => reject(new Error('Google Maps script failed to load')));
      return;
    }

    // Create and append script tag
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=Function.prototype`;
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps script failed to load'));

    document.head.appendChild(script);
  });
};