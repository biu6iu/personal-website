// Types for our collections
interface Collection {
  name: string;
  path: string;
  coverImage: string;
  title: string;
}

// Collection data
const collections: Collection[] = [
  {
    name: 'sydney',
    path: 'sydney_collection.html',
    coverImage: 'assets/images/sydney/DSCF4607.JPG',
    title: 'Sydney 2024'
  },
  {
    name: 'china-trip-2',
    path: 'china_trip_2.html',
    coverImage: 'assets/images/china-trip-2/DSCF4174.JPG',
    title: 'China trip 2'
  },
  {
    name: 'fitzroy',
    path: 'fitzroy_collection.html',
    coverImage: 'assets/images/fitzroy/DSCF3610.JPG',
    title: 'Fitzroy'
  },
  {
    name: 'china-trip-1',
    path: 'china_trip_1.html',
    coverImage: 'assets/images/china-trip-1/DSCF3324.JPG',
    title: 'China trip 1'
  },
  {
    name: 'raglan',
    path: 'raglan_collection.html',
    coverImage: 'assets/images/raglan/DSCF3039.JPG',
    title: 'Raglan 2023'
  },
  {
    name: 'archive',
    path: 'archive_collection.html',
    coverImage: 'assets/images/archive/34010031.JPG',
    title: 'Archives'
  }
];

// Function to initialize the site
function initialiseSite(): void {
  // Add any site-wide functionality here
  console.log('Site initialised');
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initialiseSite); 