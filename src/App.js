import * as React from 'react';
import { Provider} from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import rootSaga from './sagas';
import configureStore from './store';
import Main from './components/Main/Main';
import History from './components/History/History';

export default class App extends React.PureComponent {

	render() {
		const store = configureStore(this.props);
		store.runSaga(rootSaga);

		return (
				<Provider store={store}>
					<div className="App">
						<BrowserRouter>
							<main>
								<Route
										exact
										path="/"
										render={props => <Main />}
								/>
								<Route
										path="/history"
										render={props => <History />}
								/>
							</main>
						</BrowserRouter>
					</div>
				</Provider>
		);
	}
}

