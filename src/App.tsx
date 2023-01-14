import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { archiveOutline, checkboxOutline, pricetagOutline, searchOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Pallet from './pages/Pallet';
import Prepare from './pages/Prepare';
import Search from './pages/Search';
import Shelve from './pages/Shelve';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/fifo">
            <Search />
          </Route>
          <Route exact path="/shelve">
            <Shelve />
          </Route>
          <Route path="/prepare">
            <Prepare />
          </Route>
          <Route path="/pallet">
            <Pallet />
          </Route>
          <Route exact path="/">
            <Redirect to="/fifo" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="fifo" href="/fifo">
            <IonIcon icon={searchOutline} />
            <IonLabel>ค้นหา</IonLabel>
          </IonTabButton>
          <IonTabButton tab="shelve" href="/shelve">
            <IonIcon icon={pricetagOutline} />
            <IonLabel>รอจัดเก็บ</IonLabel>
          </IonTabButton>
          <IonTabButton tab="prepare" href="/prepare">
            <IonIcon icon={archiveOutline} />
            <IonLabel>จัดเตรียม</IonLabel>
          </IonTabButton>
          <IonTabButton tab="pallet" href="/pallet">
            <IonIcon icon={checkboxOutline} />
            <IonLabel>ทำพาเลท</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
