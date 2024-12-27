const grid = Object.assign(document.createElement('div'), { className: 'grid' });
const slider = Object.assign(document.createElement('input'), {
  type: 'range',
  className: 'slider',
  min: 0,
  max: 7, // 8 steps
  value: 0,
  step: 1
});

document.body.appendChild(grid);
document.body.appendChild(slider);

// Predefined grid sizes (columns x rows)
const gridSizes = [
  { columns: 4, rows: 3 }, // Grid size 0: 4x3
  { columns: 6, rows: 5 }, // Grid size 1: 6x5
  { columns: 8, rows: 6 }, // Grid size 2: 8x6
  { columns: 10, rows: 7 }, // Grid size 3: 10x7
  { columns: 12, rows: 8 }, // Grid size 4: 12x8
  { columns: 16, rows: 9 }, // Grid size 5: 16x9
  { columns: 20, rows: 12 }, // Grid size 6: 20x12
  { columns: 30, rows: 15 }  // Grid size 7: 30x15
];

function fillGrid() {
  const sizeIndex = slider.value;
  const gridSize = gridSizes[sizeIndex];

  grid.innerHTML = ''; // Clear any previous cells
  const { columns, rows } = gridSize;

  // Set grid template columns based on selected size
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  // Fill grid with the correct number of cells
  const totalCells = columns * rows;
  for (let i = 0; i < totalCells; i++) {
    const newDiv = Object.assign(document.createElement('div'), { className: 'cell' });
    newDiv.addEventListener('mouseenter', () => {
      newDiv.classList.add('hovered');
    });
    grid.appendChild(newDiv);
  }
}

// Update grid when slider value changes
slider.addEventListener('input', () => {
  fillGrid();
});

// Initialize grid
fillGrid();

// modified with chromebook
