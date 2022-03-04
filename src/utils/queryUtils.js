export const parseQueryString = (url) => {
  const [_, query] = url.split('?');
  if (!query) return {};
  return query.split('&').reduce((acc, e) => {
    const [key, value] = e.split('=');
    return { ...acc, [key]: value };
  }, {});
};
