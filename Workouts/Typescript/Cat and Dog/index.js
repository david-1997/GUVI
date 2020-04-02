var Cat = /** @class */ (function () {
    function Cat(catName) {
        this.name = catName;
        var catImage = document.createElement("img");
        catImage.src = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        catImage.onclick = this.catOnClick();
        document.body.appendChild(catImage);
    }
    Cat.prototype.catOnClick = function () {
        var _this = this;
        return function () {
            alert(_this.name + " is clicked");
        };
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog(dogName) {
        this.name = dogName;
        var dogImage = document.createElement("img");
        dogImage.src = "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg";
        dogImage.onclick = this.dogOnClick();
        document.body.appendChild(dogImage);
    }
    Dog.prototype.dogOnClick = function () {
        var _this = this;
        return function () {
            alert(_this.name + " is clicked");
        };
    };
    return Dog;
}());
var createCat = function () {
    alert("hi");
    var name = prompt("Cat name?");
    new Cat(name);
};
var createDog = function () {
    alert("hello");
    var name = prompt("Dog name?");
    new Dog(name);
};
