// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
interface PlayerData<Game, Hours> {
  game: Game;
  hours: Hours;
  server: string;
}

// interface Hours {
//   total: number;
//   inMenu: number;
// }

// interface PlayerData {
//   game: string | number;
//   hours: string | number | hours;
//   server: string;
// }

const player1: PlayerData<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: PlayerData<string, object> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

enum FiguresNames {
  Rect = "rect",
  Circle = "circle",
  Triangle = "triangle",
  Line = "line",
}

interface IFigure {
  name: FiguresNames;
}

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

function calculateAmountOfFigures<T extends IFigure>(
  figure: T[]
): AmountOfFigures {
  const amount: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  figure.forEach((fig) => {
    switch (fig.name) {
      case FiguresNames.Rect:
        amount.squares += 1;
        break;
      case FiguresNames.Triangle:
        amount.triangles += 1;
        break;
      case FiguresNames.Circle:
        amount.circles += 1;
        break;
      default:
        amount.others += 1;
    }
  });

  return amount;
}

interface ICustomData extends IFigure {
  data?: {};
}

const data: ICustomData[] = [
  {
    name: FiguresNames.Rect,
    data: { a: 5, b: 10 },
  },
  {
    name: FiguresNames.Rect,
    data: { a: 6, b: 11 },
  },
  {
    name: FiguresNames.Triangle,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: FiguresNames.Line,
    data: { l: 15 },
  },
  {
    name: FiguresNames.Circle,
    data: { r: 10 },
  },
  {
    name: FiguresNames.Circle,
    data: { r: 5 },
  },
  {
    name: FiguresNames.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: FiguresNames.Triangle,
  },
];

console.log(calculateAmountOfFigures(data));
