const STORAGE_KEY = "bds_rate_limit";

export const useRateLimit = (limit = 3, windowMs = 60 * 1000) => {
  const canSubmit = () => {
    const now = Date.now();
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const recent = stored.filter((time) => now - time < windowMs);
    if (recent.length >= limit) {
      return false;
    }
    recent.push(now);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
    return true;
  };

  return { canSubmit };
};