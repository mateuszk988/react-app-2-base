import AButton from '@atoms/AButton/AButton';

type StatusValue = 'all' | 'active' | 'completed';
type StatusLabel = Capitalize<StatusValue>; // Capitalize stworzy unię: "All" | "Active" | "Completed"

interface StatusOption {
  value: StatusValue;
  label: StatusLabel;
}

// 1. Definicja interfejsu dla propsów
// a) selectedStatus typu statusValue np. 'active' --> selectedStatus = 'active'
// b) statusOptions typu StatusOption[]
// c) onStatusChange --> (status: StatusValue) => void

// 2. Stworzenie komponentu o nazwie MStatusFilter

// 3. Destrukturyzacja propsów

// 4. JSX wynikowy ma zwracać:
// a) MSection z tytułem "Filter by Status" oraz kontentem, który zawiera listę statusów

// 5. Listę statusów definiujemy w zmiennej const renderedFilterButtons
// Wewnątrz renderedFilterButtons wykorzystujemy .map i dla każdego selectedStatus tworzymy sobie element JSX
// Każdy element JSX ma zawierać atom: AButton

{
  /* <div key={???} className="???">
    <AButton ???> LABELKA </AButton
</div> */
}

// 6. Finalnie to, co jest w renderedFilterButtons wrzucamy jako children do <MSection> ... </MSection>
