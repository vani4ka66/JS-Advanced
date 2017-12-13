 function solve(selector) {
 
        $(selector).on('click', function () {
            let div = $('<div id="summary">');
            let h2 = $('<h2>');
            h2.text('Summary');
            div.append(h2);
            let p = $('<p>');
            div.append(p);
            let strongs = $('#content strong').text();
            p.text(strongs);
            let wrapper = $('#content').parent();
            $(wrapper).append(div);
        })

    }
