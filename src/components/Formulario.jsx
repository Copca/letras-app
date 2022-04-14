import { useState } from 'react';

import useLetras from '../hooks/useLetras';

const Formulario = () => {
	const [busqueda, setBusqueda] = useState({
		artista: '',
		cancion: ''
	});

	const { setAlerta, busquedaLetra } = useLetras();

	const handleChange = e => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (Object.values(busqueda).includes('')) {
			setAlerta('Coloca nombre de artista y canción');
			return;
		}

		busquedaLetra(busqueda);
	};

	return (
		<form onSubmit={handleSubmit}>
			<legend>Busca por Artistas y Canción</legend>

			<div className='form-grid'>
				<div>
					<label>Artista</label>
					<input
						type='text'
						name='artista'
						placeholder='Nombre Artista'
						value={busqueda.artista}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label>Canción</label>
					<input
						type='text'
						name='cancion'
						placeholder='Nombre Canción'
						value={busqueda.cancion}
						onChange={handleChange}
					/>
				</div>

				<input type='submit' value='Buscar' />
			</div>
		</form>
	);
};

export default Formulario;
