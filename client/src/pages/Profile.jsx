import { useSelector } from 'react-redux';

export default function Profile() {
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
            <form className='flex flex-col gap-3'>
                <img src={currentUser.avatar} alt="Profile Picture" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
                <input type="text" placeholder='Username' id="username" className='border rounded-lg p-3' />
                <input type="text" placeholder='Email' id="email" className='border rounded-lg p-3' />
                <input type="text" placeholder='Password' id="password" className='border rounded-lg p-3' />
                <button className='bg-red-600 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
                <div className='flex justify-between mt-5'>
                    <span className='text-red-900 cursor-pointer'>Delete Account</span>
                    <span className='text-red-900 cursor-pointer'>Log Out</span>
                </div>
            </form>
        </div>
    );
}
