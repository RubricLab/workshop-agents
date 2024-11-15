import { z } from "zod";

export const getWeatherSchema = z.object({
  latitude: z.string().describe("Latitude of location"),
  longitude: z.string().describe("Longitude of location"),
});

type getWeatherProps = z.infer<typeof getWeatherSchema>;

export const getWeather = async ({ latitude, longitude }: getWeatherProps) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature`;

  const response = await fetch(url);

  const weatherData = await response.json();

  return weatherData;
};
