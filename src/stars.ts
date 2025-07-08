window.addEventListener('load', setupStars);
window.addEventListener('resize', setupStars);

function setupStars() {
  const canvas = document.getElementById("starCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  let minSize = 0.75;
  let maxSize = 2.0;
  let starsAmount = 250;
  
  if (screenWidth < 640) // Mobile
    starsAmount = 200;
  else if (screenWidth < 1024) // Tablet    
    starsAmount = 300;

  const stars: { x: number; y: number; size: number; opacity: number; }[] = [];
  const centerX = canvas.width / 2;
  const maxDist = Math.sqrt(centerX ** 2);

  for (let i = 0; i < starsAmount; i++) {
    const x = Math.random() * screenWidth;
    const y = Math.random() * screenHeight;
    const dx = x - centerX;
    const dist = Math.sqrt(dx * dx);

    const fadeFactor = dist / maxDist;
    const opacity = fadeFactor * 0.5;

    stars.push({
      x,
      y,
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity
    });
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fillRect(star.x, star.y, star.size, star.size);
  }
}
