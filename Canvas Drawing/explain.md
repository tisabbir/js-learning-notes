Certainly, let's break down the provided JavaScript code step by step, explaining each line and element:

```javascript
var c = document.querySelector("canvas");
```

1. `var c`: This line declares a variable named `c`. This variable will be used to store the HTML `<canvas>` element selected from the document.

2. `document.querySelector("canvas")`: This part selects the first `<canvas>` element found in the document. `querySelector` is a method that looks for an HTML element based on a CSS selector. In this case, it's selecting the `<canvas>` element.

```javascript
var ctx = c.getContext("2d");
```

3. `var ctx`: This line declares another variable named `ctx`. This variable will store the 2D drawing context of the `<canvas>` element. It's like getting a set of tools for drawing on the canvas.

4. `c.getContext("2d")`: This part uses the `getContext` method to obtain the 2D drawing context for the `<canvas>` element stored in the `c` variable. The argument `"2d"` specifies that we want a 2D drawing context.

```javascript
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
```

5. `ctx.lineWidth = 3;`: This sets the line width for drawing operations to 3 pixels. It determines how thick lines will be when drawn.

6. `ctx.strokeStyle = "black";`: This sets the stroke color to black. The `strokeStyle` property determines the color of lines and the outline of shapes when drawn.

```javascript
ctx.strokeRect(10,10,380,280)
```

7. `ctx.strokeRect(10,10,380,280)`: This line draws a rectangle with a stroke (outline) using the specified coordinates and dimensions. The numbers represent the (x, y) coordinates of the top-left corner of the rectangle and its width and height.

```javascript
ctx.fillStyle = "green";
ctx.fillRect(12,12,376,276);
```

8. `ctx.fillStyle = "green";`: This sets the fill color to green. The `fillStyle` property determines the color used to fill shapes.

9. `ctx.fillRect(12,12,376,276);`: This line draws a filled rectangle using the specified coordinates and dimensions. It's similar to `strokeRect`, but it fills the interior of the rectangle with the current fill color.

```javascript
var centerX = c.width / 2;
var centerY = c.height / 2;
```

10. `var centerX`: This line calculates the x-coordinate of the canvas center. It divides the canvas's width (`c.width`) by 2.

11. `var centerY`: This line calculates the y-coordinate of the canvas center. It divides the canvas's height (`c.height`) by 2.

```javascript
ctx.beginPath();
```

12. `ctx.beginPath();`: This line starts a new path for drawing. It's like telling the context that you're about to draw something new.

```javascript
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
```

13. `ctx.arc(centerX,centerY,80,0,2*Math.PI,false);`: This line draws a filled circle. It uses the `arc` method, specifying the center coordinates (`centerX` and `centerY`), the radius (80 pixels), the starting angle (0 radians), the ending angle (`2*Math.PI` radians, which is a full circle), and `false` indicating that the drawing direction is counterclockwise.

```javascript
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
```

14. `ctx.fillStyle = "red";`: This sets the fill color to red. This will fill the circle with red color.

15. `ctx.fill();`: This fills the path you defined earlier (the circle) with the current fill color (red).

16. `ctx.stroke();`: This outlines the path (the circle) with the current stroke color and line width. It adds a black border to the circle.

In summary, this code draws a green rectangle with a black border on an HTML canvas element. It then draws a red filled circle in the center of the canvas. The canvas serves as a drawing area where shapes can be created and customized using the 2D drawing context (`ctx`) and its various methods and properties.