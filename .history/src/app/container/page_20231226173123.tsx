import {ReactNode} from 'react';


export function Container({children }:{children:ReactNode}){
    return(
        <div className=''>
            {children}
        </div>
    )
}