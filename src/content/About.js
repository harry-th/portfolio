const About = {
    sectionName: "About",
    content: [
        {
            type: ["title", "large"],
            animations: ["fade-in", "slide-in", "slide-in-top"],
            typeIn: true,
            typeDelay: "0",
            typeDirection: "left",
            height: "10%",
            transitionDelay: ["0s"],
            value: "About Me"
        },
        {
            type: ["body"],
            animations: [["slide-in", "slide-in-right", "fade-in"], ["fade-in", "slide-in", "slide-in-top"], ["slide-in", "slide-in-bottom", "fade-in"]],
            height: "70%",
            typeIn: [false, false, false, true],
            typeDelay: ["", "", "", "4000"],
            typeDirection: ["", "", ""],
            transitionDelay: ["1s", "2s", '3s'],
            value: ["I am very cool.",
                "super cool.",
                "Webdev who likes building things.",
                "This is a site where I'm planning to add little slides on things I've done."]
        },
        {
            type: ["footer"],
            animations: ["fade-in", "slide-in", "slide-in-bottom"],
            height: "20%",
            transitionDelay: "9s",
            value: "To navigate to the next slide click the button on the right at the top of this box."
        },

    ]
}
export default About