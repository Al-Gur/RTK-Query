import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {api_key, base_url} from "../../utils/constants.ts";
import {WeatherResponse} from "../../utils/types";
import {WeatherInfo} from "../../utils/types";

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    reducerPath: 'weatherApi',
    keepUnusedDataFor: 60 * 60,
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            transformResponse: (response: WeatherResponse) => {
              const res: WeatherInfo = {
                    city: response.name,
                    country: response.sys.country,
                    temp: response.main.temp,
                    pressure: response.main.pressure,
                    sunset: new Date(response.sys.sunset * 1000).toLocaleTimeString()
             };
            return res;
            }
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi
