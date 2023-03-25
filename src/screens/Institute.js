import HzTable from "../components/HzTable";

function Institute() {
    let Instituteheads = ["Logo", "Institute Name", "No of Campus", "Status"]
    let InstituteAllData = [
        {
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
            name: "NED University of Engineering and Technology",
            campus: 5,
            Status: "InActive"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
            name: "NED University of Engineering and Technology",
            campus: 5,
            Status: "Active"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
            name: "NED University of Engineering and Technology",
            campus: 5,
            Status: "InActive"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
            name: "NED University of Engineering and Technology",
            campus: 5,
            Status: "Active"
        },
        {
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
            name: "NED University of Engineering and Technology",
            campus: 5,
            Status: "InActive"
        }
    ]
    return (
        <HzTable data={InstituteAllData} tableheads={Instituteheads} title="Institute List" />
    )
}
export default Institute;