export const openLinks = (link, newTab) => {
  if (newTab) {
    window.open(link, "_blank");
  } else {
    window.location.href = link;
  }
};
