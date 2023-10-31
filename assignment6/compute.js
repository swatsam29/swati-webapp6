window.addEventListener("load", function () {
    let resultTable = document.getElementById("table-body");
    const urlParams = new URLSearchParams(window.location.search);
    const num1 = parseInt(urlParams.get("num1"));
    const num2 = parseInt(urlParams.get("num2"));
    let add = num1 + num2;
    let subtract = num1 - num2;
    let multiply = num1 * num2;
    let division = num1 / num2;

    let output = [
        { operation: `${num1}+${num2}`, result: add },
        { operation: `${num1}-${num2}`, result: subtract },
        { operation: `${num1}*${num2}`, result: multiply },
        { operation: `${num1}/${num2}`, result: division },
    ];

    output.forEach((item) => {
        let row = document.createElement("tr");
        let operationCol= document.createElement("td");
        let resultCol = document.createElement("td");
        operationCol.textContent = item.operation;
        resultCol.textContent = item.result;
        row.appendChild(operationCol);
        row.appendChild(resultCol);
        resultTable.appendChild(row);
    })

});