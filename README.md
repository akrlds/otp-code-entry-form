# OTP Code Entry Form

A simple yet functional JavaScript-based OTP (One-Time Password) code entry form with auto-focus, validation, and auto-submission. This project provides a seamless user experience for entering 6-digit OTP codes, typically used for authentication or verification processes.

## Features
- **Automatic OTP Code Generation**: Generates a random 6-digit OTP upon page load.
- **Auto-Focus Navigation**: Moves focus to the next input field after each digit entry.
- **Backspace Handling**: Navigates back when deleting digits.
- **Tab Handling**: Navigates forward when pressing the tab key.
- **Validation and Submission**: Automatically submits and checks the OTP against the generated code.
- **Retry Option**: Allows the user to retry entering the OTP if incorrect.

## Live Demo
Try it out [here](https://akrlds.github.io/otp-code-entry-form/).

## Installation & Usage
1. Clone or download the repository:
   ```sh
   git clone https://github.com/akrlds/otp-code-entry-form.git
   ```
2. Open `index.html` in your browser.
3. Enter the displayed OTP code into the input fields to test the functionality.

## How It Works
1. Upon loading, the script generates a random 6-digit OTP and displays it on the page.
2. Users enter the OTP digit by digit, with auto-focus guiding them through the input fields.
3. When all six digits are entered, the script validates the OTP:
   - If correct: Displays a success message.
   - If incorrect: Displays an error message with a retry button.

## Improvements & Future Enhancements
- **Server-Side Validation**: Move OTP generation and validation to a backend for real-world use.
- **Support for Different OTP Lengths**: Allow configurable OTP length.
- **UI Enhancements**: Improve accessibility and styling.

## License
This project is open-source and available under the MIT License.