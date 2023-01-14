import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel, IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from "@ionic/react";


const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ค้นหาสินค้า</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar></IonSearchbar>
        <>
          <IonItem button>
            <IonLabel>
              <IonCard>
                <IonCardContent>
                  <h3>7115-5255-30</h3>
                  <p>Default detail</p>
                  <p>Default detail</p>
                  <p>Default detail</p>
                </IonCardContent>
              </IonCard>
            </IonLabel>
          </IonItem>
          <IonItem button detail={true}>
            <IonLabel>
              <h3>Button Item</h3>
              <p>Detail set to true - detail arrow displays on both modes</p>
            </IonLabel>
          </IonItem>
          <IonItem button detail={false}>
            <IonLabel>
              <h3>Button Item</h3>
              <p>Detail set to false - detail arrow hidden on both modes</p>
            </IonLabel>
          </IonItem>
        </>
      </IonContent>
    </IonPage>
  );
};

export default Search;
