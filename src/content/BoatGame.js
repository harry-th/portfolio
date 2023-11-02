const BoatGame = {
    sectionName: "BoatGame",
    active: { type: "component", name: "boatgame", text: "play the game!" },
    content: [
        {
            type: ["title", "large"],
            animations: ["fade-in", "slide-in", "slide-in-left"],
            height: "10%",
            transitionDelay: ["0s"],
            value: "Boatleship"
        },
        {
            type: ["body", "small"],
            animations: [["slide-in", "slide-in-right"], ["fade-in", "slide-in", "slide-in-top"], ["slide-in", "slide-in-right", "fade-in"], ["slide-in", "slide-in-right", "fade-in"], ["slide-in", "slide-in-right", "fade-in"], ["slide-in", "slide-in-right", "fade-in"], ["slide-in", "slide-in-right", "fade-in"], ["slide-in", "slide-in-right", "fade-in"], ["slide-in", "slide-in-right", "fade-in"]],
            // height: "",
            transitionDelay: ["0.5s", "3s", '5s', "7s", "9s", "11s", "13s", "15s", "17s"],
            value: ["This is a multiplayer battleship game, though because battleship is boring I added additional rules, the rules are however somewhat too complicated to explain succinctly.",
                "Ok so here it goes the rules:",
                "Every fourth turn you get a free shot, this is relevant to some of the other abilities",
                "There are three 'characters' each character has two abilities (the names are terrible)",
                "CornerMan can build his ships arounds the board (to the next row or to the bottom of the board), and if he hits the rear and head of a ship it sinks.",
                "Lineman has 4 charges for his abilities, he can fire two shots with one at the last two squares the opponent shot at or can connect any two squares and shoot at every square between as long as you or your enemy hasn't shot at anything in between.",
                "Orangeman has a passive ability which protects squares he has shot at (they can't fire at them for one turn), or he can 'bluff', when bluffing he can't see whether his shots land but for each shot he gains a charge on a subsequent ability which will fire randomly at the opponent boards three times for each bluffed shot.",
                "If you 'call his bluff' his shots will become real(the ability that fires randomly will reset them) and it will disable his ability, if you call his bluff and he wasn't bluffing you will lose your next free shot.",
                "I think this is pretty complicated and interesting I think, and everything is held server side to prevent cheating, it also is capable of handling disconnects and remembering the decisions the players have made. There's more to it but its easier to just check it out. You might want to resize the window to be slightly larger it doesn't resize perfectly, PipeTobaccoSearch and this site(besides this) are better examples of responsive design."]
        },
        {
            type: ["footer", "small"],
            animations: ["fade-in", "slide-in", "slide-in-bottom"],
            height: "20%",
            value: "You can play the game just by clicking the middle button, feel free to contact me if there's no one to play with."
        }
    ]
}
export default BoatGame