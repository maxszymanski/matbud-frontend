import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './_components/_ui/Navigation'
import Footer from './_components/_footer/Footer'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
    title: {
        template: 'MatBud | %s',
        default: 'MatBud',
    },
    description: 'Firma budowlana MatBud',
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="pl"
            className="scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary3 overflow-x-hidden"
        >
            <body
                className={`${poppins.className} from-primary to-primary2 relative flex h-full min-h-screen flex-col bg-linear-to-r`}
            >
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
