var headings = ['When', 'Who', 'Description'];
var data = [ {
   "when" : "2 minutes ago",
   "who" : "Jill Dupre",
   "description" : "Created new account"
},
{
   "when" : "1 hour ago",
   "who" : "Lose White",
   "description" : "Added fist chapter"
},
{
   "when" : "2 hours ago",
   "who" : "Jordan Whash",
   "description" : "Created new account"
} ];

var Heading = React.createClass({
	render: function(){
		return <th>{this.props.heading}</th>
	}
});

var Row = React.createClass({
	render: function(){
		return <tr>
			<td>{this.props.changeSet.when}</td>
			<td>{this.props.changeSet.who}</td>
			<td>{this.props.changeSet.description}</td>
		</tr>;
	}
});

var Headings = React.createClass({
	render: function(){
	    var headings = this.props.headings.map(function(heading){
	        return <Heading heading={heading} />
	    });
		return <thead><tr>{headings}</tr></thead>
	}
});

var Rows = React.createClass({
	render: function(){
		var rows = this.props.changeSets.map(function(changeSet){
		    return <Row changeSet={changeSet} />
		});
		return <tbody>{rows}</tbody>
	}
});

var App = React.createClass({
    render: function(){
        return <div>
        	<h1>{this.props.title}</h1>
            <table className="table">
              <Headings headings={this.props.headings} />
              <Rows changeSets={this.props.data} />
            </table>
        </div>;
    }
});
ReactDOM.render(<App title='Recent changes' headings={headings} data={data} />, document.getElementById('container'));