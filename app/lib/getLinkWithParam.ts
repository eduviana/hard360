export const getLinkWithParam = (
  basePath: string,
  searchParams: URLSearchParams,
  key: string,
  value: string
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(key, value);
  return `${basePath}?${params.toString()}`;
};