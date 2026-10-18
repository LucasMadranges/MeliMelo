import { Injectable, Logger } from '@nestjs/common'
import { fetchWeatherApi } from 'openmeteo'

@Injectable()
export class WeatherService {
    private readonly logger = new Logger(WeatherService.name)

    async getWeather(): Promise<string> {
        const params = {
            latitude: 52.52,
            longitude: 13.41,
            hourly: ['temperature_2m', 'weather_code'],
        }
        const url = 'https://api.open-meteo.com/v1/forecast'
        const response = await fetchWeatherApi(url, params)

        this.logger.log(response[0].current())

        return 'Hello World!'
    }
}
