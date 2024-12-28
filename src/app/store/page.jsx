import { StoreCard } from '@/components/card/cardstore';
import { Carousel } from '@/components/carousel/carousel';
import { NavbarStore } from '@/components/navbar/navbarstore';

export default function StorePage() {
	return (
		<>
			<NavbarStore />
			<Carousel />
			<StoreCard />
		</>
	);
}
