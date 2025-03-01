export const formIsoDate = (isoDate) =>{
    const date = new Date(isoDate)

    const formatedDate = date.toLocaleString('en-US', {year: 'numeric', month:'long', day: 'numeric'})

    return formatedDate
}