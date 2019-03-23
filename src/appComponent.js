import React from 'react';
function searchingFor(term){
    return function(x){
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }
function People(props){
	console.log(props.people);
	return (
		<div className="App">
			<input type="text"
			onChange={props.searchHandler}
			value={props.term}
			/>
			{
				props.people.filter(searchingFor(props.term)).map((people,idx) => {
					return(
						<div>
						<span>-----------------------------------</span>
						<p>{people.name}</p>
						<p>{people.last}</p>
						</div>
					)

				})
			}
		</div>
	);
}
export default People;