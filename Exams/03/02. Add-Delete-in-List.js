describe('List Function', function () {
    let myList = list;

    beforeEach(function () {
        myList = list;
    });

    it('add corectly', function () {
        myList.add('0');
        expect(list.toString()).to.equal('0');
    });

    it('add corectly', function () {
        myList.add('0');
        myList.add('1')
        expect(list.toString()).to.equal('0, 1');
    });

    it('delete corectly', function () {
        myList.add('2');
        myList.add('3')
        myList.delete(0)
        expect(list.toString()).to.equal('3');
    });

    it('string as parameter for delete', function () {
        myList.add('2');
        myList.add('3')
        myList.delete('item')
        expect(myList.delete('item')).to.equal(undefined);
    });

    it('negative number as parameter for delete', function () {
        myList.add('2');
        myList.add('3')
        //myList.delete('item')
        expect(myList.delete(-1)).to.equal(undefined);
    });

    it('negative number as parameter for delete', function () {
        myList.add('2');
        myList.add('3')
        //myList.delete('item')
        expect(myList.delete(10)).to.equal(undefined);
    });
})
