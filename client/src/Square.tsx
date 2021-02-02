import React from 'react';
interface props{
    children:any,
    black:boolean
}
const Square:React.FC<props> = ({children,black}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Square;