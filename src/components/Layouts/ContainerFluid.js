function ContainerFluid({children, style = 'm-5'}) {
    return (
        <div className={`container-fluid ${style}`}>
            {children}
        </div>
    );
}

export default ContainerFluid;