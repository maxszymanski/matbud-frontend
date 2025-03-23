import { useEffect } from 'react'

export default function useClickOutside(ref, mutation, buttonID) {
	useEffect(() => {
		function handleClickOutside(e) {
			const target = e.target

			if (target.id === buttonID) return

			if (ref?.current && !ref.current.contains(target)) {
				mutation()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, mutation, buttonID])
}
