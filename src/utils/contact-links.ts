const digitsOnly = (value: string) => value.replace(/\D/g, "");

export function toWhatsappLink(phone: string, message?: string): string {
  const base = `https://wa.me/55${digitsOnly(phone)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function toPhoneLink(phone: string): string {
  return `tel:+55${digitsOnly(phone)}`;
}

export function toEmailLink(email: string, subject?: string): string {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}

export function toMapsLink(latitude: number, longitude: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}

export function toWazeLink(latitude: number, longitude: number): string {
  return `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
}
