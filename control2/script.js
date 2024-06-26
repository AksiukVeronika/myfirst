(function (global) {
    function getRandomInt(max = 100) {
        return Math.floor(Math.random() * max);
    }

    function generateArray(n) {
        let array = [];
    for (let index = 0; index < n; index++) {
        array[index] = getRandomInt();
        }
        return array;
    }

    let array = generateArray(20);
    array.sort();
        document.getElementById("container").textContent = array;
           document.getElementById("generate-button").addEventListener("click", (event) => {
        if (
            !document.getElementById("select-container") &&
              document.getElementById("height").value
        ) {
            createContainer();
        } else {
            document.getElementById("select-container").remove();
              document.getElementById("В ліво").remove();
                document.getElementById("В право").remove();
            createContainer();
        }
    });
    function createContainer() {
        const div = document.createElement("div");
         div.id = "select-container";
          div.style.backgroundColor = "blue";
           div.style.position = "relative";
            div.style.width = "30px";
           div.style.height = `${document.getElementById("height").value}px`;
          document.body.appendChild(div);
        createButtons();
    }
    function createButtons() {
        const buttonLeft = document.createElement("button");
         const buttonRight = document.createElement("button");
          buttonLeft.id = "В ліво";
         buttonRight.id = "В право";
        buttonLeft.textContent = "В ліво";
        buttonRight.textContent = "В право";

        buttonLeft.addEventListener("click", (event) => {
            let leftVal = document.getElementById("select-container").style.left;
              leftVal = leftVal.replace("px", "");
              leftVal = Number(leftVal) - 20;
            document.getElementById("select-container").style.left = `${leftVal}px`;
        });
        buttonRight.addEventListener("click", (event) => {
            let rightVal = document.getElementById("select-container").style.left;
              rightVal = rightVal.replace("px", "");
               rightVal = Number(rightVal) + 20;
            document.getElementById("select-container").style.left = `${rightVal}px`;
        });

        document.body.appendChild(buttonLeft);
        document.body.appendChild(buttonRight);
    }
})(window);
