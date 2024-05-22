document.getElementById('calculate').addEventListener('click', function() {
    const dobInput = document.getElementById('dob').value;
    if (dobInput) {
        const dob = new Date(dobInput);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        const dayDiff = today.getDate() - dob.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        document.getElementById('age').innerText = `You are ${age} years old.`;
    } else {
        document.getElementById('age').innerText = 'Please enter your date of birth.';
    }
});
