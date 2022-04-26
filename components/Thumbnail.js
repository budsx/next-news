function Thumbnail({ data }) {
  return (
    //
    <div className='py-16 font-Poppins border-white'>
      <div className='container m-auto px-6 md:px-12 xl:px-6'>
        <div className='grid gap-12 '>
          <div className='p-1 rounded-xl group sm:flex space-x-6 hover:rounded-2xl'>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.urlToImage}
              alt={data.title}
              loading='lazy'
              width='1000'
              height='667'
              className='h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl'
            />
            <div className='sm:w-7/12 pl-0 p-5'>
              <div className='space-y-2'>
                <h4 className='text-2xl font-semibold '>
                  <a href={data.url}>{data.title}</a>
                </h4>
                <p className='font-medium text-white'>{data.description}</p>
                <a
                  href={data.url}
                  className='font-semibold block w-max text-yellow-300 border-2 border-yellow-300 rounded-lg px-4 py-2 hover:scale-110 transition duration-300'
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
