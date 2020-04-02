class Cat {
    name;
    
    constructor(catName)
    {
        this.name=catName;
        let catImage=document.createElement("img");
        catImage.src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        catImage.onclick=this.catOnClick();
        document.body.appendChild(catImage);
    }

    catOnClick() {
        return() => {
            alert(this.name+" is clicked");
        }
    }
}

class Dog {
    name;
    
    constructor(dogName)
    {
        this.name=dogName;
        let dogImage=document.createElement("img");
        dogImage.src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg";
        dogImage.onclick=this.dogOnClick();
        document.body.appendChild(dogImage);
    }

    dogOnClick() {
        return() => {
            alert(this.name+" is clicked");
        }
    }
}

let createCat = () => {
    let name=prompt("Cat name?");
    new Cat(name);
}

let createDog = () => {
    let name=prompt("Dog name?");
    new Dog(name);
}