document.addEventListener("DOMContentLoaded", function () 
{
    const buttons = document.querySelectorAll('.button');
    const outputScreen = document.getElementById('output-screen');
    let expression = '';
    buttons.forEach(button => 
        {
        button.addEventListener('click', function (){
            const value = this.textContent;
            if (value === '=') 
            {
                try 
                {
                    const result = eval(expression);
                    outputScreen.textContent = result;
                    expression = result.toString();
                } 
                catch (error) 
                {
                    outputScreen.textContent = 'Error';
                    expression = '';
                }
            } 
            else 
            {
                expression += value;
                outputScreen.textContent = expression;
            }
        });
    });
});
