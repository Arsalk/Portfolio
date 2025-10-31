// sparks.js
const sparks = [];
const maxSparks = 30;

document.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 3; i++) {
    const spark = document.createElement("div");
    spark.className = "real-spark";

    spark.style.left = e.pageX + "px";
    spark.style.top = e.pageY + "px";
    spark.style.setProperty("--x-move", (Math.random() - 0.5) * 40 + "px");
    spark.style.setProperty("--y-move", (Math.random() - 0.5) * 40 + "px");

    document.body.appendChild(spark);
    sparks.push(spark);

    if (sparks.length > maxSparks) {
      const old = sparks.shift();
      old.remove();
    }

    setTimeout(() => spark.remove(), 600);
  }
});
