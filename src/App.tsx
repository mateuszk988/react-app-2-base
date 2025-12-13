import AButton from '@atoms/AButton/AButton';
import MSection from '@molecules/MSection/MSection';

function App() {
  return (
    <MSection style={{ width: '500px' }} title="Przykładowa sekcja">
      <AButton type="secondary">Przykładowy button</AButton>
    </MSection>
  );
}

export default App;
