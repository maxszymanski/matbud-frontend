import Gallery from '../_components/_portfolio/Gallery'
import MiniHeader from '../_components/_ui/MiniHeader'

export const revalidate = 3600

export const metadata = {
    title: 'Realizacje',
    description:
        'Zobacz nasze dotychczasowe realizacje – sprawdź zdjęcia wykonanych projektów budowlanych i przekonaj się o jakości naszej pracy.',
}

function page() {
    return (
        <>
            <MiniHeader title="Realizacje" />
            <main className="flex-1">
                <Gallery />
            </main>
        </>
    )
}

export default page
