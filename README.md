**Conway's Game of Life**

On a two-dimensional grid, cells are either alive or dead.

With a new generation:

1. Living cells with fewer than two alive neighbors die.
2. Living cells with more than three alive neighbors die.
3. A dead cell with exactly three living neighbors comes to life.

Simply open the index.html file within the repository directory and you should be good to go.

**About this:**

Written in Javascript.

*Warning: This is an incomplete and inefficient implementation. The default pattern (R-Pentomino) takes ~1000 generations to complete and will use lots of CPU resources.*

**To Do:**

1. Represent the game as not a nested set of arrays, but simply objects of alive cells at coordinate points.
2. Reimplement the game world as a HTML5 canvas element.
2. Create a UI for drawing initial grids and starting/stopping the game.
3. Use [this](http://www.drdobbs.com/jvm/an-algorithm-for-compressing-space-and-t/184406478) to make it more efficient.