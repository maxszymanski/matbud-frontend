import { getFooter } from '../../lib/api'

function FooterContact({ data }) {
    const contact = Object.entries(data.contact_info).splice(1, 4)

    return (
        <div className="flex flex-col items-center gap-6 sm:items-start">
            <h4 className="text-lg font-semibold text-white sm:pl-2 sm:text-left">
                Kontakt
            </h4>
            <ul className="flex flex-col items-center sm:items-start">
                {contact.map((link) => {
                    return (
                        <li key={link[0]}>
                            <p className="mb-2 p-2">{link[1]}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FooterContact
