

export const HamburgerButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{
                width: '30px',
                height: '4px',
                backgroundColor: '#333',
                margin: '6px 0'
            }}></div>
            <div style={{
                width: '30px',
                height: '4px',
                backgroundColor: '#333',
                margin: '6px 0'
            }}></div>
            <div style={{
                width: '30px',
                height: '4px',
                backgroundColor: '#333',
                margin: '6px 0'
            }}></div>
        </button>
    );
};