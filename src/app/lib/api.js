import axios from 'axios'
// const API_URL = 'https://matbud-backend.onrender.com'
// export const API_URL = 'http://127.0.0.1:1337'
export const API_URL = 'https://matbud-backend-production.up.railway.app'

export async function getInfoSection() {
    try {
        const response = await axios.get(
            `${API_URL}/api/info-sections?populate=*`
        )

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0].infoData

        return data
    } catch (error) {
        console.error('Błąd pobierania info-sections:', error.message || error)
        return null
    }
}
export async function getHeader() {
    try {
        const response = await axios.get(`${API_URL}/api/headers?populate=*`)

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0].header[0]

        return data
    } catch (error) {
        console.error('Błąd pobierania header section:', error.message || error)
        return null
    }
}
export async function getProfessionall() {
    try {
        const response = await axios.get(`${API_URL}/api/profs?populate=*`)

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0].prof

        return data
    } catch (error) {
        console.error('Błąd pobierania prof section:', error.message || error)
        return null
    }
}
export async function getNumbers() {
    try {
        const response = await axios.get(`${API_URL}/api/numbers?populate=*`)

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0].number

        return data
    } catch (error) {
        console.error('Błąd pobierania sekcji numbers:', error.message || error)
        return null
    }
}
export async function getHire() {
    try {
        const response = await axios.get(`${API_URL}/api/hires?populate=*`)

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0].hire

        return data
    } catch (error) {
        console.error('Błąd pobierania sekcji numbers:', error.message || error)
        return null
    }
}
export async function getFooter() {
    try {
        const response = await axios.get(`${API_URL}/api/footers?populate=*`)

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0]

        return data
    } catch (error) {
        console.error('Błąd pobierania sekcji numbers:', error.message || error)
        return null
    }
}
export async function getServices(slug = undefined) {
    try {
        const response = await axios.get(
            `${API_URL}/api/services?populate[service][populate][service_list][populate][service_card_item][populate]=*`
        )

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0].service

        if (slug) {
            return data.filter((item) => item.slug === slug)[0]
        }

        return data
    } catch (error) {
        console.error('Błąd pobierania sekcji sevices:', error.message || error)
        return null
    }
}
export async function getAbout() {
    try {
        const response = await axios.get(
            `${API_URL}/api/abouts?populate[about_info]=*&populate[why_us][populate]=service_card_item`
        )

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0]

        return data
    } catch (error) {
        console.error('Błąd pobierania sekcji o nas:', error.message || error)
        return null
    }
}
export async function getImages() {
    try {
        const response = await axios.get(
            `${API_URL}/api/realizations?populate=*`
        )

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0].images

        return data
    } catch (error) {
        console.error('Błąd pobierania zdjęć:', error.message || error)
        return null
    }
}
