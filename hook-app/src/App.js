import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [userId, setUserId] = useState("1");
	const [data, setData] = useState([]);

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log("DATAAAAAA", data);
				setData(data);
			});
	}, [userId]); //with the empty array passed in this function, it behaves as component did mount function because it will run only after the initia render. and it wont run after the subsequent renders. and if that empty array is not passed, it will run indefinitely if the set state method is called inside this function .
	// we can also pass some variable in this function and if there is some change in that variable ,then this function will be called again. (Re-rendered and useeffect will be called once again.)

    useEffect(()=>
    {
        document.addEventListener('mousemove', onMouseMove);
        return ()=>
        {
        document.removeEventListener('mousemove', onMouseMove);
        }
    })

    function onMouseMove(event)
    {
        console.log(event.clientX);
    }

	return (
		<div className="App" style={{ paddingLeft: 20 }}>
			<h1>App</h1>
			<button onClick={() => setUserId("2")}>Change UserId to 2</button>
			{data.map((user, index) => (
				<div key={index}>
					<p>{user.title}</p>
				</div>
			))}
		</div>
	);
}

export default App;
