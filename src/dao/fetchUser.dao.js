const apiUrl = 'https://random-data-api.com/api/v2/users?size=3';

const fetchNames = async () => {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  const names = data.map((user) => `${user.first_name} ${user.last_name}`);

  return names;
};

export default fetchNames;
