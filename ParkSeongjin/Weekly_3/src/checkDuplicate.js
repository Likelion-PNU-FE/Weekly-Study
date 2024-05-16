export default function checkDuplicate(url) {
  const imgs = document.querySelectorAll("img");
  let exist = false;
  imgs.forEach((img) => {
    if (img.getAttribute("src") === url) {
      exist = true;
    }
  });
  return exist;
}
