import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },        
        {
            id: 3,
            name: 'Contact Us',
            path: '/contact-us'
        },
    ];

    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image src='/logo.svg' alt='logo'
                    width={180}
                    height={80}
                />

                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item) => (
                        <Link href={item.path}>
                            <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out' key={item.id}>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <Button>Get Started</Button>
        </div>
    );
};

export default Header;