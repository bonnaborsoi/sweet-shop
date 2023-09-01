import { Link } from 'react-router-dom';

export const HomeButton: React.FC = () => {
    return ( 
        <div className="px-56 py-4">
            <Link to ="/">
                <button className="p-4 w-24 text-lg  font-semibold bg-[#FCBAAD] text-white rounded-md">
                <h1> Voltar</h1> 
                </button>
            </Link>
      </div>
    )
}