// TweenMax.to("#theSquare", 1, {attr:{x:0},repeat:-1, yoyo:true});
TweenLite.to("#theSquare", 11, {
    ease: Elastic.easeOut.config(11, 7),
    x: 130,
    transformOrigin: "50% 100%",
    scaleX: 1.5,
    yoyo: true
});
TweenLite.to("#toBeRevealed", 1, {
    ease: Elastic.easeOut.config(9, .9),
    x: 55,
    transformOrigin: "70% 100%",
    scaleX: 1.2,
    yoyo: true
});