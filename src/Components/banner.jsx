import '../style/banner.css'
const Banner = (props) => {
    let title=props.data
    return ( <div className="banner">
        <div className="title">
            <h1 className='text-center text-light'>{title}</h1>
        </div>
    </div> );   
}
export default Banner;