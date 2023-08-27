const PipeTobaccoSearch = {
    sectionName: "PipeTobaccoSearch",
    active: { type: "link", link: "https://pipetobaccosearch.com", text: "view the site!" },
    content: [
        {
            type: ["title", "large"],
            animations: ["slide-in", "slide-in-left"],
            height: "10%",
            transitionDelay: ["0s"],
            value: "PipeTobaccoSearch.com"
        },
        {
            type: ["body"],
            animations: [["slide-in", "slide-in-right", "fade-in"], ["slide-in", "slide-in-right", "fade-in"], ["slide-in", "slide-in-left", "fade-in"]],
            // height: "",
            typeIn: [false, false, true],
            typeDirection: ["", "", "down"],
            typeDelay: ["", "", "3000"],
            transitionDelay: ["0.3s", "1s", '0s'],
            value: ["This is a hosted fullstack project using .NET 6 and EF CORE with sql database.",
                "Its a database and search functionality for pipe tobacco.",
                "I smoke a pipe."]
        },
        {
            type: ["body"],
            animations: ["slide-in", "slide-in-right", "fade-in"],
            //height: "70%",
            transitionDelay: ["5.5s"],
            value: "Here is a peek into my analytics for the last 7 days!"
        },
        {
            type: ["analytics"],
            animations: ["slide-in", "slide-in-right", "fade-in"],
            //height: "70%",
            transitionDelay: ["6.5s"],
            value: { component: "Analytics" }
        },
        {
            type: ["body"],
            animations: ["slide-in", "slide-in-right", "fade-in"],
            value: "This project is also practice and exposure to SEO and Google search console. Above Is an integration with the Google Search Console Api which should be querying and updating each day with nextjs' api routes system.",
            transitionDelay: ["9.5s"],

        },
        {
            type: ["footer"],
            animations: ["fade-in", "slide-in", "slide-in-bottom"],
            height: "20%",
            typeIn: true,
            typeDirection: "down",
            typeDelay: "11000",
            value: "See? you can click the middle button now to view the site!"
        },
    ]
}
export default PipeTobaccoSearch