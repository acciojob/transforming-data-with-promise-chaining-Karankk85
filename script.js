document.getElementById('btn').addEventListener('click', function() {
    const inputNumber = parseFloat(document.getElementById('ip').value);
    
    if (isNaN(inputNumber)) {
        alert("Please enter a valid number.");
        return;
    }

    // Initial Promise (2 seconds)
    new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('output').textContent = `Result: ${inputNumber}`;
            resolve(inputNumber);
        }, 2000);
    })
    // Second Promise (Multiply by 2 after 2 seconds)
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                result = result * 2;
                document.getElementById('output').textContent = `Result: ${result}`;
                resolve(result);
            }, 2000);
        });
    })
    // Third Promise (Subtract 3 after 1 second)
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                result = result - 3;
                document.getElementById('output').textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Fourth Promise (Divide by 2 after 1 second)
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                result = result / 2;
                document.getElementById('output').textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Fifth Promise (Add 10 after 1 second)
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                result = result + 10;
                document.getElementById('output').textContent = `Final Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .catch(err => console.error("Error:", err));
});
