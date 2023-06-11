
import './style.css';

function Hero (props){
    return(
        <div className='superHeroesContainer'>
<h2 className='valueName'>{props.name}</h2>
<div><span className='valueName'>Вселенная:</span> {props.universe}</div>
<div><span className='valueName'>Альтер эго:</span> {props.alterego}</div>
<div><span className='valueName'>Род деятельности:</span> {props.occupation}</div>
<div><span className='valueName'>Друзья:</span> {props.friends}</div>
<div><span className='valueName'>Суперсилы:</span> {props.superpowers}</div>
<div><img src={props.url} alt='super_hero' className='img_hero'/></div>
</div>
    );
}

export default Hero;