function Row({children, style}) {
    return (
        <div className={`row ${style}`}>
            {children}
        </div>
    );
}

export default Row;