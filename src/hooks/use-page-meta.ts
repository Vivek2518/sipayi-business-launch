import { useEffect } from "react";

/**
 * Sets document.title and the meta description for a page, restoring the
 * previous values on unmount. Lightweight alternative to react-helmet.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    const previousDescription = meta?.getAttribute("content") ?? null;
    let createdMeta = false;

    if (description) {
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
        createdMeta = true;
      }
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (meta) {
        if (createdMeta) {
          meta.remove();
        } else if (previousDescription !== null) {
          meta.setAttribute("content", previousDescription);
        }
      }
    };
  }, [title, description]);
}
