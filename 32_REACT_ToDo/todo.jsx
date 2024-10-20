class Task extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.newText = React.createRef();
        this.state = {isEdit: false}
    }

    handleClickSave = () => {
        let text = this.newText.current.value;
        this.props.taskEdit(this.props.index, text);
        this.setState({isEdit: !this.state.isEdit});
    }

    handleClickEdit = function () {
        this.setState({isEdit: !this.state.isEdit})
        //alert("Button Edit clicked" + this.props.children)
    }//.bind(this);

    handleClickRemove = () => {
        /* alert("Button Remove clicked" + this.props.children)*/
        this.props.taskRemove(this.props.index)
    };

    renderEdit = () => {
        return (
            <div className={'box'}>
                <textarea ref={this.newText} defaultValue={this.props.children}></textarea>
                <button className={'btn success'} onClick={this.handleClickSave}>Save</button>
            </div>
        )
    }

    renderNorm = () => {
        return (
            <div className={'box'}>
                {/*<div>{this.props.task}</div>*/}
                <div>{this.props.children}</div>
                <button className={'btn light'} onClick={this.handleClickEdit}>Edit</button>
                <button className={'btn red'} onClick={this.handleClickRemove}>Remove</button>
            </div>
        )
    }


    render() {
        if (this.state.isEdit)
            return this.renderEdit()
        else
            return this.renderNorm()
    }
}

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks:[]} //  ["Olka, Hi!", "Drink Beer", "Happy Birthday", "Do HW"]
    }

    handleClickAddTask = ()=>{
        let arr = [...this.state.tasks]
        arr.push("New Task")
        this.setState({tasks: arr})
    };

    taskRemove = index => {
        let arr = [...this.state.tasks]
        arr.splice(index, 1)
        this.setState({tasks: arr})
    }

    taskEdit = (index, text) => {
        let arr = [...this.state.tasks]
        arr[index] = text
        this.setState({tasks: arr})
    }

    render() {
        return (
            <div className={'field'}>
                <button className={"btn new"} onClick={this.handleClickAddTask}>Add task</button>
                {this.state.tasks.map((item, index) =>
                    <Task key={index} taskEdit={this.taskEdit} taskRemove={this.taskRemove}
                          index={index}>{item}</Task>)} {/*<Task key={index}>{item}</Task*/}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TaskList/>)




