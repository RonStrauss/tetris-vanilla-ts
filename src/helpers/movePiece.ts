import { columns } from "../constants";

export default (color: string, squares: Element[], direction: string) => {
	let i = 0;
	const square = squares.find((el, idx) => {
		if (el.classList.contains(color)) {
			i = idx;
			return true;
		}
		return false;
	});

    const dir = direction === "right" ? 0 : -1;
	const idx = +i + (1 + dir);
	const currentIndex = idx - dir

	if (square) {
		if (direction === "right" && i !== 0 && currentIndex % columns === 0) {
			return;
		}

		if (direction === "left" && (i == 0 || currentIndex % columns === 1)) {
			return;
		}


		square.classList.remove(color);
		squares[idx + dir].classList.add(color);

		squares[idx - (1 + dir) + columns * 1].classList.remove(color);
		squares[(idx + dir) + columns * 1].classList.add(color);

		squares[idx - (1 + dir) + columns * 2].classList.remove(color);
		squares[(idx + dir) + columns * 2].classList.add(color);

		squares[idx - (1 + dir) + columns * 3].classList.remove(color);
		squares[(idx + dir) + columns * 3].classList.add(color);
	}
};
