let apiKey = process.env.NEXT_PUBLIC_KEY;
let cityDefault = process.env.NEXT_PUBLIC_CITY;

export const getWeatherRoute = (params: any) => {
  let url = `weather?appid=${apiKey}&units=metric&lang=es`;

  if (params.inputSearch.length) url += `&q=${params?.inputSearch}`;
  else url += `&q=${cityDefault}`;

  return url;
};
