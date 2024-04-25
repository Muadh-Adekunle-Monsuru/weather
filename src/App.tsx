import { useState } from 'react';
import { createApi } from 'unsplash-js';
import axios from 'axios';
import { unixTimestampToDateTime } from './weatherFunctions';
import { useEffect } from 'react';
import CityDropdown from './citydropdown';
import {
	getMaxMinTemperatureMeaning,
	degreeToDirection,
	unixDate,
} from './weatherFunctions';
import DayChip from './daychip';
const unsplash = createApi({
	accessKey: '9BJpd6WLhJJi2GUWutezKQIQ0NSUc0vRYxT3kvvr7_4',
});

function App() {
	const [image, setImage] = useState('');
	const [loading, setLoading] = useState(true);
	const [dailyData, setDailyData] = useState({
		weather: [{ description: '' }],
		main: {
			feels_like: '',
			humidity: 0,
			temp: 0,
		},
		sys: { sunrise: '', sunset: '' },
		wind: { deg: 0, speed: 0 },
	});
	const [forecastData, setForecastData] = useState({ list: [] });

	const filtered = forecastData.list.filter((elem, index) => {
		console.log(elem);
		return index % 8 == 1;
	});
	const date = new Date();
	const formattedTime = new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
	}).format(new Date());
	let formattedDate = ` ${date.toLocaleDateString('en-US', {
		weekday: 'long',
	})}, ${date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
	})} | ${formattedTime} `;

	useEffect(() => {
		getBackground();
		callDaily({ lat: 52.367, lon: 4.904 });
	}, []);

	const getBackground = async () => {
		try {
			const result = await unsplash.search.getPhotos({
				query: 'rainy window',
				page: 1,
				perPage: 10,
				orientation: 'landscape',
			});
			if (result.response?.results.length > 0) {
				setImage(result.response.results[4].urls.full);
			} else {
				// Fallback image in case no results are found
				setImage('https://via.placeholder.com/150');
			}
		} catch (error) {
			// Error handling
			console.error('Error fetching image:', error);
			// Fallback image in case of error
			setImage('https://via.placeholder.com/150');
		} finally {
			setLoading(false);
		}
	};
	function callDaily({ lat, lon }) {
		try {
			axios
				.get('https://api.openweathermap.org/data/2.5/weather?', {
					params: {
						lat: lat,
						lon: lon,
						appid: '2ed890b8574d046e1571aadd1a1934f7',
						units: 'metric',
					},
				})
				.then(function (response) {
					setDailyData(response.data);
					// console.log(dailyData);
				})
				.catch(function (error) {
					console.log(error);
				})
				.finally(function () {
					// console.log(dailyData);
				});
		} catch (e) {
			console.log('Error calling api', e);
		}
		try {
			axios
				.get('https://api.openweathermap.org/data/2.5/forecast?', {
					params: {
						lat: lat,
						lon: lon,
						appid: '2ed890b8574d046e1571aadd1a1934f7',
						units: 'metric',
					},
				})
				.then(function (response) {
					setForecastData(response.data);
					// console.log(response.data);
				})
				.catch(function (error) {
					console.log(error);
				})
				.finally(function () {
					// always executed
				});
		} catch (e) {
			console.log('Error calling api', e);
		}
	}

	return (
		<div className='min-h-screen bg-slate-300 max-h-screen overflow-hidden'>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div
					className={`w-full min-h-screen bg-cover flex `}
					style={{ backgroundImage: `url('${image}')` }}
				>
					{/* leftside */}
					<div className=' basis-3/4  col-span-3 h-screen text-white flex flex-col justify-between items-end p-6'>
						<div className='text-xl'>
							{formattedDate}
							<div className='text-xs'>
								Powered by <span className='italic'>OpenWeatherMap</span>
							</div>
						</div>

						<div className='w-full'>
							<div className='text-7xl text-right p-2 text-gray-200 font-bold'>
								{dailyData.weather[0].description}
							</div>
							<div className='p-2 pt-5 border-t border-gray-400 w-full flex flex-wrap gap-2 items-center justify-between'>
								<div className='py-4 px-5 backdrop-blur-md w-40 rounded-md'>
									<div className='text-center'>Feels like:</div>
									<div className='text-center'>
										{getMaxMinTemperatureMeaning(dailyData.main.feels_like)}
									</div>
								</div>
								<div className='py-4 px-5 backdrop-blur-md w-40 rounded-md'>
									<div className='text-center'>Humidity:</div>
									<div className='text-center'>{dailyData.main.humidity}</div>
								</div>
								<div className='py-4 px-5 backdrop-blur-md w-40 rounded-md'>
									<div className='text-center'>Sunrise:</div>
									<div className='text-center'>
										{unixTimestampToDateTime(dailyData.sys.sunrise)}
									</div>
								</div>
								<div className='py-4 px-5 backdrop-blur-md w-40 rounded-md'>
									<div className='text-center'>Sunset:</div>
									<div className='text-center'>
										{unixTimestampToDateTime(dailyData.sys.sunset)}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* rightside */}
					<div className='h-screen basis-1/4 border-gray-500  border-l relative p-5 backdrop-blur-md flex flex-col text-white items-center justify-evenly'>
						<CityDropdown callDailyFunction={callDaily} />
						<div className='text-7xl p-3 font-sans'>
							{getMaxMinTemperatureMeaning(dailyData.main.temp)}
						</div>
						<div className='flex justify-evenly items-center gap-2 text-gray-300 font-thin p-2'>
							<div className='w-3 h-3'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
									<path
										fill='#fafafa'
										d='M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z'
									/>
								</svg>
							</div>
							<div>{degreeToDirection(dailyData.wind.deg)}</div>
							<div>{dailyData.wind.speed} m/s</div>
						</div>
						<div className='w-full border-t border-gray-600 my-2 ' />
						<div className='font-bold text-xl text-center'>
							The Next 7 Days Forecast
						</div>
						<div className='grid gap-1 w-full mt-2'>
							{filtered.map((elem, index) => (
								<DayChip data={elem} date={unixDate(elem.dt)} key={index} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
