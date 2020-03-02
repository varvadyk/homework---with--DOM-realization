const main = document.getElementById("main_box");
const value = 25;
const code_color = 256;

function generateBlocks() {
	main.textContent = "";
	for (let i = 0; i < value; i++) {
		const child_block = document.createElement("div");
		child_block.classList.toggle("square");
		child_block.style.background = `rgb(${generateColor()},${generateColor()},${generateColor()})`;
		main.append(child_block);
	}
}

function generateColor() {
	return Math.floor(Math.random() * code_color);
}
const generateBlocksInterval = () => {
	timer = setInterval(() => {
		generateBlocks();
	}, 1000);
};

generateBlocksInterval();
setTimeout(() => {
	clearInterval(timer)
}, 6000);