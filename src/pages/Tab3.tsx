import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab3: React.FC = () => {
  const [descuentosData, setDescuentosData] = useState<any[]>([]);

  useEffect(() => {
    const fetchDescuentosData = async () => {
      try {
        const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
        const data = await response.json();
        setDescuentosData(data);
      } catch (error) {
        console.error('Error fetching data:', (error as Error).message);
      }
    };

    fetchDescuentosData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Descuentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Descuentos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ 
          background: 'radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #DB00FF 0%, #000000 100%), linear-gradient(45deg, #241E92 0%, #241E92 40%, #5432D3 40%, #5432D3 50%, #7B6CF6 50%, #7B6CF6 70%, #E5A5FF 70%, #E5A5FF 100%), linear-gradient(180deg, #01024E 0%, #01024E 43%, #543864 43%, #543864 62%, #8B4367 62%, #8B4367 80%, #FF6464 80%, #FF6464 100%)',
          backgroundBlendMode: 'overlay, hard-light, overlay, normal',
          padding: '20px',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {descuentosData.map((deal: any, index: number) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ecf0f1',
                  margin: '10px',
                  padding: '10px',
                  border: '1px solid #bdc3c7',
                  borderRadius: '8px',
                  width: '300px',
                }}
              >
                <p>{deal.title}</p>
                <p>{deal.store}</p>
                <p>Precio original: {deal.normalPrice}</p>
                <p>Precio con descuento: {deal.salePrice}</p>
                {deal.thumb && <img src={deal.thumb} alt={`Imagen para ${deal.title}`} style={{ width: '100%', borderRadius: '5px' }} />}
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;