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
                    <p>Location: {data.country!}, {data.city!}</p>
                    <p>Temp: {data.temp!}</p>
                    <p>Pressure: {data.pressure!}</p>
                    <p>Sunset: {data.sunset!}</p>
                </>
            }
        </div>
    )
}

export default Weather;