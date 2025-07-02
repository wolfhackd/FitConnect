export const BirthDate = (birthDate) => {
  const date = new Date(birthDate);
  const dateNow = new Date();
  return dateNow.getFullYear() - date.getFullYear();
};
