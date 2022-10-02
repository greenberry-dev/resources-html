fetch('json/channel_resources.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });