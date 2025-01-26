const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height. the height provided by you ${height} is not valid.`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        weight.innerHTML = `Please give a valid weight. the weight provided by you ${weight} is not valid.`;
    }else {
            const BMI = ((weight)/((height*height )/10000));
            // debugger
            if(BMI<18.6){
                result.innerHTML = `Your BMI is ${BMI} & you are under weight`;
                document.getElementById('result').style.color="yellow";
            } else if(18.6<= BMI && BMI <24.9){
                result.innerHTML = `Your BMI is ${BMI} & you are fit.`;
                document.getElementById('result').style.color="green";
            } else {
                result.innerHTML = `Your BMI is ${BMI} & you are Overweight.`;
                document.getElementById('result').style.color="red";
            }
            document.querySelector('#height').value="";
            document.querySelector('#weight').value=""
        }
    }
)
