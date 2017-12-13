
describe('Create List', function () {
    let list;

    beforeEach(function () {
        list = createList();
    });

    it('add with one value', function () {
        list.add(0);
        expect(list.toString()).to.equal('0')
    });

    it('add with more values', function () {
        list.add(0);
        list.add('item');
        expect(list.toString()).to.equal('0, item')
    });

    it('shift left', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.shiftLeft();
        expect(list.toString()).to.equal('2, 3, 1')
    });

    it('shift left with one parameter in array', function () {
        list.add(1);
        list.shiftLeft();
        expect(list.toString()).to.equal('1')
    });

    it('shift left with no parameters in array', function () {
        list.shiftLeft();
        expect(list.toString()).to.equal('')
    });

    it('shift left with no parameters in array', function () {
        list.shiftRight();
        expect(list.toString()).to.equal('')
    });

    it('shift right', function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.shiftRight();
        expect(list.toString()).to.equal('3, 1, 2')
    });

    it('shift right with one parameter in the array', function () {
        list.add(1);
        list.shiftRight();
        expect(list.toString()).to.equal('1')
    });

    it('swap correct', function () {
        list.add(10);
        list.add(60);
        list.add(50);
        list.swap(0, 2);
        expect(list.toString()).to.equal('50, 60, 10')
    });

    it('swap incorrect with two eqal indexes', function () {
        list.add(10);
        list.add(60);
        list.add(50);
        expect(list.swap(2, 2)).to.equal(false)
    });

    it('swap incorrect with string value one', function () {
        list.add(10);
        list.add(60);
        list.add(50);
        expect(list.swap('item', 2)).to.equal(false)
    });

    it('swap incorrect with string value two', function () {
        list.add(10);
        list.add(60);
        list.add(50);
        expect(list.swap(0, 'item')).to.equal(false)
    });

    it('swap incorrect with negative value one', function () {
        list.add(10);
        list.add(60);
        list.add(50);
        expect(list.swap(-1, 2)).to.equal(false)
    });

    it('with a negative first index, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.swap(-5, 1);
        expect(list.toString()).to.equal("one, two");
    });

    it('with a non integer first index, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.swap([4, 13], 1);
        expect(list.toString()).to.equal("one, two");
    });

    it('with first index equal to number of elements, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.add('three');
        list.swap(3, 1);
        expect(list.toString()).to.equal("one, two, three");
    });

    it('with a non integer second index, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.swap(0, [4, 13]);
        expect(list.toString()).to.equal("one, two");
    });


    it('with second index equal to number of elements, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.add('three');
        list.swap(0, 3);
        expect(list.toString()).to.equal("one, two, three");
    });

    it('with equal indexes, collection should stay the same', function () {
        list.add('one');
        list.add('two');
        list.add('three');
        list.swap(1, 1);
        expect(list.toString()).to.equal("one, two, three");
    });

    it('with zero first index, should return true', function () {
        list.add('one');
        list.add('two');
        list.add('three');
        expect(list.swap(0, 1)).to.equal(true)
    });

    it('with zero second indexes, should return true', function () {
        list.add('one');
        list.add('two');
        list.add('three');
        expect(list.swap(2, 0)).to.equal(true);
    });

    it('with a negative second index, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.swap(0, -1);
        expect(list.toString()).to.equal("one, two");
    });

    it('swap incorrect with negative value two', function () {
        list.add(10);
        list.add(60);
        list.add(50);
        expect(list.swap(0, -2)).to.equal(false)
    });

    it('swap incorrect with greather value than length one', function () {
        list.add(10);
        list.add(60);
        list.add(50);
        expect(list.swap(10, 2)).to.equal(false)
    });

    it('swap incorrect with greather value than length two', function () {
        list.add(10);
        list.add(60);
        list.add(50);
        expect(list.swap(0, 20)).to.equal(false)
    });

})
