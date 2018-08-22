import * as React from 'react';
import './Main.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Navigation from './../Navigation/Navigation';

import * as fetchImageAction from './../../actions/fetchImages';
import * as historyActions from './../../actions/history';

class Main extends React.PureComponent {

  handleButtonClick = () => {
    this.props.fetchImageAction.fetchImages();
  };

  render() {
    const { fetchImage } = this.props;

    return (
        <React.Fragment>
          <Navigation/>
          <div className="main-page">
            <p className="main-page__name">Главная</p>
            {
              Object.keys(fetchImage).length
                  ? <img
                      alt="image"
                      className="main-page__pic"
                      src={fetchImage.imageUrl}
                  />
                  : <span>Картинка еще не загружалась</span>
            }
            <div>
              <button className="main-page__button" onClick={this.handleButtonClick}>Загрузить</button>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  fetchImage: state.fetchImage,
  history: state.history,
});

const mapDispatchToProps = dispatch => ({
  fetchImageAction: bindActionCreators(fetchImageAction, dispatch),
  historyActions: bindActionCreators(historyActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
