import "./style.css";
import Element from "./helpers/createElement";
import { columns, gridSquares, rows } from "./constants";
import movePiece from "./helpers/movePiece";

const rootElement = document.getElementById("app");

const wrapper = document.createElement("div");

if (rootElement) {
	rootElement.appendChild(wrapper);
	wrapper.classList.add("wrapper");

	const grid = Element("div");
	grid.classList.add("grid");

	wrapper.appendChild(grid);

	for (const i in gridSquares) {
		const square = Element("div");
		square.classList.add("square");

		if (i === "0") {
			square.classList.add("blue");
		}
		if (i === 0 + columns + "") {
			square.classList.add("blue");
		}
		if (i === 0 + columns * 2 + "") {
			square.classList.add("blue");
		}
		if (i === 0 + columns * 3 + "") {
			square.classList.add("blue");
		}

		grid.appendChild(square);
	}

	const squares = Array.from(document.querySelectorAll(".square"));

	setInterval(() => {
		let i;
		const square = squares.find((el, idx) => {
			if (el.classList.contains("blue")) {
				i = idx;
				return true;
			}
		});

		if (square) square?.classList.remove("blue");

		if (typeof i == "number") {
			squares[+i + columns * 4].classList.add("blue");
      console.log({i})
		}
	}, 2000);

	document.addEventListener("keydown", e => {

		if (e.key === "ArrowRight") {
      movePiece('blue',squares,'right')
    }
		if (e.key === "ArrowLeft") {
      movePiece('blue',squares,'left')
    }
	});
}
