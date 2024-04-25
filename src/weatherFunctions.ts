// Define function for Cloud Cover
export function getCloudCoverMeaning(value) {
	switch (value) {
		case 1:
			return '0%-6%';
		case 2:
			return '6%-19%';
		case 3:
			return '19%-31%';
		case 4:
			return '31%-44%';
		case 5:
			return '44%-56%';
		case 6:
			return '56%-69%';
		case 7:
			return '69%-81%';
		case 8:
			return '81%-94%';
		case 9:
			return '94%-100%';
		default:
			return 'Unknown';
	}
}

// Define function for Lifted Index
export function getLiftedIndexMeaning(value) {
	switch (value) {
		case -10:
			return 'Below -7';
		case -6:
			return '-7 to -5';
		case -4:
			return '-5 to -3';
		case -1:
			return '-3 to 0';
		case 2:
			return '0 to 4';
		case 6:
			return '4 to 8';
		case 10:
			return '8 to 11';
		case 15:
			return 'Over 11';
		default:
			return 'Unknown';
	}
}

// Define function for Max/Min 2m Temperature
export function getMaxMinTemperatureMeaning(value) {
	if (value >= -76 && value <= 60) {
		return `${value}°C`;
	} else {
		return 'Unknown';
	}
}

// Define function for 2m Relative Humidity
export function getRelativeHumidityMeaning(value) {
	switch (value) {
		case -4:
			return '0%-5%';
		case -3:
			return '5%-10%';
		case -2:
			return '10%-15%';
		case -1:
			return '15%-20%';
		case 0:
			return '20%-25%';
		case 1:
			return '25%-30%';
		case 2:
			return '30%-35%';
		case 3:
			return '35%-40%';
		case 4:
			return '40%-45%';
		case 5:
			return '45%-50%';
		case 6:
			return '50%-55%';
		case 7:
			return '55%-60%';
		case 8:
			return '60%-65%';
		case 9:
			return '65%-70%';
		case 10:
			return '70%-75%';
		case 11:
			return '75%-80%';
		case 12:
			return '80%-85%';
		case 13:
			return '85%-90%';
		case 14:
			return '90%-95%';
		case 15:
			return '95%-99%';
		case 16:
			return '100%';
		default:
			return 'Unknown';
	}
}

// Define function for 10m Wind Direction

export function getWindDirectionMeaning(value) {
	switch (value) {
		case 'N':
			return 'North';
		case 'NE':
			return 'Northeast';
		case 'E':
			return 'East';
		case 'SE':
			return 'Southeast';
		case 'S':
			return 'South';
		case 'SW':
			return 'Southwest';
		case 'W':
			return 'West';
		case 'NW':
			return 'Northwest';
		default:
			return 'Unknown';
	}
}

// Define function for 10m Wind Speed
export function getWindSpeedMeaning(value) {
	switch (value) {
		case 1:
			return 'Below 0.3m/s (calm)';
		case 2:
			return '0.3-3.4m/s (light)';
		case 3:
			return '3.4-8.0m/s (moderate)';
		case 4:
			return '8.0-10.8m/s (fresh)';
		case 5:
			return '10.8-17.2m/s (strong)';
		case 6:
			return '17.2-24.5m/s (gale)';
		case 7:
			return '24.5-32.6m/s (storm)';
		case 8:
			return 'Over 32.6m/s (hurricane)';
		default:
			return 'Unknown';
	}
}

// Define function for Precipitation Type
export function getPrecipitationTypeMeaning(value) {
	switch (value) {
		case 'snow':
			return 'Snow';
		case 'rain':
			return 'Rain';
		case 'frzr':
			return 'Freezing Rain';
		case 'icep':
			return 'Ice Pellets';
		case 'none':
			return 'None';
		default:
			return 'Unknown';
	}
}

