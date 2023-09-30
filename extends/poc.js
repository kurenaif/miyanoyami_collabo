class Human {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    work() {
        console.log(this.name + "'s work")
        this.hp -= 1;
    }
}

class Mage extends Human {
    constructor(name, hp, mp){
        super(name, hp);
        this.mp = mp;
    }

    magic() {
        console.log(this.name + "'s magic");
        this.mp -= 1;
    }
}

let mage = new Mage("kurenaif", 10, 100)
mage.magic()