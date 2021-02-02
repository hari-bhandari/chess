import React from 'react';
interface props{
    children:any
}
const Square:React.FC<props> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Square;