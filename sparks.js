// sparks.js
document.addEventListener("mousemove", function(e) {
  const spark = document.createElement("span");
  spark.classList.add("spark");
  spark.style.left = e.pageX + "px";
  spark.style.top = e.pageY + "px";
  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 1000);
});
