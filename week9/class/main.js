
function StudentFactory() {

}

function CarFactory(name, speed) {
    const changeName = (newName) => {
        name = newName;
    }
    const changeSpeed = (newSpeed) => {
        speed = newSpeed;
    }
    const getName = () => {
        return name;
    }
    const getSpeed = () => {
        return speed;
    }

    const obj = {
        getName : getName,
        getSpeed: getSpeed,
        changeName: changeName,
        changeSpeed: changeSpeed
    }
    return obj;
}

const tesla = CarFactory('Tesla S', '100');
console.log(tesla.getSpeed());
console.log(tesla.changeSpeed('180'));
console.log(tesla.getSpeed());

const nissan = CarFactory('Leaf', '120');
console.log(nissan.getSpeed());
console.log(tesla.getSpeed());
