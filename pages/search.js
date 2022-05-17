import Header from '../components/Header'
import Footer from '../components/Footer';

function Search() {
    return (
        <div >
            <Header />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays for 5 number of guest</p>
                    <h1 className="text-3xl font-semibold bt-2 mb-2">Stays in Mars</h1>

                    <div className="hidden lg:inline-flex mb-5 text-gray-800 space-x-3 whitespace-nowrap ">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                </section>
            </main>

        <Footer />
        </div>
    )
}

export default Search
