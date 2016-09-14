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

var rows = data.map(function(row){
    return <tr>
    	<td>{row.when}</td>
    	<td>{row.who}</td>
    	<td>{row.description}</td>
    </tr>;
});

var App = React.createClass({
    render: function(){
        return <div>
        	<h1>Recent changes</h1>
            <table>
              <thead>
                <th>When</th>
                <th>Who</th>
                <th>Description</th>
              </thead>
              {rows}
            </table>
        </div>;
    }
});
ReactDOM.render(React.createElement(App), document.body);