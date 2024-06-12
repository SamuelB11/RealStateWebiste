

function CreateListing() {
    return (
        <main className="p-3 max-w-4xl mx-auto">
            <h1 className="text-3xl font-smibold text-center my-7">Create a Listing</h1>
            <form action="" className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <input className="border p-3 rounded-lg" type="text" placeholder="Name" id="name" maxLength="62" minLength="10" required />
                    <input className="border p-3 rounded-lg" type="text" placeholder="Description" id="description" required />
                    <input className="border p-3 rounded-lg" type="text" placeholder="Address" id="address" maxLength="62" minLength="10" required />

                    <div className="flex gap-6">
                        <div className="flex gap-2">
                            <input className="w-5" type="checkbox" id="sale" />
                            <span>Sell</span>
                        </div>
                        <div className="flex gap-2">
                            <input className="w-5" type="checkbox" id="rent" />
                            <span>Rent</span>
                        </div>
                        <div className="flex gap-2">
                            <input className="w-5" type="checkbox" id="parking" />
                            <span>Parking Spot</span>
                        </div>
                        <div className="flex gap-2">
                            <input className="w-5" type="checkbox" id="furnished" />
                            <span>Furnished</span>
                        </div>
                        <div className="flex gap-2">
                            <input className="w-5" type="checkbox" id="offer" />
                            <span>Offer</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                            <input type="number" id="bedrooms" min="1" max="10" required
                                className=" p-3 
                            border 
                            border-gray-300 
                            rounded-lg 
                            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                            w-14" />
                            <span>Beds</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" id="bathrooms" min="1" max="10" required className="border 
                            p-3 
                            border-gray-300 
                            rounded-lg 
                            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                            w-14" />
                            <span>Baths</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" id="regularPrice" required
                                className="border 
                            p-3 
                            border-gray-300 
                            rounded-lg 
                            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                            w-24"
                            />
                            <div className="flex flex-col items-center">
                                <span>Regular Price</span>
                                <span className="text-xs">($ / month)</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" id="discountPrice" required
                                className="border
                                 p-3
                                border-gray-300 
                                rounded-lg 
                                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&    ::-webkit-inner-spin-button]:appearance-none 
                                w-24"
                            />
                            <div className="flex flex-col items-center">
                                <span>Discounted Price</span>
                                <span className="text-xs">($ / month)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-4">
                    <p className="font-semibold">Images:
                        <span>The first image will be the cover (max 6)</span>
                    </p>
                    <div className="flex gap-4">
                        <input className="p-3 border border-gray-300 rounded w-full" type="file" accept='image/*' multiple />
                        <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">Upload</button>
                    </div>
                    <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover: opacity-95 disabled:opacity-80">Create Listing</button>
                </div>

            </form>
        </main>
    )
}

export default CreateListing;
