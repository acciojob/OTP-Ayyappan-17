document.addEventListener('DOMContentLoaded', () => {
    // Select all the OTP input fields
    const inputs = document.querySelectorAll('.otp-input');

    // Function to move focus to the next input field
    const moveToNextInput = (currentIndex) => {
        if (currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    };

    // Function to move focus to the previous input field
    const moveToPrevInput = (currentIndex) => {
        if (currentIndex > 0) {
            inputs[currentIndex - 1].focus();
        }
    };

    // Attach event listeners to each input field
    inputs.forEach((input, index) => {
        // Handle input event (when a character is typed/pasted)
        input.addEventListener('input', (e) => {
            const value = e.target.value;

            // Clear the value to ensure only one character is present, just in case of paste
            if (value.length > 1) {
                e.target.value = value.charAt(0);
            }

            // Move to the next input only if a character was entered
            if (e.target.value !== '') {
                moveToNextInput(index);
            }
            
            // Log the complete code (optional, for testing)
            // checkFullCode();
        });

        // Handle keydown event (for Backspace navigation)
        input.addEventListener('keydown', (e) => {
            // Check if the key pressed is Backspace (keyCode 8 or key 'Backspace')
            if (e.key === 'Backspace' && input.value === '') {
                // If the field is empty and backspace is pressed, move to the previous field
                moveToPrevInput(index);
            }
        });
    });

    // You can add a function here to check the full code once all inputs are filled
    function checkFullCode() {
        let code = '';
        inputs.forEach(input => {
            code += input.value;
        });
        
        if (code.length === inputs.length) {
            console.log('Full OTP Code Entered:', code);
            // Here you would typically send the code to your server for verification
        }
    }
});