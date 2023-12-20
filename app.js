class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => (this.setState({ todos: data })))
            .catch(error => console.error('Erreur de récupération des données:', error))            
    }
    render() {
        return (            
            <div>
                <div>
                <h1 className='text-center my-4'>Mon todolist</h1>
                <table className='table table-striped' style={{width: '80%', margin: 'auto'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITRE</th>
                            <th>COMPLETED</th>
                        </tr>
                    </thead>
                    <Tbody todos = {this.state.todos} />
                </table>                     
            </div>
            </div>
        );
    }
}

class Tbody extends React.Component{
    render(){
        return(
            <tbody>
                {this.props.todos.map((todo, index) => (
                    <tr>
                        <td>{index}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? 'true' : 'false'}</td>
                    </tr>                    
                ))}
            </tbody>
        )
    }
}
ReactDOM.render(<TodoList />, document.getElementById('root'));