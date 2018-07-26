import axios from 'axios';

export const API = axios.create({
	baseURL: '//api.openweathermap.org/data/2.5/'
})
API.interceptors.request.use (function (config) {
	//set common params on each request
	config.params.APPID = 'c44e9cffa05291451e3e7764e7ae225c';
	config.params.units = 'imperial';
	
	return config;
}, function (error) {
	return Promise.reject(error);
});