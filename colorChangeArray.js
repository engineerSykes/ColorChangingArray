var canvas = document.getElementById("canvas"),
    c      = canvas.getContext("2d"),
    width  = canvas.width = 500,
    height = canvas.height = 500;

var i, j, u, v, x, y,
    m = 10,
    n = 10,
    t = 0,
    fullCirc = 2 * Math.PI,
    hue = 127,
    sin = Math.sin;
    size = 20;

function draw(){

  c.clearRect(0, 0, canvas.width, canvas.height);
  for(i = 0; i < m; i++)
  {
    for(j = 0; j < n; j++)
    {
      u = i/(m-1);
      v = j/(n-1);
      x = u * canvas.width;
      y = v * canvas.height;
      c.beginPath();
      c.fillStyle = "hsl(".concat((hue + sin(t) * 60)).concat(", 75%, 50%)");
      c.arc(x * Math.sin(t*4), y * sin(t * 4), size, 0, fullCirc, false);
      c.fill();
    }
  }

   t = t + 0.01;
   requestAnimationFrame(draw);
}

draw();
</script>



<script id="jsbin-source-javascript" type="text/javascript">var canvas = document.getElementById("canvas"),
    c      = canvas.getContext("2d"),
    width  = canvas.width = 500,
    height = canvas.height = 500;

var i, j, u, v, x, y,
    m = 10,
    n = 10,
    t = 0,
    fullCirc = 2 * Math.PI,
    hue = 127,
    sin = Math.sin;
    size = 20;

function draw(){

  c.clearRect(0, 0, canvas.width, canvas.height);
  for(i = 0; i < m; i++)
  {
    for(j = 0; j < n; j++)
    {
      u = i/(m-1);
      v = j/(n-1);
      x = u * canvas.width;
      y = v * canvas.height;
      c.beginPath();
      c.fillStyle = "hsl(".concat((hue + sin(t) * 60)).concat(", 75%, 50%)");
      c.arc(x * Math.sin(t*4), y * sin(t * 4), size, 0, fullCirc, false);
      c.fill();
    }
  }

   t = t + 0.01;
   requestAnimationFrame(draw);
}

draw();
