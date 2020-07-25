var calc = document.querySelector('#calculator');
for(var i = 0; i < 3; i++)
{
    var row = document.createElement("div");
    row.className = "row";
    row.id = i;
    for(var j = 1; j<=3; j++)
    {
        var button = document.createElement("div");
        button.className = "button";
        button.id = 3*i + j;
        button.innerText = button.id.toString();
        row.append(button);
    }
    calc.append(row);
}