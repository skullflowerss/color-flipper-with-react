export const RgbMaker = () =>{
    let rgb = 'rgb('
    let r = Math.floor(Math.random() * 256).toString()
    let g = Math.floor(Math.random() * 256).toString()
    let b = Math.floor(Math.random() * 256).toString()
    return `${rgb} ${r}, ${g}, ${b})`
}