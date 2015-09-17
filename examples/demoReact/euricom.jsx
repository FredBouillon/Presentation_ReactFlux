// euricom.jsx
var EmployeeContainer = React.createClass({
	getInitialState: function() {
		return {
			company: 'Euricom',
			employees: ['Peter', 'Niels', 'Kevin']
		}
	},

	render: function() {
		return (
			<div>
				<h1>{this.state.company}</h1>
				<AddEmployee addNew={this._addNewEmployee}/>
				<EmployeeList employees={this.state.employees}/>
			</div>
		)
	},

	_addNewEmployee: function(newEmployee) {
		if (newEmployee) {
			this.setState({
				employees: this.state.employees.concat(newEmployee)
			})
		}
	}
});

var AddEmployee = React.createClass({
	getInitialState: function() {
		return {
			newEmployee: ''
		}		
	},

	render: function() {
		return (
			<div>
				<div>Add new employee</div>
				<input type="text" value={this.state.newEmployee} onChange={this._changeHandler}/>
				<button onClick={this._addNewEmployee}>add new</button>
			</div>
		)
	},

	_addNewEmployee:function() {
		this.props.addNew(this.state.newEmployee);
		this.setState({
			newEmployee: ''
		})
	},

	_changeHandler: function(e) {
		this.setState({
			newEmployee: e.target.value
		})
	}
})


var EmployeeList = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Employees</h3>
				<ul>
					{this._renderItems()}
				</ul>				
			</div>
		)
	},

	_renderItems: function() {
		return this.props.employees.map(function(employee) {
			return <li>{employee}</li>
		})
	}
})

React.render(<EmployeeContainer />, document.getElementById('app'));