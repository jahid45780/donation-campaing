

const getStoredApplication = () => {

    const storedDonationApplication = localStorage.getItem('donation-application')
    if(storedDonationApplication){
        return JSON.parse(storedDonationApplication)
    }
    return [];
}

const saveDonation = id =>{
const storedDonationApplications = getStoredApplication();
const exists = storedDonationApplications.find(donationId => donationId === id);
if(!exists){
    storedDonationApplications.push(id);
    localStorage.setItem('donation-application', JSON.stringify(storedDonationApplications))
}


}


export { getStoredApplication, saveDonation }