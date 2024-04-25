import { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon, MapPinIcon } from '@heroicons/react/16/solid';
import { cityData } from './assets/cities';

export default function CityDropdown({ callDailyFunction }) {
	const [selected, setSelected] = useState('City');

	const handleCitySelect = (city) => {
		callDailyFunction({ lat: city.latitude, lon: city.longitude });
		setSelected(city.city);
		console.log(city);
	};

	const cityDropdownItems = cityData.cities.map((item) => (
		<DropdownMenuItem key={item.city} onClick={() => handleCitySelect(item)}>
			{item.city}
		</DropdownMenuItem>
	));

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='text-white border border-gray-500 rounded-md py-5 h-10 flex justify-center items-center px-4 w-3/4'>
				<div className='flex w-full justify-between items-center'>
					<div className='flex items-center justify-between'>
						<MapPinIcon className='w-6 h-6' />
						<div>{selected}</div>
					</div>
					<div>
						<ChevronDownIcon className='w-6 h-6' />
					</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='min-w-full bg-transparent backdrop-blur-md text-white max-h-60 overflow-y-auto'>
				{cityDropdownItems}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
