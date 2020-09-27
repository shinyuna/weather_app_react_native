import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from './Loading';
import Weather from './Weather';

const API_KEY = '94a98571b141a6730c1f4746d4b5b508';

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (lat, lon) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    this.setState({ isLoading: false, temp: data.main.temp })
    console.log("DATA", data)
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false })
    } catch (e) {
      Alert.alert('Permisson denined.')
    }
  }
  componentDidMount() {
    this.getLocation()
  }
  render() {
    const { isLoading, temp } = this.state

    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>;
  }
}
