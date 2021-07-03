import Image from 'next/image'

export default function NavLogo() {
    return (
        <div className="flex flex-row items-center space-x-2">
            <Image
                src="/assets/profile_picture.png"
                width={40}
                height={40}
                alt="Rachmizard's Profile"
                className="rounded-full"
            />
            <a
                href="#"
                className="text-white text-2xl font-bold focus:outline-none focus:ring-2 rounded-sm p-2 focus:ring-primary focus:ring-opacity-50">
                <span className="text-primary">Rach</span>
                <span>mizard</span>
            </a>
        </div>
    )
}
