function calculateParallelogramArea(){
    const base = getInputValueById('Parallelogram-base');
    // console.log('base value',base);

    const height = getInputValueById('Parallelogram-height');
    // console.log('height value',height);

    const area = base * height;
    console.log('area of the parallelogram',area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue= parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

// function calculateParallelogramArea(){
//     // const baseInput = document.getElementById('Parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);

//     const base = getParallelogramBase();
//     console.log(base);


// }

// // function getParallelogramBase(){
// //     const baseInput = document.getElementById('Parallelogram-base');
// //     const baseText = baseInput.value;
// //     const base = parseFloat(baseText);
// //     return base;

// }