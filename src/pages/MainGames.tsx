import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './MainGames.css'; // Importa el archivo CSS

const MainGames: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Catalogo de PlayStation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Catalogo de PlayStation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="cover-image" style={{ position: 'relative' }}>
          <img src="assets/fondodepantalla.jpg" alt="Cover" />
          <div style={{
            position: 'absolute',
            top: '10px', 
            left: '50%',
            transform: 'translate(-50%, 0)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            Explora y, Ahorra: Todos tus juegos y descuentos favoritos en una sola app.
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MainGames;
