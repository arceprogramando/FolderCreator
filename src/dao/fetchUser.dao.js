const apiUrl = 'https://random-data-api.com/api/v2/users?size=3';

const fetchNames = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    const names = data.map((user) => `${user.first_name} ${user.last_name}`);

    console.log('Names:', names);

    return names;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default fetchNames;
