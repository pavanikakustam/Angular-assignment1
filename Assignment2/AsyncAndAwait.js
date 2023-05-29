function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const data = 'Some data'; //for the input scenario
        // const data1 = ''; //handling error scenario
        if (data) {
          resolve(data);
        } else {
          reject('Error: Data not found'); 
        }
      }, 2000); 
    });
  }
  
  // Async function using await
  async function getData() {
    try {
      const data = await fetchData();
      console.log('Received data:', data);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  getData();