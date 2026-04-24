import logo from '@/assets/logo.png'
import { format } from 'date-fns';
import Image from 'next/image';
import BreakingNews from './BreakingNews';

const Header = () => {

    return (
        <div className='text-center space-y-2 py-8 container mx-auto'>
            <Image src={logo} width={300} height={50} alt='logo' className='mx-auto'></Image>
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-[#706F6F]'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>

            <div className='mt-7 bg-base-300 p-3 flex items-center justify-center gap-4 w-[1140px] mx-auto'>
                <div className='bg-[#D72050] text-white px-5 py-2'>Latest</div>
                <BreakingNews></BreakingNews>
            </div>
        </div>
    );
};

export default Header;