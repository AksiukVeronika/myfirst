document.addEventListener('DOMContentLoaded', () => {
    const op1Input = document.getElementById('op1');
    const op2Input = document.getElementById('op2');
    const resultOutput = document.getElementById('result');
    const infoDiv = document.getElementById('info');

    const operationHandlers = {
        add: () => handleBinaryOperation((a, b) => a + b),
        subtract: () => handleBinaryOperation((a, b) => a - b),
        multiply: () => handleBinaryOperation((a, b) => a * b),
        divide: () => handleBinaryOperation((a, b) => b === 0 ? displayError('Cannot divide by 0') : a / b),
        log: () => handleUnaryOperation((a) => a <= 0 ? displayError('Operand 1 must be greater than 0') : Math.log(a), 'log.json'),
        sin: () => handleUnaryOperation((a) => Math.sin(degreesToRadians(a)), 'sin.json'),
        tan: () => handleUnaryOperation((a) => Math.tan(degreesToRadians(a)), 'tan.json')
    };

    document.querySelectorAll('button[data-operation]').forEach(button => {
        button.addEventListener('click', () => {
            const operation = button.getAttribute('data-operation');
            operationHandlers[operation]();
        });
    });

    function handleBinaryOperation(operation) {
        const op1 = parseFloat(op1Input.value);
        const op2 = parseFloat(op2Input.value);
        if (isNaN(op1) || isNaN(op2)) {
            displayError('Invalid input');
            return;
        }
        const result = operation(op1, op2);
        displayResult(result);
    }

    function handleUnaryOperation(operation, jsonFile) {
        const op1 = parseFloat(op1Input.value);
        if (isNaN(op1)) {
            displayError('Invalid input');
            return;
        }
        const result = operation(op1);
        displayResult(result);
        fetchInfo(jsonFile);
    }

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
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching info:', error));
    }
});
