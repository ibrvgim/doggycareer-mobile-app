interface Country {
  country: string;
}

export async function getCities() {
  try {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries'
    );

    if (!response.ok) throw new Error('Could not get countries.');
    const data = await response.json();

    return data.data.find((country: Country) => country.country === 'Germany')
      ?.cities;
  } catch (error) {
    console.error(error);
  }
}
