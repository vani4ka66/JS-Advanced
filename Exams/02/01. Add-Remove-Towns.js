 function attachEvents() {
 
        $('#btnAdd').on('click', function () {
            let addValue = $('#newItem').val();
            console.log(addValue);
            let option = $('<option>');
            option.text(addValue);
            if(addValue != ''){
                $('#towns').append(option);     
            }
           
            $('#newItem').val('');
        });

        $('#btnDelete').on('click', function () {
            $('#towns option:selected').remove();
        })
    }
