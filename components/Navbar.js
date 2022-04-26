import { NewspaperIcon } from '@heroicons/react/outline';

function Navbar() {
  return (
    <div className='flex justify-center'>
      <nav className='container flex justify-between items-center py-3 mt-3 mb-2 '>
        <div className='cursor-pointer flex justify-center items-center gap-2 hover:scale-110 transition duration-300'>
          <NewspaperIcon className='h-5 w-5 text-white-500' />
          <h1 className='text-xl font-extrabold'>
            <a href=''>NEXT NEWS</a>
          </h1>
        </div>

        {/* Menu */}
        <ul className=' font font-Poppins flex flex-row gap-4'>
          <li className='px-4 py-2.5 text-base cursor-pointer hover:scale-110 rounded-md transition duration-300'>
            <a className='font-semibold' href='#'>
              About
            </a>
          </li>
          <li className='px-4 py-2.5 text-base cursor-pointer hover:scale-110 rounded-md transition duration-300'>
            <a className='font-semibold' href='#'>
              Privacy
            </a>
          </li>
          <li className='px-4 py-2.5 text-base cursor-pointer hover:scale-110 rounded-md transition duration-300'>
            <a className='font-semibold' href='#'>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
