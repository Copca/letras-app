import { LetrasProvider } from './context/LetrasProvider';

import AppLetras from './components/AppLetras';

const App = () => {
	return (
		<LetrasProvider>
			<AppLetras />
		</LetrasProvider>
	);
};

export default App;
