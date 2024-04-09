window.onload = function() {
    const heightSelect = document.getElementById("heightSelect");
    const generateButton = document.getElementById("generateButton");
    const generatedDiv = document.getElementById("generatedDiv");

    function generateDiv() {
        const selectedHeight = heightSelect.value + "px";
        const generatedHTML = <div id="generatedBlock" style="background-color: blue; width: 30px; height: ${selectedHeight}; position: relative;"></div>;
        generatedDiv.innerHTML = generatedHTML;

        const moveLeftButton = document.createElement("button");
        moveLeftButton.textContent = "Посунути вліво";
        moveLeftButton.addEventListener("click", function() {
            moveBlock(-20);
        });

        const moveRightButton = document.createElement("button");
        moveRightButton.textContent = "Посунути вправо";
        moveRightButton.addEventListener("click", function() {
            moveBlock(20);
        });

        generatedDiv.appendChild(moveLeftButton);
        generatedDiv.appendChild(moveRightButton);
    }

    generateButton.addEventListener("click", generateDiv);

    function moveBlock(offset) {
        const generatedBlock = document.getElementById("generatedBlock");
        const currentLeft = parseInt(window.getComputedStyle(generatedBlock).left || 0);
        generatedBlock.style.left = (currentLeft + offset) + "px";
    }
    generateDiv();
};
