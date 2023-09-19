# rakamin_homework_week6
### `areaAndPerimeter.js`

The `areaAndPerimeter.js` module contains the following functions:

- `squareArea(num)`: Calculates and returns the area of a square with a given side length (`num`).

- `squarePerimeter(num)`: Calculates and returns the perimeter of a square with a given side length (`num`).

- `rectangleArea(length, width)`: Calculates and returns the area of a rectangle with given length and width.

- `rectanglePerimeter(length, width)`: Calculates and returns the perimeter of a rectangle with given length and width.

These functions can be easily integrated into your JavaScript projects for geometry calculations.

### `soal1.js`

The `soal1.js` script demonstrates how to use the functions from the `areaAndPerime.js` module to calculate and display the area and perimeter of squares and rectangles. Here's how it works:

1. It imports the `areaAndPerimeter.js` module.

2. It calculates the area and perimeter of a square with a side length of 2.

3. It calculates the area and perimeter of a rectangle with a length of 2 and a width of 4.

4. It prints the calculated values to the console.

### `soal2.js`

This script performs the following steps:

1. It imports the `fs.promises` module, which provides promise-based file system operations.

2. It defines an `async` function called `copyFileContents` that takes two parameters: `sourceFilePath` and `destinationFilePath`.

3. Inside the `copyFileContents` function, it uses `await` to asynchronously read the contents of the source file specified by `sourceFilePath` using `fs.readFile`. The encoding 'utf-8' is used to read the file as text.

4. It then writes the contents to the destination file specified by `destinationFilePath` using `fs.writeFile`.

5. If the copying process is successful, it logs a "success" message to the console.

6. If an error occurs during the process, it catches the error and logs an error message to the console.

