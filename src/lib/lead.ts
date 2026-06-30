export interface LeadData {
  name: string;
  city: string;
  service?: string;
  extra?: Record<string, string>;
}

/**
 * Posts a quote/lead to the configured Google Sheets web-app endpoint.
 * Mirrors the original Contact form submission (no-cors fire-and-forget).
 */
export async function submitLead(data: LeadData): Promise<void> {
  const endpoint = (import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL as string | undefined)?.trim();
  if (!endpoint) {
    throw new Error("Missing VITE_GOOGLE_SHEETS_WEB_APP_URL");
  }
  const fd = new FormData();
  fd.append("name", data.name);
  fd.append("city", data.city);
  fd.append("service", data.service ?? "Free Quote Request");
  for (const [key, value] of Object.entries(data.extra ?? {})) {
    fd.append(key, value);
  }
  fd.append("submittedAt", new Date().toISOString());
  fd.append("pageUrl", window.location.href);
  await fetch(endpoint, { method: "POST", body: fd, mode: "no-cors" });
}
