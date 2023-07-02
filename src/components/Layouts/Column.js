function Column({children, style, colType = 6}) {
    return (
        <div className={`col-${colType} ${style}`}>
            {children}
        </div>
    );
}

export default Column;