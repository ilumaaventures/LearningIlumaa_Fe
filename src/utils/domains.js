/**
 * Domain & URL Configuration for multi-domain routing:
 * - Main Website: ilumaa.com (Local dev default: http://localhost:5173)
 * - Tech Website: tech.ilumaa.com (Local dev default: http://localhost:5174)
 * - Learning Website: learning.ilumaa.com (Local dev default: http://localhost:5175)
 */

export const getLearningUrl = () => {
  if (import.meta.env.VITE_LEARNING_URL) {
    return import.meta.env.VITE_LEARNING_URL;
  }

  if (typeof window !== "undefined") {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isLocalhost) {
      const port = import.meta.env.VITE_LEARNING_PORT || "5175";
      return `http://localhost:${port}`;
    }
  }

  return "https://learning.ilumaa.com";
};

export const getTechUrl = () => {
  if (import.meta.env.VITE_TECH_URL) {
    return import.meta.env.VITE_TECH_URL;
  }

  if (typeof window !== "undefined") {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isLocalhost) {
      const port = import.meta.env.VITE_TECH_PORT || "5174";
      return `http://localhost:${port}`;
    }
  }

  return "https://tech.ilumaa.com";
};

export const getMainUrl = () => {
  if (import.meta.env.VITE_MAIN_URL) {
    return import.meta.env.VITE_MAIN_URL;
  }

  if (typeof window !== "undefined") {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isLocalhost) {
      const port = import.meta.env.VITE_MAIN_PORT || "5173";
      return `http://localhost:${port}`;
    }
  }

  return "https://ilumaa.com";
};

export const isLearningDomain = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const { hostname, port, pathname } = window.location;
  const isLocalhost =
    hostname === "localhost" || hostname === "127.0.0.1";
  const learningPort = String(import.meta.env.VITE_LEARNING_PORT || "5175");

  if (hostname.startsWith("learning.") || hostname === "learning.ilumaa.com") {
    return true;
  }

  if (isLocalhost && port === learningPort) {
    return true;
  }

  if (pathname.startsWith("/learning")) {
    return true;
  }

  return false;
};
