import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 15,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <Feedback />
    </div>
  );
};
