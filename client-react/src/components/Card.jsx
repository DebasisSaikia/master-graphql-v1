

import PropTypes from 'prop-types';

const Card = ({data}) => {
    return (
        
        <div key={data?.id} className='user-card'>
            <h1>{data?.name}</h1>
            <p>{data?.nationality || data?.yearOfPublication}</p>
        </div>
        
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        nationality: PropTypes.string,
        yearOfPublication: PropTypes.number
    }).isRequired
};

export default Card
