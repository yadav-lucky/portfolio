// Assuming you have a collection of buttons and the body element
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        // console.log(e.target);
        
        const validColors = ['orange', 'white', 'green', 'yellow'];
         
        if (validColors.includes(e.target.id)) {
            // Remove any existing color classes from the body
            validColors.forEach(color => body.classList.remove(color));
            // console.log(body)
          body.classList.add(e.target.id);
        }
        buttons.forEach((btn) => {
            if (btn !== e.target) {
                btn.classList.remove('active');
            }
        });
    });
});
