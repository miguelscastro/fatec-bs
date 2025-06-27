const fetchStarwarsAPI = async ({ itemType, item }) => {
    const url = " http://swapi.dev/api";
    const request = await fetch(
      `${url}/${itemType}/${item}`
    );
    const response = await request.json();
  
    console.log(response)
  }
  
  fetchStarwarsAPI({
    itemType: "films",
    item:6
  })