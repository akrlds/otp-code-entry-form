window.onload = function () {
    /* Clear the textboxes, generate a 6-digit code,
    print it, and focus on the first textbox. */

    clearTextBoxes();

    const generatedCode = generateCode();
    console.log("Generated Code: " + generatedCode);
    document.getElementById("codeHint").innerText = generatedCode;
    document.generatedCode = generatedCode;

    document.getElementById("textBox1").focus();

    attachEventListeners();
};

function generateCode() {
    /* Generate a random 6-digit code. */

    return Math.floor(100000 + Math.random() * 900000).toString();
}

function attachEventListeners() {
    /* Attach event listeners to the textboxes. */

    const textBoxes = document.querySelectorAll("input[type='text'][id^='textBox']");
    textBoxes.forEach((textBox, index) => {
        textBox.addEventListener('input', (event) => {
            handleInput(event, index, textBoxes);
        });

        textBox.addEventListener('keydown', (event) => {
            handleKeyDown(event, index, textBoxes);
        });

        textBox.addEventListener('focus', () => {
            moveCursorToEnd(textBox);
        });
    });
}

function handleInput(event, index, textBoxes) {
    /* Handle inputs for the textboxes. */

    const current = textBoxes[index];
    const next = textBoxes[index + 1];
    const prev = textBoxes[index - 1];

    if (event.data === null) {
        if (current.value === '') {
            if (prev) {

                prev.focus();
            }
        } else {
            current.value = '';
        }
    } else if (/^[0-9]$/.test(event.data)) {
        current.value = event.data;
        if (next) {
            next.focus();
        } else {
            submitForm();
        }
    } else {
        current.value = '';
    }
}

function handleKeyDown(event, index, textBoxes) {
    /* If backspace or delete is pressed and the textbox is empty,
    focus on the previous one. Otherwise, just clear the value. */

    const current = textBoxes[index];
    const prev = textBoxes[index - 1];

    if (event.key === 'Backspace' || event.key === 'Delete') {
        if (current.value === '') {
            event.preventDefault();
            if (prev) {
                prev.focus();
            }
        } else {
            current.value = '';
            event.preventDefault();
        }
    }
}

function moveCursorToEnd(element) {
    element.setSelectionRange(0, element.value.length);
}

function submitForm() {
    /* Get the entered code from textboxes,
    check the validity and perform actions. */

    const enteredCode = getEnteredCode();

    if (enteredCode === document.generatedCode) {
        document.getElementById("retryButton").style.display = "";
        document.getElementById("labelResult").innerText = "Success!";
        console.log("Success!");
    } else {
        document.getElementById("retryButton").style.display = "none";
        document.getElementById("labelResult").innerText = "Wrong code!";
        console.log("Wrong code!");
    }
}

function getEnteredCode() {
    const textBoxes = document.querySelectorAll("input[type='text'][id^='textBox']");
    const enteredCode = Array.from(textBoxes)
        .map((textBox) => textBox.value)
        .join("");
    return enteredCode;
}

function clearTextBoxes() {
    const textBoxes = document.querySelectorAll("input[type='text'][id^='textBox']");
    textBoxes.forEach((textBox, index) => {
        if (index === 0) {
            textBox.focus();
        }
        textBox.value = "";
    });
}

