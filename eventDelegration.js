document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.tagName);
  if (e.target.tagName == "LI") window.location.href = "/" + e.target.id;
});
