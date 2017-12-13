   function attachEvents() {
   
        $('#btnDelete').on('click', function () {
            let found = false;
            let arr = $('#towns option');
            let townToDelete = $('#townName').val();
            for (let el of arr) {
                if(el.text === townToDelete){
                    found = true;
                    el.remove();
                }
            }
            $('#townName').val('');
            if(found){
                $('#result').append('<div>').text(`${townToDelete} deleted.`);

            }
            else{
                $('#result').append('<div>').text(`${townToDelete} not found.`);
            }
        })
    }
