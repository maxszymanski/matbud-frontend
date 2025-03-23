import { Poppins } from 'next/font/google'
import './globals.css'
import { getFooter } from './lib/api'
import Navigation from './_components/_ui/Navigation'
import Footer from './_components/_footer/Footer'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
    title: {
        template: '%s | Matbud',
        default: 'Matbud',
    },
    description: 'Firma budowlana',
}

export default async function RootLayout({ children }) {
    const data = await getFooter()

    return (
        <html
            lang="pl"
            className="scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 overflow-x-hidden"
        >
            <body
                className={`${poppins.className} from-primary to-primary2 relative h-full min-h-screen bg-linear-to-r`}
            >
                <Navigation data={data} />
                {children}
                <Footer data={data} />
            </body>
        </html>
    )
}
