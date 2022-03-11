import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import NaverMap from './Component/NaverMap/NaverMap';

declare global {
  interface Window {
    mapFunctions: any;
  }
}

function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path={'/map'} exact={true} component={NaverMap} />
        <Redirect to={'/map'} />
      </Switch>
    </div>
  );
}

export default App;
