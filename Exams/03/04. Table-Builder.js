solved 66%

  function tableBuilder(selector) {
        // TODO: return { … }
        return{
            createTable: function(colnames){
                let table = $('<table>');
                let tr = $('<tr>');
                for (let i = 0; i < colnames.length; i++) {
                    let th = $(`<th>${colnames[i]}</th>`)
                    tr.append(th);
                }
                tr.append('<th>Action</th>');
                table.append(tr);
                $(selector).append(table);
            },


            fillData: function(dataRows){
                for (let dataRow of dataRows) {
                    let row = $('<tr>');
                    for (let el of dataRow) {
                        row.append($(`<td>${el}</td>`));
                    }

                    let button = $('<button>Delete</button>');
                    button.click(function () {
                        $(this).parent().parent().remove();
                    });
                    row.append($('<td>').append(button));
                    $(selector + " table").append(row);

                }
            }
        }
    }
