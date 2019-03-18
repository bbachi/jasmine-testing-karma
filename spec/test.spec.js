var Name = function() {}

Name.prototype.setName = function(name) {
    this.name = name;
}

Name.prototype.getName = function() {
    return this.name;
}

Name.prototype.toUppCase = function() {
    return this.name.toUpperCase();
}

Name.prototype.toLowCase = function() {
    return this.name.toLowerCase();
}

Name.prototype.getFirstName = function() {
    return this.name.split(' ')[0];
}

Name.prototype.getLastName = function() {
    return this.name.split(' ')[1];
}

describe('Name', function(){
    var name;

    beforeEach(function(){
        name = new Name();
        name.setName("First Last")
    })

    it('Should display full name', function(){
        var result = name.getName();

        expect(result).toBe("First Last");
    })

    it('Should display name in uppercase', function(){
        var result = name.toUppCase();

        expect(result).toBe("FIRST LAST");
    })

    it('Should display name in lowercase', function(){
        var result = name.toLowCase();

        expect(result).toBe("first la");
    })

    it('Should display only first name', function(){
        var result = name.getFirstName();

        expect(result).toBe("First");
    })

    it('Should display only last name', function(){
        var result = name.getLastName();

        expect(result).toBe("Last");
    })
})
