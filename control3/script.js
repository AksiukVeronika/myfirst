document.addEventListener('DOMContentLoaded', () => {
    const op1Input = document.getElementById('op1');
    const op2Input = document.getElementById('op2');
    const resultOutput = document.getElementById('result');
    const infoDiv = document.getElementById('info');

    const operations = {
        'add-button': (a, b) => a + b,
        'sub-button': (a, b) => a - b,
        'mul-button': (a, b) => a * b,
        'div-button': (a, b) => b === 0 ? displayError('Cannot divide by 0') : a / b,
        'log-button': (a) => {
            if (a <= 0) {
                displayError('Operand 1 must be greater than 0');
                return;
            }
            fetchInfo('Data/json/log.json');
            return Math.log(a);
        },
        'sin-button': (a) => {
            fetchInfo('Data/json/sin.json');
            return Math.sin(degreesToRadians(a));
        },
        'tan-button': (a) => {
            fetchInfo('Data/json/tan.json');
            return Math.tan(degreesToRadians(a));
        }
    };

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const operation = operations[button.id];
            if (!operation) return;

            const op1 = parseFloat(op1Input.value);
            const op2 = button.id === 'add-button' || button.id === 'sub-button' || button.id === 'mul-button' || button.id === 'div-button' ? parseFloat(op2Input.value) : null;

            if (isNaN(op1) || (op2 !== null && isNaN(op2))) {
                displayError('Invalid input');
                return;
            }

            const result = op2 !== null ? operation(op1, op2) : operation(op1);
            if (result !== undefined) {
                displayResult(result);
            }
        });
    });

    function degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    function displayResult(result) {
        resultOutput.textContent = 'Result: ' + result;
        infoDiv.innerHTML = '';
    }

    function displayError(error) {
        resultOutput.textContent = 'Error: ' + error;
        infoDiv.innerHTML = '';
        setTimeout(() => {
            resultOutput.textContent = '';
        }, 3000);
    }

    function fetchInfo(fileName) {
        fetch(fileName)
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="Data/images/${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching info:', error));
    }
});
