const ListItem = ({image, title, description}) => {
    return(
        <li className="concept" alt={title}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
      </li>
    )
}

export default ListItem;