document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.otp-input');

    const moveToNextInput = (currentIndex) => {
        if (currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    };

    const moveToPrevInput = (currentIndex) => {
        if (currentIndex > 0) {
            inputs[currentIndex - 1].focus();
        }
    };

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length > 1) e.target.value = value.charAt(0);
            if (e.target.value !== '') moveToNextInput(index);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '') moveToPrevInput(index);
        });
    });
});
