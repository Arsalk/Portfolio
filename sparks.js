document.addEventListener("mousemove", function(e) {
  for (let i = 0; i < 3; i++) {
    const spark = document.createElement("span");
    spark.classList.add("spark");

    // smaller size
    const size = Math.random() * 2 + 2; // 2px to 4px
    const xOffset = (Math.random() - 0.5) * 15;
    const yOffset = (Math.random() - 0.5) * 15;

    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.left = `${e.pageX + xOffset}px`;
    spark.style.top = `${e.pageY + yOffset}px`;

    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 600);
  }
});
