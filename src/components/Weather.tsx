import {useGetWeatherByCityQuery} from "../features/api/waeatherApi.ts";
import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
    const city = useAppSelector(state => state.city);
    const { data, error, isLoading } = useGetWeatherByCityQuery(city);

    if(!city) {
        return <div className={'infoWeath'}>Enter city name</div>;
    }

    if(isLoading){
        return <div className={'infoWeath'}>Pending...</div>;
    }

    if(error) {
        return <div className={'infoWeath'}>Enter correct city name</div>;
    }

    return (
        <div className={'infoWeath'}>
            {!!data &&
                <>
                    <p>Location: {data.sys.country}, {data.name}</p>
                    <p>Temp: {data.main.temp}</p>
                    <p>Pressure: {data.main.pressure}</p>
                    <p>Sunset: {new Date(data.sys.sunset! * 1000).toLocaleTimeString()}</p>
                </>
            }
        </div>
    )
}

export default Weather;