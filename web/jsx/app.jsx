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

var RecentChangesTable = React.createClass({
	render: function(){
		return <table className="recentChangesTable table">{this.props.children}</table>
	}
});

RecentChangesTable.Heading = React.createClass({
	render: function(){
		return <th>{this.props.heading}</th>
	}
});

RecentChangesTable.Row = React.createClass({
	render: function(){
	    var rowStyle = {backgroundColor: 'aliceblue'};
		return <tr style={rowStyle}>
			<td>{this.props.changeSet.when}</td>
			<td>{this.props.changeSet.who}</td>
			<td>{this.props.changeSet.description}</td>
		</tr>;
	}
});

RecentChangesTable.Headings = React.createClass({
	render: function(){
	    var headings = this.props.headings.map(function(heading, index){
	        return <RecentChangesTable.Heading key={index} heading={heading} />
	    });
		return <thead><tr>{headings}</tr></thead>
	}
});

RecentChangesTable.Rows = React.createClass({
	render: function(){
		var rows = this.props.changeSets.map(function(changeSet, index){
		    return <RecentChangesTable.Row key={index} changeSet={changeSet} />
		});
		return <tbody>{rows}</tbody>
	}
});

var App = React.createClass({
    render: function(){
        return <div>
        	<h1>{this.props.title}</h1>
            <RecentChangesTable>
              {/*Stand alone comment*/}
              <RecentChangesTable.Headings headings={this.props.headings} />
              <RecentChangesTable.Rows changeSets={this.props.data} />
            </RecentChangesTable>
        </div>;
    }
});

var props = {title: 'Recent changes', headings: headings, data: data};
ReactDOM.render(<App /*comment inside a tag*/ {...props} />, document.getElementById('container'));