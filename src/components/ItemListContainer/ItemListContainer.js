import media from '../.././assets/media.jpg';


export const ItemListContainer=(props)=>{
    return(
        <div style={{fontSize:'20px', margin: '40px'}}>
            <h1>{props.greeting} a CryptoMedias</h1>
            {/* <img src={media} alt="" height='500px' width='500px'></img> */}
        </div>
    )
}

