### Demo ADDING STATE
    var HelloUser = React.createClass({
      getInitialState: function() {
        return {
          username: 'Frederik'
        }
      },

      render: function(){
        return (
          <h3>
            Hello {this.state.username}!
          </h3>
        )
      }
    });

    React.render(<HelloUser />, document.getElementById('app'));

### Demo EDITING STATE
    var HelloUser = React.createClass({
      getInitialState: function() {
        return {
          username: 'Frederik'
        }
      },

      render: function(){
        return (
          <div>
            <div>Hello {this.state.username} !</div>
            <input type="text" onChange={this._handlechange} value={this.state.username}/>
          </div>
        )
      },

      _handlechange: function(e) {
        this.setState({username: e.target.value})
      }
    });

    React.render(<HelloUser />, document.getElementById('app'));

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


### Demo PASSING STATE PROPS
    var EmployeeContainer = React.createClass({
      getInitialState: function() {
        return {
          name: 'Euricom',
          employees: ['Peter', 'Kevin', 'Yannick']
        }
        
      },

      render: function() {
        return (
          <div>
            <h1>{this.state.name}</h1>
            <List employees={this.state.employees} />
          </div>
        )
      }
    });

    var List = React.createClass({
      render: function() {
        return (
          <div>
            <h3>Employees</h3>
            <ul>
              {this._renderEmployees()}
            </ul>
          </div>
        )
      },

      _renderEmployees: function() {
        return (
          this.props.employees.map(function(employee) {
            return <li>{employee}</li>
          })
        )
      }
    });

    React.render(<EmployeeContainer />, document.getElementById('app'));

### Demo PASSING FUNCTIONS PROPS
    var EmployeeContainer = React.createClass({
      getInitialState: function() {
        return {
          name: 'Euricom',
          employees: ['Peter', 'Kevin', 'Yannick']
        }
        
      },

      render: function() {
        return (
          <div>
            <h1>{this.state.name}</h1>
            <AddEmployee addNew={this._addNewEmployee}/>
            <List employees={this.state.employees} />
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

    var List = React.createClass({
      render: function() {
        return (
          <div>
            <h3>Employees</h3>
            <ul>
              {this._renderEmployees()}
            </ul>
          </div>
        )
      },

      _renderEmployees: function() {
        return (
          this.props.employees.map(function(employee) {
            return <li>{employee}</li>
          })
        )
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
            <div>Add a new employee</div>
            <input type="text" value={this.state.newEmployee} onChange={this._handleChange}/>
            <button className="btn btn-default" onClick={this._addNewEmployee}>Add new</button>
          </div>
        )
      },
      _handleChange: function(e) {
        this.setState({
          newEmployee: e.target.value
        })
      },
      _addNewEmployee: function() {
        this.props.addNew(this.state.newEmployee);
        this.setState({newEmployee:''});
      }
    });

    React.render(<EmployeeContainer />, document.getElementById('app'));
      