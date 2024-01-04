fetch('server.php').then((res) => res.json())
.then(response => {
	console.log(response);
	let output = '';
	let place = 1;
	for(let i in response){
		output += `<tr>
			<td>${place}</td>
			<td>${response[i].username}</td>
			<td>${response[i].points}</td>
		</tr>`;
		place++;
	}

	document.querySelector('.tbody').innerHTML = output;
}).catch(error => console.log(error));
