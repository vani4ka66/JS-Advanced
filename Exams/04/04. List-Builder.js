 function listBuilder(selector) {
 
        // TODO: return the list builder }
        return{
            createNewList: function () {
                let ul = $('<ul>');
                $(selector).empty();
                $(selector).append(ul);
            },

            addItem: function (text) {
                let li = $('<li>');
                li.text(text);
                let btnUp = $('<button>Up</button>').click(this.upFunc);
                let btnDown = $('<button>Down</button>').click(this.downFunc);
                li.append(btnUp)
                li.append(btnDown);
                $(selector + ' ul').append(li);
            },

            upFunc: function () {
                let row = $(this).parent();
                row.insertBefore(row.prev());
            },

            downFunc: function () {
                let row = $(this).parent();
                row.insertAfter(row.next());
            }
        }
    }
