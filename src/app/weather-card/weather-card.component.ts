import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  city1: string = '';
  city2: string = '';
  weatherData: any;
  currentTemp: any;
  maxTemp: any;
  minTemp: any;
  humidity: any;
  windSpeed: any;

  constructor(private http: HttpClient) { }

  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '75cd6f0d36mshe4610a3e04995f4p124767jsnf40b8e482dfe',
      'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
    }
  };


  setCity(): void {
    this.city2 = this.city1;
    fetch(`https://bestweather.p.rapidapi.com/weather/${this.city2}/today?unitGroup=us`, this.options)
      .then(response => response.json())
      .then((response) => {
        this.weatherData = response;
        console.log(this.weatherData);

        this.currentTemp = this.weatherData.currentConditions.temp;
        this.maxTemp = +(Math.abs(+this.weatherData.currentConditions.temp) + 30);
        this.minTemp = +(Math.abs(+this.weatherData.currentConditions.temp ) );
        this.windSpeed = this.weatherData.currentConditions.windspeed;
        this.humidity = this.weatherData.currentConditions.humidity;
      })
      .catch(err => console.error(err));


  }
  ngOnInit(): void {

  }

}
