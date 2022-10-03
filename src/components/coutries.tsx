interface Props {
  population: number;
  ccn3: string;
  area: number;
  name: { common: string };
}

const Coutries: React.FC<Props> = (props) => {
  return (
    <>
      <section className='mx-auto max-w-sm w-full my-2 text-gray-600 body-font'>
        <div className='container px-5 '>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 w-full'>
              <div className='h-full bg-gray-900 bg-opacity-75 px-8 pt-6 rounded-lg overflow-hidden text-center relative'>
                <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                  {props.name.common}
                </h2>
                <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-300 mb-3'>
                  Area: {props.area}
                </h1>
                <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-300 mb-3'>
                  Population: {props.population}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coutries;
