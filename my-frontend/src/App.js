import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://3001-cs-22039308829-default.cs-asia-southeast1-fork.cloudshell.dev/test')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <div>
      <h1>Backend Response</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
