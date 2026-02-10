
export default function AboutButton({img, text, className, onClick}: {img: string, text: string, className: string, onClick: () => void}) {
  return (
    <button className={`flex rounded-3xl py-2 px-4 items-center justify-center gap-1 cursor-pointer transition-all duration-500 hover:bg-sofolRed/60 ${className}`} onClick={onClick}>
        <img src={img} width={15}/>
        {text}
    </button>
  )
}
