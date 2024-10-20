function Car(name, brand, year, regNumber) {
    this.name = name;
    this.brand = brand;
    this.year = year;
    this.regNumber = regNumber;
}

//Cars array
const toyotaCars = [
    new Car("Corolla","Toyota",2012,12345),
    new Car("RAV-4","Toyota",2015,23456),
    new Car("Yaris","Toyota",2019,45678),
    new Car("Camry","Toyota",2018,34567),
]

const nissanCars = [
    new Car("Patrol","Nissan",2012,12345),
    new Car("Pathfinder","Nissan",2015,23456),
    new Car("X-Trial","Nissan",2019,45678),
    new Car("Qashqai","Nissan",2018,34567),
]

class CarClass extends React.Component{
    render() {
        return (
            <div className="car-card">
                <p>Register Number: {this.props.car.regNumber}</p>
                <p>Model: {this.props.car.name}</p>
                <p>Manufacturer: {this.props.car.brand}</p>
                <p>Year: {this.props.car.year}</p>
            </div>
        );
    }
}

/*function CarFunc(props){
    return (
        <div className="car-card">
            <p>Register Number: {props.car.regNumber}</p>
            <p>Model: {props.car.name}</p>
            <p>Manufacturer: {props.car.brand}</p>
            <p>Year: {props.car.year}</p>
        </div>
    );
}*/
function CarFunc(props){
    const {regNumber, name, brand, year} = props.car;
    return (
        <div className="car-card">
            <p>Register Number: {regNumber}</p>
            <p>Model: {name}</p>
            <p>Manufacturer: {brand}</p>
            <p>Year: {year}</p>
        </div>
    );
}
function App() {
    return (
        <div className="app">
            {toyotaCars.map((car, index) => <CarClass car={car} key={index}/>)}
            {nissanCars.map(car =>          <CarFunc  car={car} key={car.regNumber}/>)}
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));