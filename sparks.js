// === Spark Cursor Effect ===
document.addEventListener("mousemove", function(e) {
  // create multiple sparks for each mouse move
  for (let i = 0; i < 3; i++) {
    const spark = document.createElement("span");
    spark.classList.add("spark");

    // randomize size and slight scatter for realism
    const size = Math.random() * 4 + 3; // 3px to 7px
    const xOffset = (Math.random() - 0.5) * 20;
    const yOffset = (Math.random() - 0.5) * 20;

    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.left = `${e.pageX + xOffset}px`;
    spark.style.top = `${e.pageY + yOffset}px`;

    document.body.appendChild(spark);

    // remove after 600ms
    setTimeout(() => {
      spark.remove();
    }, 600);
  }
});
