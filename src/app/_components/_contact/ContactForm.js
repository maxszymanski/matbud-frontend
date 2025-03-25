'use client'

import { useForm } from 'react-hook-form'
import Button from '../_ui/Button'
import Input from '../_ui/Input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from '../../lib/actions'
import { useState } from 'react'

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const schema = z.object({
    user_name: z.string().min(3, 'Imię musi mieć co najmniej 3 znaki'),
    user_email: z.string().email('Nieprawidłowy adres email'),
    user_phone: z
        .string()
        .regex(phoneRegex, 'Niepoprawny numer telefonu')
        .min(9, 'Numer telefonu jest za krótki'),
    user_message: z.string().min(10, 'Wiadomość jest za krótka'),
})

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: zodResolver(schema) })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        setIsLoading(true)
        // Tworzymy obiekt FormData
        const formData = new FormData()
        formData.append('name', data.user_name)
        formData.append('email', data.user_email)
        formData.append('phone', data.user_phone)
        formData.append('message', data.user_message)

        // // Wywołujemy Server Action
        const response = await sendEmail(formData)

        // Ustawiamy komunikat zwrotny

        if (response.status === 'success') {
            window.location.href = '/o-nas'
            alert('Wiadomość została wysłana')
        } else {
            window.location.href = '/realizacje'
        }
        setIsLoading(false)
        reset()
    }

    return (
        <form
            className="from-primary to-primary2 text-second hover:to-primary mx-auto flex w-full max-w-md flex-col rounded-2xl bg-linear-to-r px-4 py-8 shadow-xl shadow-[#12123b] transition-colors duration-300 sm:px-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h3 className="mb-8 text-center text-[28px] font-medium xl:text-3xl">
                Napisz do nas
            </h3>
            <Input
                name="user_email"
                labelText="Adres Email"
                type="email"
                formRegister={register('user_email')}
                error={errors?.user_email || null}
                message={errors?.user_email?.message || null}
            />
            <Input
                name="user_name"
                labelText="Imię"
                type="text"
                formRegister={register('user_name')}
                error={errors?.user_name || null}
                message={errors?.user_name?.message || null}
            />
            <Input
                name="user_phone"
                labelText="Numer telefonu"
                type="phone"
                wrapperClass="mb-10 xl:mb-12"
                formRegister={register('user_phone')}
                error={errors?.user_phone || null}
                message={errors?.user_phone?.message || null}
            />
            <Input
                textArea
                name="user_message"
                labelText="Wiadomość"
                type="text"
                formRegister={register('user_message')}
                error={errors?.user_message || null}
                message={errors?.user_message?.message || null}
            />
            <Button
                variant="orange"
                restClass="my-4 cursor-pointer"
                disabled={isLoading}
            >
                {isLoading ? 'Wysyłanie...' : 'Wyślij'}
            </Button>
        </form>
    )
}

export default ContactForm
