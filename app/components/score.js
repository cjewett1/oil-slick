export default function Score() {
    return (
        <div>
            <h1 className='font-black text-xl underline'>SCORE</h1>
            {/* Score card */}
            <div className='bg-oilersOrange rounded-lg my-5 drop-shadow-md'>
                <div className='bg-oilersBlue text-white rounded-t-lg p-4'>
                    <h2 className='text-2xl underline font-black text-oilersOrange mx-7 '>
                        MONDAY OCT 28, 2023
                    </h2>
                </div>
                <div className='flex-col items-center justify-between py-4 mx-7'>
                    <div className='flex items-center space-x-4 '>
                        <img
                            className='h-12 w-12'
                            src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_Edmonton_Oilers.svg/1920px-Logo_Edmonton_Oilers.svg.png'
                            alt='Team 1 Logo'
                        />
                        <span className='text-oilersBlue text-xl font-black'>
                            OILERS
                        </span>
                        <p className='text-3xl text-oilersBlue font-black'>
                            {" "}
                            5
                        </p>
                    </div>
                    <hr className='my-5 ' />
                    <div className='flex items-center space-x-4'>
                        <img
                            className='h-12 w-12'
                            src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_Edmonton_Oilers.svg/1920px-Logo_Edmonton_Oilers.svg.png'
                            alt='Team 2 Logo'
                        />
                        <span className='text-oilersBlue text-xl font-black'>
                            OILERS
                        </span>
                        <p className='text-3xl text-oilersBlue font-black'>5</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
