import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import Button from '../_ui/Button'

function EmailStatusMessage({ success = true }) {
    return (
        <div className="flex flex-col items-center justify-between gap-10 rounded-lg bg-transparent text-center">
            {success ? (
                <FiCheckCircle className="text-primary3 text-[100px] 2xl:text-[120px]" />
            ) : (
                <FiAlertCircle className="text-[100px] text-red-500 2xl:text-[120px]" />
            )}

            <h1 className="text-primary3 text-lg font-medium xl:text-xl">
                {success ? `Dziękujemy za kontakt!` : `Błąd`}
            </h1>
            <p className="text-second text-sm leading-[170%] 2xl:text-base">
                {success ? (
                    <span>
                        Otrzymaliśmy Twoją wiadomość i postaramy się
                        odpowiedzieć jak najszybciej.
                    </span>
                ) : (
                    <span>
                        Nie udało się wysłać Twojej wiadomości. <br /> Proszę
                        spróbować ponownie później.
                    </span>
                )}
            </p>
            <Button variant="orange" href="/">
                Powrót
            </Button>
        </div>
    )
}

export default EmailStatusMessage
