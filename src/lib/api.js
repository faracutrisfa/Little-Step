export const apiClient = async (
  endpoint,
  method,
  options = {}
) => {
  const isFormData = options.body instanceof FormData;

  const config = {
    method,
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_KEY}${endpoint}`,
    config
  );

  const text = await response.text();
  console.log("Response:", text);

  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    let message = text;
    if (contentType?.includes("application/json")) {
      try {
        const json = JSON.parse(text);
        message = json?.message || JSON.stringify(json);
      } catch (_) {}
    }
    throw new Error(message);
  }

  if (contentType?.includes("application/json")) {
    return JSON.parse(text);
  }

  return text;
};