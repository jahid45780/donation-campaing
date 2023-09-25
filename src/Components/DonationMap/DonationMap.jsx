

const DonationMap = ({donation}) => {
    const {image,title}= donation;
    return (
        <div>
           <img src={ image } alt="" /> 
        </div>
    );
};

export default DonationMap;