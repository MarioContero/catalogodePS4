import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './Tab2.css';

const Tab2: React.FC = () => {
  const location = useLocation();
  const [juegosData, setJuegosData] = useState<any[]>([]);

  useEffect(() => {
    const fetchJuegosData = async () => {
      try {
        const response = await fetch('https://www.cheapshark.com/api/1.0/games?title=batman');
        const data = await response.json();
        setJuegosData(data);
      } catch (error) {
        console.error('Error fetching data:', (error as Error).message);
      }
    };

    fetchJuegosData();
  }, [location.pathname]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Juegos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Juegos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ 
          background: 'radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #DB00FF 0%, #000000 100%), linear-gradient(45deg, #241E92 0%, #241E92 40%, #5432D3 40%, #5432D3 50%, #7B6CF6 50%, #7B6CF6 70%, #E5A5FF 70%, #E5A5FF 100%), linear-gradient(180deg, #01024E 0%, #01024E 43%, #543864 43%, #543864 62%, #8B4367 62%, #8B4367 80%, #FF6464 80%, #FF6464 100%)',
          backgroundBlendMode: 'overlay, hard-light, overlay, normal',
          padding: '20px',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {juegosData.map((game: any, index: number) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#D7DBDD',
                  margin: '10px',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  width: '300px',
                }}
              >
                <p>ID del juego: {game.gameID}</p>
                <p>Nombre externo: {game.external}</p>
                <p>Precio más barato: {game.cheapest}</p>
                <img
                  src={game.thumb}
                  alt={`Thumbnail de ${game.external}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '5px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;