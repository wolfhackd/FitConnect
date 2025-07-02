export const DataTransformer = (date) => {
  if (!date) return "Data inválida";

  const parsedDate = new Date(date);

  // Se a data for inválida, `getTime()` retorna NaN
  if (isNaN(parsedDate.getTime())) return "Data inválida";

  return parsedDate.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};
