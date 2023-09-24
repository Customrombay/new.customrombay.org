export default function ZplFooter() {
    return (
        <footer className="absolute bottom-0 w-screen">
            <div className="w-full mx-auto">
                <div className="bg-gray-800 rounded-lg shadow m-4 p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://piotrlange.de/" className="hover:underline android-highlighted">PiotrZPL</a>. All Rights Reserved.
                    </span>
                    {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </footer>
    )
}