// Define function for Weather Type
export function getWeatherTypeMeaning(value) {
	switch (value) {
		case 'clear':
			return 'Total cloud cover less than 20%';
		case 'mcloudy':
			return 'Total cloud cover between 20%-80%';
		case 'cloudy':
			return 'Total cloud cover over 80%';
		case 'rain':
			return 'Rain with total cloud cover over 80%';
		case 'snow':
			return 'Snow with total cloud cover over 80%';
		case 'ts':
			return 'Lifted Index less than -5';
		case 'tsrain':
			return 'Lifted Index less than -5 with rain';
		default:
			return 'Unknown';
	}
}
export function formatWeatherPhrase(value) {
	switch (value) {
		case 'clearday':
			return 'Clear Day';
		case 'clearnight':
			return 'Clear Night';
		case 'pcloudyday':
			return 'Partly Cloudy Day';
		case 'pcloudynight':
			return 'Partly Cloudy Night';
		case 'mcloudyday':
			return 'Mostly Cloudy Day';
		case 'mcloudynight':
			return 'Mostly Cloudy Night';
		case 'cloudyday':
			return 'Cloudy Day';
		case 'cloudynight':
			return 'Cloudy Night';
		case 'humiday':
			return 'Humid Day';
		case 'humidnight':
			return 'Humid Night';
		case 'lightrainday':
			return 'Light Rain Day';
		case 'lightrainnight':
			return 'Light Rain Night';
		case 'oshowerday':
			return 'Occasional Shower Day';
		case 'oshowernight':
			return 'Occasional Shower Night';
		case 'ishowerday':
			return 'Intermittent Shower Day';
		case 'ishowernight':
			return 'Intermittent Shower Night';
		case 'lightsnowday':
			return 'Light Snow Day';
		case 'lightsnownight':
			return 'Light Snow Night';
		case 'rainday':
			return 'Rainy Day';
		case 'rainnight':
			return 'Rainy Night';
		case 'snowday':
			return 'Snowy Day';
		case 'snownight':
			return 'Snowy Night';
		case 'rainsnowday':
			return 'Rain and Snow Day';
		case 'rainsnownight':
			return 'Rain and Snow Night';
		default:
			return 'Unknown';
	}
}
export function degreeToDirection(degree) {
	// Ensure degree is within 0 to 360 range
	degree %= 360;

	// Define directions and their corresponding degree ranges
	const directions = {
		north: [...Array(23).keys()].concat(
			[...Array(360 - 337).keys()].map((x) => x + 337)
		),
		northeast: [...Array(68 - 23).keys()].map((x) => x + 23),
		east: [...Array(113 - 68).keys()].map((x) => x + 68),
		southeast: [...Array(158 - 113).keys()].map((x) => x + 113),
		south: [...Array(203 - 158).keys()].map((x) => x + 158),
		southwest: [...Array(248 - 203).keys()].map((x) => x + 203),
		west: [...Array(293 - 248).keys()].map((x) => x + 248),
		northwest: [...Array(337 - 293).keys()].map((x) => x + 293),
	};

	// Determine the direction
	for (const [direction, degreeRange] of Object.entries(directions)) {
		if (degreeRange.includes(degree)) {
			return direction;
		}
	}

	return null; // In case the degree is out of range
}
export function unixTimestampToDateTime(unixTimestamp) {
	// Multiply by 1000 to convert from seconds to milliseconds
	const dateTime = new Date(unixTimestamp * 1000);

	// Get the individual components of the date and time
	const hours = String(dateTime.getHours()).padStart(2, '0');
	const minutes = String(dateTime.getMinutes()).padStart(2, '0');

	// Construct the human-readable date and time string
	const formattedDateTime = ` ${hours}:${minutes}`;

	return formattedDateTime;
}

export function unixDate(unixTimestamp) {
	// Multiply by 1000 to convert from seconds to milliseconds
	const dateTime = new Date(unixTimestamp * 1000);

	// Get the individual components of the date and time
	const month = dateTime.toLocaleString('en-US', { month: 'long' }); // Get full month name
	const date = String(dateTime.getDate()).padStart(2, '0');
	const hours = String(dateTime.getHours()).padStart(2, '0');
	const minutes = String(dateTime.getMinutes()).padStart(2, '0');

	// Construct the human-readable date and time string
	const formattedDateTime = `${date} ${month} , ${hours}:${minutes}`;

	return formattedDateTime;
}
