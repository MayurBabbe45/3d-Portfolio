const Button = ({text , className , id}) => {
  return (
   <a 
   onClick={(e)=>{
    e.preventDefault();

    if (id) {
      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scroll({top, behavior: 'smooth'});
      }
    }
   }}
   className={`${className ?? ''} cta-Wrapper`}>
    <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" className="" />
        </div>    
    </div>
   </a>
  )
}

export default Button