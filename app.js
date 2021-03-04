const container = document.querySelector('.container');
const start = document.querySelector('.start');
const end = document.querySelector('.end');
const obstacles = document.querySelector('.obstacles');
const find = document.querySelector('.find-route');

let actions = {
  start: false,
  end: false,
  obstacle: false,
};

const colors = {
  black: '#000000',
  red: '#e63946',
};

function handleStart() {
  start.addEventListener('click', () => {
    start.classList.toggle('active');
    const startPoint = document.querySelectorAll('.cell');
    startPoint.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (!actions.start) {
          cell.classList.add('startPoint');
          actions.start = true;
        }
      });
    });
  });
}

function handleEnd() {
  end.addEventListener('click', () => {
    end.classList.toggle('active');
    const endPoint = document.querySelectorAll('.cell');
    endPoint.forEach((cell) => [
      cell.addEventListener('click', () => {
        if (!actions.end) {
          cell.classList.add('endPoint');
          actions.end = true;
        }
      }),
    ]);
  });
}

function handleObstacles() {
  obstacles.addEventListener('click', () => {
    obstacles.classList.toggle('active');
    const obstacle = document.querySelectorAll('.cell');
    obstacle.forEach((obstacle) => {
      obstacle.addEventListener('mousedown', (e) => {
        if (e.button !== 0) {
          actions.obstacle = false;
        } else {
          actions.obstacle = true;
        }
      });
      obstacle.addEventListener('mousemove', () => {
        if (actions.obstacle) {
          obstacle.classList.add('drawObstacles');
        }
      });
      window.addEventListener('mouseup', () => {
        if (actions.obstacle) {
          actions.obstacle = false;
        }
      });
    });
  });
}

function generateCells() {
  for (let col = 1; col <= 400; col++) {
    container.innerHTML += `<div class='cell'></div>`;
  }
}

const findRoute = () => {
  const cells = document.querySelectorAll('.cell');

  const x = [];

  find.addEventListener('click', () => {
    for (let i = 0; i < cells.length; i++) {
      x.push(cells[i].classList.add('path'));
    }
  });

  x.map((arata) => {
    return console.log(arata);
  });
};

generateCells();
handleStart();
handleEnd();
handleObstacles();
findRoute();
