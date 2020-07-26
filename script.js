var calc = document.querySelector('#numPad');
for(var i = 0; i < 3; i++)
{
    var row = createRow(i);
    for(var j = 1; j<=3; j++)
    {
        var button = createButton(3*i + j);
        row.append(button);
    }
    calc.append(row);
}

function createRow(rowNum)
{
    var row = document.createElement("div");
    row.className = "row";
    row.id = rowNum;
    return row;
}

function createButton(buttonSymbol)
{
    var button = document.createElement("div");
    button.className = "button";
    button.id = buttonSymbol;
    button.innerText = button.id.toString();
    return button;
}


var row = createRow(3);
var button = createButton(0);
row.append(button);

button = createButton(".");
row.append(button);

calc.append(row);

var buttons = document.querySelectorAll(".button");
var tbox = document.querySelector("#textbox");
var lastNum = true;
var input = 0;
var decimalRightCount = 0;
buttons.forEach((b) => {
    b.addEventListener('click',() =>{
        var factor = 10;
        if(b.id=="." && decimalRightCount == 0)
        {
            decimalRightCount++;
            return;
        }
        if(decimalRightCount > 0)
        {
            for(var i = 0; i < decimalRightCount; i++)
            {
                input = input*factor;
            }
            //console.log("59 "+input);
            input += parseInt(b.id);
            //console.log("61 "+input);
            for(var i = 0; i < decimalRightCount; i++)
            {
                input /= factor;
            }
            input = input.toFixed(decimalRightCount);
            decimalRightCount++;
        }
        else
        {
            input = input*factor + parseInt(b.id);
            tbox.innerText = input.toString();
        }
        console.log(input.toString());
    });
});