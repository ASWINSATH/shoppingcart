function useFetch({ url }) {
  const fetchData = async (body) => {
    try {
      const data = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await data.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchData };
}

export default useFetch;
