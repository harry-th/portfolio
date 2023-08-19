const Portfolio = {
    sectionName: "Portfolio",
    content: [
        {
            type: ["title", "large"],
            animations: ["fade-in", "slide-in", "slide-in-top"],
            height: "10%",
            transitionDelay: ["0s"],
            value: "About this Portfolio"
        },
        {
            type: ["body"],
            animations: [["slide-in", "slide-in-right"], ["slide-in", "slide-in-top"], ["slide-in", "slide-in-left", "fade-in"], ["slide-in", "slide-in-left", "fade-in"]],
            height: "70%",
            typeIn: [true, true, true, true, true],
            typeDelay: ["", "after", "after", "after", "after"],
            typeDirection: ["up", "down", "right", "left"],
            transitionDelay: ["0s", "0s", '0s', '0s'],
            value: ["This whole window here is a reusable react component.",
                "Which can make all these animations based on the data I put into it.",
                "Typing effects, fade-in and slide-in and some other things.",
                "Or a mix/combination of each of these effects simultaneously",
                "One interesting feature I made which you might have noticed is the ability to have these type effects follow sequentially without needing to time how long they should take."
            ]
        },
        {
            type: ["footer"],
            animations: ["fade-in", "slide-in", "slide-in-bottom"],
            height: "20%",
            typeIn: true,
            typeDelay: "after",
            transitionDelay: "5s",
            value: "The center button in the navigation bar will change if there is something else to see for that slide."
        },
    ]
}
export default Portfolio