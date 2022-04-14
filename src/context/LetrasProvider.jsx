import { useState, createContext } from 'react';
import axios from 'axios';

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
	/**
	 * States
	 */
	const [alerta, setAlerta] = useState('');
	const [letra, setLetra] = useState('');
	const [cargando, setCargando] = useState(false);

	/**
	 * Funciones
	 */
	const busquedaLetra = async busqueda => {
		setCargando(true);

		try {
			const { artista, cancion } = busqueda;
			const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

			const { data } = await axios.get(url);

			setLetra(data.lyrics);
			setAlerta('');
		} catch (error) {
			setAlerta('Canción no encontrada');
		} finally {
			setCargando(false);
		}
	};

	return (
		<LetrasContext.Provider
			value={{ alerta, setAlerta, busquedaLetra, letra, cargando }}
		>
			{children}
		</LetrasContext.Provider>
	);
};

export { LetrasProvider };
export default LetrasContext;
