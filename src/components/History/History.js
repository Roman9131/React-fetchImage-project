import * as React from 'react';
import { NavLink}  from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as historyActions from './../../actions/history';
import './History.css';
import arrow from './../../arrow.svg';
import bin from './../../bin.svg';
import Navigation from './../Navigation/Navigation';


class History extends React.PureComponent {
	deleteItemHistory = (item) => {
    const { history, historyActions } = this.props;
    debugger
		const filteredHistory = history.filter(h => h.id !== item.id);

		historyActions.deleteItemFromHistory({ filteredHistory });
	};

	render() {
		debugger
		const { history } = this.props;

		return (
				<React.Fragment>
					<Navigation />
					<div className="history-page">
						<div className="history-page__name">
							<NavLink to="/"><img src={arrow} className="arrow" alt="logo"/></NavLink>
							<span className="history-page__text">История</span>
						</div>
						<div>
							{
								history.length
										? history.map((item, index) => (
												<div className="history-item" key={index}>
													<div className="image-container">
													<img className="history-item__image" src={item.url} alt="history image" />
														<img src={bin} className="bin" alt="bin" onClick={this.deleteItemHistory.bind(this, item)}/>
													</div>
                          <div className="history-item__desc">
	                          <p className="history-item__title">{item.title}</p>
	                          <p className="history-item__date">{item.date}</p>
                          </div>
												</div>
										))
										: <span>История пока что пуста</span>
							}
						</div>

						</div>
				</React.Fragment>
		);
	}

}


const mapStateToProps = state => ({
	history: state.history,
});

const mapDispatchToProps = dispatch => ({
	historyActions: bindActionCreators(historyActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
