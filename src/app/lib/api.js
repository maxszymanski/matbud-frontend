import axios from 'axios'
const API_URL = 'http://127.0.0.1:1337/api/'

export async function getInfoSection() {
    try {
        const response = await axios.get(`${API_URL}info-sections?populate=*`)

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
        const response = await axios.get(`${API_URL}headers?populate=*`)

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
        const response = await axios.get(`${API_URL}profs?populate=*`)

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
        const response = await axios.get(`${API_URL}numbers?populate=*`)

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
        const response = await axios.get(`${API_URL}hires?populate=*`)

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
        const response = await axios.get(`${API_URL}footers?populate=*`)

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
export async function getServices() {
    try {
        const response = await axios.get(
            `${API_URL}services?populate[service][populate][service_list]=*`
        )

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.length
        ) {
            throw new Error('Brak danych w odpowiedzi API')
        }

        const data = response.data.data[0].service

        return data
    } catch (error) {
        console.error('Błąd pobierania sekcji sevices:', error.message || error)
        return null
    }
}
export async function getImages() {
    try {
        const response = await axios.get(`${API_URL}realizations?populate=*`)

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
