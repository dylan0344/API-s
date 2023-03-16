let object = {
    "page":1,
    "records":32,
    "amount_pages":2,
    "total_records":46,
    "products":
    [
        {
            "id":1,
            "naam":"Henk",
            "adres":"2b"
        },
        {
            "id":2,
            "naam":"Henk",
            "adres":"2b"
        },
        {
            "id":3,
            "naam":"Henk",
            "adres":"2b"
        }
    ],
};

///////////////////////////////////////////////////////////////////////////////////////

console.log(object);

function generateTable() {
    let table = document.createElement("TABLE");
        var th = document.createElement("TH");
            var td = document.createElement("TD");
                td.innerHTML = "col1";
            th.appendChild(td);
            var td = document.createElement("TD");
                td.innerHTML = "col2";
            th.appendChild(td);
            var td = document.createElement("TD");
                td.innerHTML =  "col3";
            th.appendChild(td);
        table.appendChild(th);


        array.forEach(createElement =>{

        });
        for (let index = 0; index < array.length; index++) {

        }

        var tr = document.createElement("TR");
            var td = document.createElement("TD");

            tr.appendChild(td);
        table.appendChild(tr);
    document.body.appendChild(table);

}
generateTable();