export function formatResponse(
  result: object,
  currentPage: number,
  currentLimit: number,
  quantityResult: number,
) {
  const pages = Math.ceil(quantityResult / currentLimit);
  const next = currentPage === pages ? null : currentPage + 1;
  const prev = currentPage === 0 ? null : currentPage - 1;

  return {
    info: {
      count: quantityResult,
      pages,
      next,
      prev,
    },
    results: result,
  };
}
