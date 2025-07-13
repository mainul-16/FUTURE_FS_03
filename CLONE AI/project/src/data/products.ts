export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women' | 'children';
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Men's Products
  {
    id: '1',
    name: 'Air Max 270',
    category: 'men',
    price: 150,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s lifestyle shoes with maximum comfort'
  },
  {
    id: '2',
    name: 'React Infinity Run',
    category: 'men',
    price: 160,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s running shoes for long distances'
  },
  {
    id: '3',
    name: 'Air Force 1',
    category: 'men',
    price: 90,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Classic men\'s basketball shoes'
  },
  {
    id: '4',
    name: 'Zoom Pegasus 38',
    category: 'men',
    price: 120,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s versatile running shoes'
  },
  {
    id: '5',
    name: 'Dunk Low',
    category: 'men',
    price: 110,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s skateboarding shoes'
  },
  {
    id: '6',
    name: 'Air Jordan 1',
    category: 'men',
    price: 170,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Iconic men\'s basketball shoes'
  },
  {
    id: '7',
    name: 'Blazer Mid',
    category: 'men',
    price: 100,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s vintage basketball shoes'
  },
  {
    id: '8',
    name: 'Cortez Classic',
    category: 'men',
    price: 70,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s retro running shoes'
  },
  {
    id: '9',
    name: 'Free RN 5.0',
    category: 'men',
    price: 100,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s natural motion running shoes'
  },
  {
    id: '10',
    name: 'Air VaporMax',
    category: 'men',
    price: 190,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s revolutionary air cushioning'
  },
  {
    id: '11',
    name: 'React Element 55',
    category: 'men',
    price: 130,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s lifestyle shoes with React foam'
  },
  {
    id: '12',
    name: 'SB Dunk High',
    category: 'men',
    price: 125,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s skateboarding shoes'
  },
  {
    id: '13',
    name: 'Air Max 90',
    category: 'men',
    price: 120,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s classic Air Max shoes'
  },
  {
    id: '14',
    name: 'Metcon 7',
    category: 'men',
    price: 130,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s training shoes'
  },
  {
    id: '15',
    name: 'Air Zoom Alphafly',
    category: 'men',
    price: 275,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s marathon racing shoes'
  },
  {
    id: '16',
    name: 'Phantom GT',
    category: 'men',
    price: 160,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s football boots'
  },
  {
    id: '17',
    name: 'KD14',
    category: 'men',
    price: 150,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s basketball shoes'
  },
  {
    id: '18',
    name: 'LeBron 19',
    category: 'men',
    price: 200,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s basketball shoes'
  },
  {
    id: '19',
    name: 'Giannis Immortality',
    category: 'men',
    price: 80,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s basketball shoes'
  },
  {
    id: '20',
    name: 'Air Max Plus',
    category: 'men',
    price: 170,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Men\'s lifestyle shoes'
  },

  // Women's Products
  {
    id: '21',
    name: 'Air Max 270',
    category: 'women',
    price: 150,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s lifestyle shoes with maximum comfort'
  },
  {
    id: '22',
    name: 'React Infinity Run',
    category: 'women',
    price: 160,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s running shoes for long distances'
  },
  {
    id: '23',
    name: 'Air Force 1',
    category: 'women',
    price: 90,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Classic women\'s basketball shoes'
  },
  {
    id: '24',
    name: 'Zoom Pegasus 38',
    category: 'women',
    price: 120,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s versatile running shoes'
  },
  {
    id: '25',
    name: 'Dunk Low',
    category: 'women',
    price: 110,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s skateboarding shoes'
  },
  {
    id: '26',
    name: 'Air Jordan 1 Low',
    category: 'women',
    price: 170,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s basketball shoes'
  },
  {
    id: '27',
    name: 'Blazer Mid',
    category: 'women',
    price: 100,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s vintage basketball shoes'
  },
  {
    id: '28',
    name: 'Cortez Classic',
    category: 'women',
    price: 70,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s retro running shoes'
  },
  {
    id: '29',
    name: 'Free RN 5.0',
    category: 'women',
    price: 100,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s natural motion running shoes'
  },
  {
    id: '30',
    name: 'Air VaporMax',
    category: 'women',
    price: 190,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s revolutionary air cushioning'
  },
  {
    id: '31',
    name: 'React Element 55',
    category: 'women',
    price: 130,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s lifestyle shoes with React foam'
  },
  {
    id: '32',
    name: 'Air Max 97',
    category: 'women',
    price: 165,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s lifestyle shoes'
  },
  {
    id: '33',
    name: 'Air Max 90',
    category: 'women',
    price: 120,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s classic Air Max shoes'
  },
  {
    id: '34',
    name: 'Metcon 7',
    category: 'women',
    price: 130,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s training shoes'
  },
  {
    id: '35',
    name: 'Air Zoom Tempo',
    category: 'women',
    price: 200,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s running shoes'
  },
  {
    id: '36',
    name: 'Phantom GT',
    category: 'women',
    price: 160,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s football boots'
  },
  {
    id: '37',
    name: 'Kyrie 8',
    category: 'women',
    price: 130,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s basketball shoes'
  },
  {
    id: '38',
    name: 'Air Max SC',
    category: 'women',
    price: 70,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s lifestyle shoes'
  },
  {
    id: '39',
    name: 'Revolution 6',
    category: 'women',
    price: 65,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s running shoes'
  },
  {
    id: '40',
    name: 'Flex Experience',
    category: 'women',
    price: 60,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Women\'s running shoes'
  },

  // Children's Products
  {
    id: '41',
    name: 'Air Max 270',
    category: 'children',
    price: 85,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' lifestyle shoes with maximum comfort'
  },
  {
    id: '42',
    name: 'Air Force 1',
    category: 'children',
    price: 65,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Classic kids\' basketball shoes'
  },
  {
    id: '43',
    name: 'Revolution 6',
    category: 'children',
    price: 45,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' running shoes'
  },
  {
    id: '44',
    name: 'Star Runner 3',
    category: 'children',
    price: 50,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' running shoes'
  },
  {
    id: '45',
    name: 'Court Borough Low',
    category: 'children',
    price: 40,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' basketball shoes'
  },
  {
    id: '46',
    name: 'Air Max SC',
    category: 'children',
    price: 50,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' lifestyle shoes'
  },
  {
    id: '47',
    name: 'Flex Runner',
    category: 'children',
    price: 35,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' running shoes'
  },
  {
    id: '48',
    name: 'Zoom Pegasus 38',
    category: 'children',
    price: 80,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' running shoes'
  },
  {
    id: '49',
    name: 'Air Jordan 1 Mid',
    category: 'children',
    price: 85,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' basketball shoes'
  },
  {
    id: '50',
    name: 'Dunk Low',
    category: 'children',
    price: 75,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' skateboarding shoes'
  },
  {
    id: '51',
    name: 'Blazer Mid',
    category: 'children',
    price: 70,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' vintage basketball shoes'
  },
  {
    id: '52',
    name: 'Free RN 5.0',
    category: 'children',
    price: 65,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' natural motion running shoes'
  },
  {
    id: '53',
    name: 'Air Max 90',
    category: 'children',
    price: 80,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' classic Air Max shoes'
  },
  {
    id: '54',
    name: 'Cortez Basic',
    category: 'children',
    price: 50,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' retro running shoes'
  },
  {
    id: '55',
    name: 'Tanjun',
    category: 'children',
    price: 35,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' lifestyle shoes'
  },
  {
    id: '56',
    name: 'Downshifter 11',
    category: 'children',
    price: 40,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' running shoes'
  },
  {
    id: '57',
    name: 'Air VaporMax',
    category: 'children',
    price: 120,
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' revolutionary air cushioning'
  },
  {
    id: '58',
    name: 'Kyrie Flytrap 5',
    category: 'children',
    price: 70,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' basketball shoes'
  },
  {
    id: '59',
    name: 'LeBron Witness 6',
    category: 'children',
    price: 75,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' basketball shoes'
  },
  {
    id: '60',
    name: 'React Element 55',
    category: 'children',
    price: 90,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Kids\' lifestyle shoes with React foam'
  }
];