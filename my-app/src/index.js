import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { Game } from './Game/Game';
import { store } from './Game/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<Game />
	</Provider>,
);
