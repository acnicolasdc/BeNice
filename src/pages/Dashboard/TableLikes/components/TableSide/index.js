import TableSideComponent from "./TableSide";

TableSideComponent.defaultProps = {
    rows: [
        { 
            theme: "Medio ambiente",
            likes: 1000,
        },
        { 
            theme: "Transporte",
            likes: 1020,
        },
        { 
            theme: "Ciudadano",
            likes: 1060,
        },
    ]
}

export default TableSideComponent;