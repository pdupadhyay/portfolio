import Image from 'next/image';
import photo from '../Content/Photo.jpeg'

const HomeSection = () => {
    return (
        <section id='home' className="bg-gray-200 py-12">
            <div className="container mx-auto text-center">
                <Image src={photo} alt="Pradyumna Upadhyay" width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h1 className="text-4xl font-bold mb-2">Pradyumna Upadhyay</h1>
                <p className="text-lg text-gray-600">Software Engineering Master&apos;s Student | Full Stack Developer</p>
            </div>
        </section>
    )
}

export default HomeSection;